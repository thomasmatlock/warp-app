import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';
// const { Readable } = require('node:stream');
const stream = require('node:stream');
import got from 'got';
import { app, BrowserWindow, shell } from 'electron';
import ffmpeg from 'fluent-ffmpeg';
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
import convertToSeconds from './convertTimeToSeconds';
import getETA from './getETA';
import convertFile from './convertFile';

export default async function YoutubeDownload(mWin: BrowserWindow, item: any) {
  let randomInt = (Math.floor(Math.random() * 1000000) + 1).toString();
  // console.log(item.formats.length + ' formats');
  // console.log(item.type, item.format, item.path);

  let tempPath =
    item.type === 'audio'
      ? path.join(app.getPath('temp'), 'Warp Downloader' + randomInt + '.m4a')
      : path.join(app.getPath('temp'), 'Warp Downloader' + randomInt + '.mp4');
  // CUSTOM METHOD
  try {
    let progressPercentage;
    let downloadComplete = false;
    let downloadConversionComplete = false;
    let downloadBeginTime = Date.now();
    let conversionBeginTime;
    // https://github.com/sindresorhus/got/blob/main/documentation/3-streams.md
    const customStream = got.stream(item.matchedFormat.url, {}); // DEFAULT USE THIS
    customStream.pipe(fs.createWriteStream(tempPath), {});
    customStream.on('downloadProgress', (progress) => {
      progress.percent = Math.floor(progress.percent * 100);
      progressPercentage = progress.percent;
      mWin.webContents.send('item-download-progress', [
        item.id,
        progressPercentage,
      ]);

      mWin.webContents.send('item-download-eta-seconds-remaining', [
        item.id,
        getETA(
          downloadBeginTime,
          Date.now(),
          progress.transferred / progress.total
        ),
      ]);
      if (progress.transferred === progress.total) {
        downloadComplete = true;
        conversionBeginTime = Date.now();
      }
      // FILE CONVERSION
      if (downloadComplete && item.format != 'MP4') {
        // console.log('download complete');
        let conversionBeginTime = Date.now();
        let downloadConversionComplete = false;
        let conversionPercentage;
        let totalLengthSeconds = convertToSeconds(item.lengthSeconds);
        let KBconverted = 0;
        // try {
        // console.log('time to convert: ' + totalLengthSeconds);
        // shell.showItemInFolder(tempPath);
        // console.log(item.format);

        ffmpeg(tempPath)
          .toFormat(item.format.toLowerCase())
          .on('error', (err) => {
            console.log(err);
            fs.unlink(tempPath, (err) => {
              // if (err) console.log(err);
            });
          })
          .on('progress', (progress) => {
            // progress keys
            //            frames: NaN,
            // currentFps: NaN,
            // currentKbps: 128,
            // targetSize: 13607,
            // timemark: '00:14:30.79'

            KBconverted = progress.currentKbps + KBconverted;
            let secondsConverted = convertToSeconds(progress.timemark);
            conversionPercentage = (
              (secondsConverted / totalLengthSeconds) *
              100
            ).toFixed(0);
            console.log(conversionPercentage + '% converted');
            // getETA(conversionBeginTime, Date.now(), conversionPercentage / 100);

            mWin.webContents.send('item-convert-progress', [
              item.id,
              conversionPercentage,
            ]);
            mWin.webContents.send('item-conversion-eta-seconds-remaining', [
              item.id,
              getETA(
                conversionBeginTime,
                Date.now(),
                conversionPercentage / 100
              ),
            ]);
          })
          .on('end', () => {
            // fs.unlink(tempPath, (err) => {

            mWin.webContents.send('item-conversion-complete', [item.id]);
            // fs.rename(tempPath, item.path, (err) => {});
            downloadConversionComplete = true;
          })
          .save(item.path);
        // .then(() => {
        let fileSize = fs.statSync(tempPath).size;
        fileSize = fileSize.toFixed(1);
        mWin.webContents.send('item-fileSize-retrieved', [item.id, fileSize]);
        // });

        // convertFile(mWin, item, tempPath);
        // if (item.format === 'MP4') {
        //   let fileSize = fs.statSync(tempPath).size;
        //   fileSize = fileSize.toFixed(1);
        //   mWin.webContents.send('item-fileSize-retrieved', [item.id, fileSize]);
        //   mWin.webContents.send('item-conversion-complete', [item.id]);
        //   fs.rename(tempPath, item.path, (err) => {});
        //   downloadConversionComplete = true;
        // } else {
        //   convertFile(mWin, item, tempPath);
        // }
      } else if (downloadComplete && item.format == 'MP4') {
        let fileSize = fs.statSync(tempPath).size;
        fileSize = fileSize.toFixed(1);
        mWin.webContents.send('item-fileSize-retrieved', [item.id, fileSize]);
        mWin.webContents.send('item-conversion-complete', [item.id]);
        fs.rename(tempPath, item.path, (err) => {});
        downloadConversionComplete = true;
      }
    });
  } catch (error) {
    console.log(error);
  }
  // YTDL METHOD
  // try {
  //   let progressPercentage;
  //   let downloadComplete = false;
  //   let downloadConversionComplete = false;
  //   const currentDownload = ytdl(item.url, {
  //     // requestOptions: { agent },
  //     // filter: (format) => (format.itag = item.matchedFormat),
  //     // filter: (format) => (format.itag = 240),
  //   });
  //   currentDownload.pipe(fs.createWriteStream(tempPath));
  //   let downloadBeginTime = Date.now();
  //   let conversionBeginTime;
  //   currentDownload.on('progress', (chunkLength, downloaded, total) => {
  //     // getETA(downloadBeginTime, Date.now(), downloaded / total);
  //     progressPercentage = downloaded / total;
  //     // console.log(progressPercentage);
  //     progressPercentage = Math.round(progressPercentage * 100);

  //     mWin.webContents.send('item-download-progress', [
  //       item.id,
  //       progressPercentage,
  //     ]);
  //     mWin.webContents.send('item-download-eta-seconds-remaining', [
  //       item.id,
  //       getETA(downloadBeginTime, Date.now(), downloaded / total),
  //     ]);
  //     if (downloaded === total) {
  //       downloadComplete = true;
  //       conversionBeginTime = Date.now();
  //     }
  //     if (downloadComplete) {
  //       let conversionPercentage;
  //       let totalLengthSeconds = convertToSeconds(item.lengthSeconds);
  //       let KBconverted = 0;
  //       ffmpeg(tempPath)
  //         .toFormat(item.format.toLowerCase())
  //         .on('error', (err) => {
  //           console.log(err);

  //           fs.unlink(tempPath, (err) => {
  //             if (err) console.log(err);
  //           });
  //         })
  //         .on('progress', (progress) => {
  //           // console.log(progress);
  //           // progress keys
  //           //            frames: NaN,
  //           // currentFps: NaN,
  //           // currentKbps: 128,
  //           // targetSize: 13607,
  //           // timemark: '00:14:30.79'

  //           KBconverted = progress.currentKbps + KBconverted;
  //           let secondsConverted = convertToSeconds(progress.timemark);
  //           conversionPercentage = (
  //             (secondsConverted / totalLengthSeconds) *
  //             100
  //           ).toFixed(0);
  //           // getETA(conversionBeginTime, Date.now(), conversionPercentage / 100);

  //           mWin.webContents.send('item-convert-progress', [
  //             item.id,
  //             conversionPercentage,
  //           ]);
  //           mWin.webContents.send('item-conversion-eta-seconds-remaining', [
  //             item.id,
  //             getETA(
  //               conversionBeginTime,
  //               Date.now(),
  //               conversionPercentage / 100
  //             ),
  //           ]);
  //         })
  //         .on('end', () => {
  //           fs.unlink(tempPath, (err) => {
  //             // if (err) throw err;
  //             if (err) console.log(err);
  //           });
  //           downloadConversionComplete = true;
  //           mWin.webContents.send('item-conversion-complete', [item.id]);
  //           let fileSize = fs.statSync(item.path).size;
  //           fileSize = fileSize.toFixed(1);
  //           mWin.webContents.send('item-fileSize-retrieved', [
  //             item.id,
  //             fileSize,
  //           ]);
  //         })
  //         .save(item.path);
  //     }
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
}
