const Store = require('electron-store');
const settings = new Store();
const Cryptr = require('cryptr');
const cryptr = new Cryptr('user');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { machineId, machineIdSync } from 'node-machine-id';
let machine_id;
async function getMachineId() {
  machine_id = await machineId();
  return machine_id;
}
let userDefaults = {
  id: '',
  isEULAaccepted: false,
  audioDownloadsCount: 0,
  videoDownloadsCount: 0,
  warpstagramDownloadsCount: 0,
  audio: 'free',
  video: 'free',
  warpstagram: 'free',
  audioAuthCode: '',
  videoAuthCode: '',
  warpstagramAuthCode: '',
};

function encryptUser(obj) {
  let newObj = { ...obj };
  for (const key in obj) {
    newObj[key] = cryptr.encrypt(obj[key]);
  }
  return newObj;
}
function decryptUser(obj) {
  let newObj = { ...obj };
  for (const key in obj) {
    newObj[key] = cryptr.decrypt(obj[key]);
  }
  return newObj;
}
function setUser(user: any) {
  let encryptedUser = encryptUser(user);
  settings.set('user', encryptedUser);
}
function resetUser() {
  settings.delete('user');
}
function increaseAudioDownloadCount() {
  // let decryptedUser = getUser();
  // let updatedUser = { ...decryptedUser };
  // updatedUser.audioDownloadsCount++;
  // setUser(updatedUser);
}
function increaseVideoDownloadCount() {
  // let decryptedUser = getUser();
  // let updatedUser = { ...decryptedUser };
  // updatedUser.videoDownloadsCount++;
  // setUser(updatedUser);
}

function increaseWarpstagramDownloadCount() {
  // let decryptedUser = getUser();
  // let updatedUser = { ...decryptedUser };
  // updatedUser.warpstagramDownloadsCount++;
  // setUser(updatedUser);
}
function getAudioDownloadsCount() {
  // let decryptedUser = getUser();
  // return decryptedUser.audioDownloadsCount;
}
function getVideoDownloadsCount() {
  // let decryptedUser = getUser();
  // return decryptedUser.videoDownloadsCount;
}
function getWarpstagramDownloadsCount() {
  // let decryptedUser = getUser();
  // return decryptedUser.warpstagramDownloadsCount;
}
function canUserDownloadAudio() {
  // let decryptedUser = getUser();
  // if (decryptedUser.audio === 'free') {
  //   if (decryptedUser.audioDownloadsCount < 16) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   return true;
  // }
}
function canUserDownloadVideo() {
  // let decryptedUser = getUser();
  // if (decryptedUser.video === 'free') {
  //   if (decryptedUser.videoDownloadsCount < 16) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   return true;
  // }
}
function canUserDownloadWarpstagram() {
  // let decryptedUser = getUser();
  // if (decryptedUser.warpstagram === 'free') {
  //   if (decryptedUser.warpstagramDownloadsCount < 3) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } else {
  //   return true;
  // }
}
function upgradeUserModule(moduleType: string, moduleEdition: string) {
  // // console.log(moduleType, moduleEdition);
  // let decryptedUser = getUser();
  // let updatedUser = { ...decryptedUser };
  // for (const key in updatedUser) {
  //   if (moduleType.includes(key)) {
  //     updatedUser[key] = moduleEdition;
  //   }
  // }
  // setUser(updatedUser);
  // // console.log(updatedUser);
  // return updatedUser;
}
import { faker } from '@faker-js/faker';
export async function createUser() {}
const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
export async function getUser() {
  console.log('getting user');

  // let userFromDB;
  // let machineID = await getMachineId();
  // console.log('machineID', machineID);
  // try {
  //   userFromDB = await prisma.user.findUnique({
  //     where: {
  //       id: machineID,
  //     },
  //   });
  //   if (userFromDB) {
  //     return userFromDB;
  //   } else if (userFromDB === null) {
  //     createUser();
  //   }

  //   // console.log('userFromDB', userFromDB);
  //   // return userFromDB;
  // } catch (error) {
  //   userFromDB = createUser();
  //   return userFromDB;
  // }
  const user = await prisma.user.create({
    data: {
      machine_1_id: await getMachineId(),
    },
  });
  console.log(user);
  return user;
  // resetUser(); // REMOVE, FOR TESTING ONLY
  // let encryptedUser = settings.get('user');
  // if (encryptedUser === undefined) {
  //   setUser(userDefaults);
  //   return userDefaults;
  // } else {
  //   encryptedUser = settings.get('user');
  //   // console.log(encryptedUser);
  //   let decryptedUser = decryptUser(encryptedUser);
  //   return decryptedUser;
  // }
}

module.exports = {
  getUser: getUser,
  setUser: setUser,
  increaseAudioDownloadCount: increaseAudioDownloadCount,
  increaseVideoDownloadCount: increaseVideoDownloadCount,
  increaseWarpstagramDownloadCount: increaseWarpstagramDownloadCount,
  getAudioDownloadsCount: getAudioDownloadsCount,
  getVideoDownloadsCount: getVideoDownloadsCount,
  getWarpstagramDownloadsCount: getWarpstagramDownloadsCount,
  canUserDownloadAudio: canUserDownloadAudio,
  canUserDownloadVideo: canUserDownloadVideo,
  canUserDownloadWarpstagram: canUserDownloadWarpstagram,
  upgradeUserModule: upgradeUserModule,
  resetUser: resetUser,
};
// USE TO UPGRADE USER
// User.upgradeUserModule('audio', 'free');
// User.upgradeUserModule('video', 'free');
// User.upgradeUserModule('warpstagram', 'free');
