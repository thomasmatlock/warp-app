import React, { useState, useEffect } from 'react';

let downloadsAudio = [
  // {
  //   date: new Date(2021, 11, 26, 16, 44, 10),
  //   format: 'wav',
  //   id: '2',
  //   lengthDisplay: '00:54:32',
  //   size: '3.2 MB',
  //   source: 'vimeo',
  //   thumbnailDisplay: 'https://i3.ytimg.com/vi/OulXMB4W5B0/maxresdefault.jpg',
  //   title: 'The Wonder Years',
  //   type: 'audio',
  //   url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
  // },
  // {
  //   date: new Date(2020, 10, 1, 9, 40, 0),
  //   format: 'mp3',
  //   id: '1',
  //   lengthDisplay: '00:07:32',
  //   size: '7.8 MB',
  //   source: 'youtube',
  //   thumbnailDisplay:
  //     'https://i.ytimg.com/vi/6bNZI2GG6Yo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtyTUDYVEOE9jk2NeMsJ8zBR5G1Q',
  //   title: 'Beatles - Abbey Road',
  //   type: 'audio',
  //   url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
  // },
  // {
  //   date: new Date(2022, 1, 22, 14, 22, 10),
  //   format: 'ogg',
  //   id: '3',
  //   lengthDisplay: '00:01:32',
  //   size: '10.6 MB',
  //   source: 'vimeo',
  //   thumbnailDisplay: 'https://i3.ytimg.com/vi/3Jw3JdX7KjA/maxresdefault.jpg',
  //   title: 'The Lion, the Witch and the Wardrobe',
  //   type: 'audio',
  //   url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
  // },
  // {
  //   date: new Date(2020, 11, 25, 9, 44, 10),
  //   format: 'm4a',
  //   id: '4',
  //   lengthDisplay: '00:01:32',
  //   size: '20.5 MB',
  //   source: 'youtube',
  //   thumbnailDisplay: 'https://i3.ytimg.com/vi/vpO8chg3HK4/maxresdefault.jpg',
  //   title: 'Villa Encanto Airbnb 4K NXTLVL HOME  Santa Barbara, CA',
  //   type: 'audio',
  //   url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
  // },
];
let downloadsVideo = [
  // {
  //   // date: Date('2022-01-01'),
  //   date: new Date(2022, 1, 1, 8, 44, 10),
  //   // date: 'Mon Aug 15 2022 16:17:56 GMT-0400 (Eastern Daylight Time)',
  //   format: 'mp4',
  //   fps: 23.976,
  //   id: '1',
  //   lengthDisplay: '00:07:32',
  //   resolution: '720p',
  //   size: '33.2 MB',
  //   source: 'tiktok',
  //   thumbnailDisplay: 'https://i3.ytimg.com/vi/zZy0knYMxhQ/maxresdefault.jpg',
  //   title: 'Peaky Blinders Season 7 The Movie',
  //   type: 'video',
  //   url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
  // },
  // {
  //   // date: Date('2021-12-01'),
  //   date: new Date(2022, 10, 1, 23, 44, 10),
  //   // date: 'Mon Aug 15 2021 16:17:56 GMT-0400 (Eastern Daylight Time)',
  //   format: 'mov',
  //   fps: 59.976,
  //   id: '2',
  //   lengthDisplay: '00:54:32',
  //   resolution: '1080p',
  //   size: '9.9 MB',
  //   source: 'vimeo',
  //   thumbnailDisplay: 'https://i3.ytimg.com/vi/2nsT9uQPIrk/maxresdefault.jpg',
  //   title: 'The Wonder Years',
  //   type: 'video',
  //   url: 'https://www.youtube.com/watch?v=2nsT9uQPIrk',
  // },
  // {
  //   // date: Date('2022-07-01'),
  //   date: new Date(2020, 10, 1, 23, 44, 10),
  //   // date: 'Mon Aug 15 2022 16:17:56 GMT-0400 (Eastern Daylight Time)',
  //   format: 'mkv',
  //   fps: 60,
  //   id: '3',
  //   lengthDisplay: '00:01:32',
  //   resolution: '3840p',
  //   size: '1.2 MB',
  //   source: 'vimeo',
  //   thumbnailDisplay: 'https://i3.ytimg.com/vi/F02Y3C16Uwg/maxresdefault.jpg',
  //   title: 'The Lion, the Witch and the Wardrobe',
  //   type: 'video',
  //   url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
  // },
];
let downloadsWarpstagram = {
  subscribed: [
    {
      // format: 'mkv',
      // fps: 60,
      id: '3',
      // length: '00:01:32',
      // resolution: '3840p',
      // size: '1.2 MB',
      // source: 'vimeo',
      // thumbnail: 'https://i3.ytimg.com/vi/F02Y3C16Uwg/maxresdefault.jpg',
      title: 'thedreamsetup',
      type: 'warpstagram',
      url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
    },
    {
      // format: 'mkv',
      // fps: 60,
      id: '4',
      // length: '00:01:32',
      // resolution: '3840p',
      // size: '1.2 MB',
      // source: 'vimeo',
      // thumbnail: 'https://i3.ytimg.com/vi/F02Y3C16Uwg/maxresdefault.jpg',
      title: 'peakyblindersofficial',
      type: 'warpstagram',
      url: 'https://www.youtube.com/watch?v=uq-_-RJt-E8',
    },
  ],
  pinned: [],
};
const DownloadsContext = React.createContext({
  downloadsAudio: [],
  downloadsVideo: [],
  downloadsAudioState: {},
  downloadsVideoState: {},
  downloadsWarpstagram: {},
  getDownloadID: () => {},
});
const getDownloadID = (id) => {
  console.log(id);
};
let audioDownloadsPushed = false;
let videoDownloadsPushed = false;
let lastDownloadID = 0;
export const DownloadsContextProvider = (props) => {
  const [downloadsAudioState, setDownloadsAudioState] = useState(0);
  const [downloadsVideoState, setDownloadsVideoState] = useState(0);
  window.electron.ipcRenderer.on('main: item-downloaded', (arg) => {
    let item = arg[0];
    let mode = arg[1];
    // console.log(item, mode);

    if (mode === 'audio' && item.id != lastDownloadID) {
      downloadsAudio.push(item);
      setDownloadsAudioState(downloadsAudio.length);
      lastDownloadID = item.id;
    }
    if (mode === 'video' && item.id != lastDownloadID) {
      downloadsVideo.push(item);
      setDownloadsVideoState(downloadsVideo.length);
      lastDownloadID = item.id;
    }
  });
  window.electron.ipcRenderer.on('main: audioDownloads', (items) => {
    // console.log(items);
    // console.log(items[0].date);
    // items.forEach((item) => downloadsAudio.push(item));
    // downloadsVideo.push(item);
    if (!audioDownloadsPushed) {
      items.forEach((item) => downloadsAudio.push(item));
      setDownloadsAudioState(downloadsAudio.length);
      audioDownloadsPushed = true;
    }
  });
  window.electron.ipcRenderer.on('main: videoDownloads', (items) => {
    // console.log(items);
    if (!videoDownloadsPushed) {
      items.forEach((item) => downloadsVideo.push(item));
      setDownloadsVideoState(downloadsVideo.length);
      videoDownloadsPushed = true;
    }
    // downloadsVideo.push(item);
  });
  window.electron.ipcRenderer.on('main: warpstagramDownloads', (items) => {
    // items.forEach((item) => downloadsWarpstagram.push(item));
    // console.log(items);
    // downloadsVideo.push(item);
  });

  return (
    <DownloadsContext.Provider
      value={{
        downloadsAudio: downloadsAudio,
        downloadsVideo: downloadsVideo,
        downloadsAudioState: downloadsAudioState,
        downloadsVideoState: downloadsVideoState,
        downloadsWarpstagram: downloadsWarpstagram,
        getDownloadID: getDownloadID,
      }}
    >
      {props.children}
    </DownloadsContext.Provider>
  );
};

export default DownloadsContext;
