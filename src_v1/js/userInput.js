/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable one-var */

// Paste
// parse
// download
// update state
// update local user file
// update UI
const { ipcRenderer } = require('electron');
const defaultsReq = require('./defaults');
const defaults = new defaultsReq();
const pattArr = [
    /facebook/i,
    /instagram/i,
    /soundcloud/i,
    /streamable/i,
    /twitch/i,
    /twitter/i,
    /vimeo/i,
    /youtube/i,
    /tiktok/i,
];

let pattMatchIndex, platform;
const validateURL = (url, avType) => {
    if (defaults.dev.useRandomYoutubeURL)
        url = randomFromArray(defaults.dev.URLSyoutube); // substitutes a random placeholder URL if dev mode active
    if (defaults.dev.useRandomMiscURL) {
        url = randomFromArray(defaults.dev.URLSmisc); // substitutes a random placeholder URL if dev mode active
    }
    checkURLforPattern(url, avType);
    if (platform === 'youtube') {
        mediaController(url, avType, platform);
    }
};

const randomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
const checkURLforPattern = (url, avType) => {
    // check url against each pattern
    pattMatchIndex = pattArr.forEach(function(item, index) {
        if (url.match(item)) {
            pattMatchIndex = index; // saves the index at which the match was found in the pattern array
            let type = `${pattArr[pattMatchIndex]}`; // saves type of source, ie /youtube/i
            platform = type.substring(1, type.length - 2); // removes beginning/end characters: changes "/youtube/i to simply 'youtube'
        }
    });
};
const mediaController = (url, avType, platform) => {
    defaults.env.nav_A_active = avType;
    ipcRenderer.send('new-item', url, avType, platform);
};

module.exports = {
    validateURL: validateURL,
    randomFromArray: randomFromArray,
    checkURLforPattern: checkURLforPattern,
    mediaController: mediaController,
}