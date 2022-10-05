const fs = require('fs').promises;
const { promisify } = require('util');
const settings = require('electron-settings');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

// PRE-CHECK
// check for markup in settings
// run scenario 1 if it doesnt exist in settings
// run scenario 2 if it does exist in settings

// SCENARIO 1 (no markup saved to load)
// load markup directly from file
// save markup to settings
// inject markup

// SCENARIO 2 (markup saved, and available to load)
// load markup from settings
// inject markup

// APP RUNNING
// need SAVE function to fire and save to settings, every time user clicks something
// // it saves

// NAV A events
// need it un-inject ALL
// inject markup into visible slide

async function loadMarkupModalPrefs() {
    // // https://puruvj.dev/blog/fs-promises
    try {
        const data = await readFile(
            `${__dirname}/markupModalPrefs.html`,
            'binary'
        );
        return data;
    } catch (e) {
        console.error(e);
    }
}
async function loadMarkupModalLogin() {
    // // https://puruvj.dev/blog/fs-promises
    try {
        const data = await readFile(
            `${__dirname}/markupModalLogin.html`,
            'binary'
        );
        return data;
    } catch (e) {
        console.error(e);
    }
}
async function loadMarkupDownloadItemAudio() {
    // // https://puruvj.dev/blog/fs-promises
    try {
        const data = await readFile(
            `${__dirname}/markupDownloadItemAudio.html`,
            'binary'
        );
        return data;
    } catch (e) {
        console.error(e);
    }
}
async function loadMarkupDownloadItemVideo() {
    // // https://puruvj.dev/blog/fs-promises
    try {
        const data = await readFile(
            `${__dirname}/markupDownloadItemVideo.html`,
            'binary'
        );
        return data;
    } catch (e) {
        console.error(e);
    }
}

async function settingsSave() {
    console.log('saving settings...');
    // try {
    //     const data = await settings.get('settings');
    //     return data;
    // } catch (e) {
    //     console.error(e);
    // }
}
async function settingsLoad() {
    try {
        const data = await settings.get('settings');
        return data;
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    loadMarkupModalPrefs: loadMarkupModalPrefs,
    loadMarkupModalLogin: loadMarkupModalLogin,
    settingsSave: settingsSave,
    settingsLoad: settingsLoad,
    loadMarkupDownloadItemAudio: loadMarkupDownloadItemAudio,
    loadMarkupDownloadItemVideo: loadMarkupDownloadItemVideo,
};