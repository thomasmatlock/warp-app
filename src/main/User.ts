const Store = require('electron-store');
import os from 'os';
const settings = new Store();
const Cryptr = require('cryptr');
const cryptr = new Cryptr('user');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import UserOffline from './UserOffline';
import generateCode from './UserAuthCodes';
import { machineId, machineIdSync } from 'node-machine-id';
let machine_id;
async function getMachineId() {
  machine_id = await machineId();
  return machine_id;
}
export async function upgradeUserModule(
  moduleType: string,
  moduleEdition: string
) {
  let user = await getUser();
  let updatedUser = { ...user };
  let audioAuthCode;
  let videoAuthCode;
  let warpstagramAuthCode;
  if (moduleEdition === 'free') {
    if (moduleType === 'audio') audioAuthCode = '';
    if (moduleType === 'video') videoAuthCode = '';
    if (moduleType === 'warpstagram') warpstagramAuthCode = '';
  } else if (moduleEdition != 'free') {
    if (moduleType === 'audio') {
      if (user.audioAuthCode === '') {
        audioAuthCode = generateCode(moduleType, moduleEdition);
      } else if (user.audioAuthCode != '') {
        if (user.audio != moduleEdition) {
          audioAuthCode = generateCode(moduleType, moduleEdition);
        } else if (user.audio === moduleEdition) {
          audioAuthCode = user.audioAuthCode;
        }
      }
    }
    if (moduleType === 'video') {
      if (user.videoAuthCode === '') {
        videoAuthCode = generateCode(moduleType, moduleEdition);
      } else if (user.videoAuthCode != '') {
        if (user.video != moduleEdition) {
          videoAuthCode = generateCode(moduleType, moduleEdition);
        } else if (user.video === moduleEdition) {
          videoAuthCode = user.videoAuthCode;
        }
      }
    }
    if (moduleType === 'warpstagram') {
      if (user.warpstagramAuthCode === '') {
        warpstagramAuthCode = generateCode(moduleType, moduleEdition);
      } else if (user.warpstagramAuthCode != '') {
        if (user.warpstagram != moduleEdition) {
          warpstagramAuthCode = generateCode(moduleType, moduleEdition);
        } else if (user.warpstagram === moduleEdition) {
          warpstagramAuthCode = user.warpstagramAuthCode;
        }
      }
    }
  }
  try {
    for (const key in updatedUser) {
      if (moduleType.includes(key)) {
        updatedUser[key] = moduleEdition;
        updatedUser = await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            //  UPGRADE MODULE EDITION
            audio: moduleType === 'audio' ? moduleEdition : user.audio,
            video: moduleType === 'video' ? moduleEdition : user.video,
            warpstagram:
              moduleType === 'warpstagram' ? moduleEdition : user.warpstagram,
            //  ADD MODULE AUTH CODE IF NOT PRESENT
            audioAuthCode: audioAuthCode,
            videoAuthCode: videoAuthCode,
            warpstagramAuthCode: warpstagramAuthCode,
          },
        });
      }
    }
    // console.log(updatedUser);
    return updatedUser;
    // return user;
  } catch (error) {
    console.log(error);
  }
}
export async function resetUser() {
  try {
    let updateUser = await upgradeUserModule('audio', 'free');
    updateUser = await upgradeUserModule('video', 'free');
    updateUser = await upgradeUserModule('warpstagram', 'free');
    return updateUser;
  } catch (error) {
    console.log(error);
  }
}
export async function upgradeAllUserModules(moduleEdition: string) {
  let user = await getUser();
  try {
    user = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        //  UPGRADE MODULE EDITION
        audio: moduleEdition,
        video: moduleEdition,
        warpstagram: moduleEdition,
        //  ADD MODULE AUTH CODE IF NOT PRESENT
        audioAuthCode: generateCode('audio', moduleEdition),
        videoAuthCode: generateCode('video', moduleEdition),
        warpstagramAuthCode: generateCode('warpstagram', moduleEdition),
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
export async function createUser() {
  console.log('creating user');

  const user = await prisma.user.create({
    data: {
      machines: {
        create: {
          id: await getMachineId(),
          hostname: os.hostname(),
          platform: os.platform(),
          type: os.type(),
          release: os.release(),
        },
      },
    },
  });
  return user;
}
export async function getUser() {
  // console.log(os.hostname(), os.platform(), os.type(), os.release());

  let userFromDB;
  try {
    userFromDB = await prisma.user.findFirst({
      where: {
        machines: {
          some: {
            // id: 'e0b9b0b0-1b1a-11ec-8d3d-0242ac130003',
            id: await getMachineId(),
          },
        },
      },
    });
    if (userFromDB === null) {
      console.log('user with current machine not found');

      // userFromDB = await createUser();
      // return userFromDB;
    } else if (userFromDB) {
      // console.log('user with current machine found');

      return userFromDB;
    }
  } catch (error) {}
  userFromDB = await createUser();
  return userFromDB;
}

module.exports = {
  getUser: getUser,
  upgradeUserModule: upgradeUserModule,
  upgradeAllUserModules: upgradeAllUserModules,
  resetUser: resetUser,
};
