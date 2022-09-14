import { Fragment, useContext } from 'react';
import './Browser.scss';
// import screenshotPlaceholder from '../../../assets/screenshot.png';
import ThemeContext from '../../storage/themeContext';
import ActionBarContext from '../../storage/actionBarContext';

const Browser = () => {
  const themeCtx = useContext(ThemeContext);
  const actionBarCtx = useContext(ActionBarContext);
  let screenshot: any;
  let browserWindowDimensions = { x: 0, y: 0, width: 0, height: 0 };
  window.electron.ipcRenderer.on('request-browserDimensions', (arg) => {
    browserWindowDimensions = document
      .getElementById('contentPanel__browser__screenshot')
      .getBoundingClientRect();
    window.electron.ipcRenderer.sendMessage('browserWindowDimensions', {
      x: browserWindowDimensions.x,
      y: browserWindowDimensions.y,
      width: browserWindowDimensions.width,
      height: browserWindowDimensions.height,
    });
  });

  // window.electron.ipcRenderer.on('SET_SOURCE', (arg) => {
  //   // document.getElementById('contentPanel__browser__screenshot').src = arg;
  // });
  window.electron.ipcRenderer.on('capturePage', (arg) => {
    // console.log(arg[0]);
    document.getElementById('contentPanel__browser__screenshot').src = arg[0];
  });

  return (
    <Fragment>
      <div
        id="contentPanel__browser"
        className="contentPanel__browser"
        className={
          actionBarCtx.isBrowserPanelCollapsed
            ? 'contentPanel__browser__collapsed'
            : 'contentPanel__browser'
        }
        style={
          themeCtx.isDarkTheme
            ? { backgroundColor: themeCtx.content.dark.backgroundColor }
            : {
                backgroundColor: themeCtx.content.light.backgroundColor,
              }
        }
      >
        <img
          style={
            themeCtx.isDarkTheme
              ? { backgroundColor: themeCtx.content.dark.backgroundColor }
              : { backgroundColor: themeCtx.content.light.backgroundColor }
          }
          id="contentPanel__browser__screenshot"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"
        />
      </div>
    </Fragment>
  );
};
export default Browser;