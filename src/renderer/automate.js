const logging = false;
const startupReq = require('../js/system/startup');
const startup = new startupReq();
let elements = require('./views/elements');

exports.click_nav_A = (tab) => {
    if (startup.dev.autoClickNavA_active) {
        if (tab === 'audio') elements.nav_A_audio.click(); // clicks audio tab
        if (tab === 'video') elements.nav_A_video.click(); // clicks audio tab
        if (tab === 'warpstagram') elements.nav_A_warpstagram.click(); // clicks audio tab
    }
};
exports.click_nav_B = (nav_A_active, button) => {
    if (nav_A_active === 'audio') {
        if (startup.dev.autoClickPaste) {
            if (button === 'paste') {
                elements.nav_B_button_audio_paste.click();
            }
            if (button === 'activate') {
                elements.nav_B_button_audio_activate.click();
            }
            if (button === 'preferences') {
                elements.nav_B_button_audio_preferences.click();
            }
            if (button === 'help') {
                elements.nav_B_button_audio_help.click();
            }
        }
    }
    if (nav_A_active === 'video') {
        if (startup.dev.autoClickPaste) {
            if (button === 'paste') {
                elements.nav_B_button_video_paste.click();
            }
            if (button === 'smartMode') {
                elements.nav_B_button_video_smartMode.click();
            }
            if (button === 'activate') {
                elements.nav_B_button_video_activate.click();
            }
            if (button === 'subscriptions') {
                elements.nav_B_button_video_subscriptions.click();
            }
            if (button === 'preferences') {
                elements.nav_B_button_video_preferences.click();
            }
            if (button === 'help') {
                elements.nav_B_button_video_help.click();
            }
        }
    }
};