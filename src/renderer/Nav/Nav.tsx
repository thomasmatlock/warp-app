/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useContext } from 'react';
import Logo from '../components/Logo/Logo';

import ThemeContext from '../../store/themeContext';
// import NavContext from '../../store/navContext';
import './Nav.scss';
import NavButtons from './NavButtons';
import NavStatus from './NavStatus';

let appVersion = '1.0.0';
let appRoot = '1.0.0';
let updateMessage = '';
// console.log('appVersion', appVersion);

const Nav = (props) => {
  const themeCtx = useContext(ThemeContext);

  const [isWindows, setIsWindows] = useState(false);
  const [isApple, setIsApple] = useState(false);
  const [isLinux, setIsLinux] = useState(false);
  const [checkingForUpdate, setCheckingForUpdate] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateUnavailable, setUpdateUnavailable] = useState(true);
  const [updateDownloading, setUpdateDownloading] = useState(false);
  const [updateDownloaded, setUpdateDownloaded] = useState(false);
  const [featureCompleteStatus, setFeatureCompleteStatus] = useState('');
  window.electron.ipcRenderer.on('platform', (arg) => {
    window.electron.ipcRenderer.sendMessage('package', []);
    if (arg === 'windows') setIsWindows(true);
    if (arg === 'darwin') setIsApple(true);
    if (arg === 'linux') setIsLinux(true);
  });

  // window.electron.ipcRenderer.on('appVersion', (arg: string) => {
  //   appVersion = arg;
  // });
  window.electron.ipcRenderer.on('appRoot', (arg: string) => {
    appRoot = arg;
  });
  window.electron.ipcRenderer.on('status', (arg) => {
    // console.log(typeof arg);
    // const { complete, inProgress, pending } = arg;
    // console.log(complete[0]);
    // setFeatureCompleteStatus(complete[0]);
    // console.log(featureCompleteStatus);
    // console.log(featureCompleteStatus);
    // setStatus(arg);
  });
  const disableUpdateStates = () => {
    setCheckingForUpdate(false);
    setUpdateAvailable(false);
    setUpdateUnavailable(false);
    setUpdateDownloading(false);
    setUpdateDownloaded(false);
  };
  window.electron.ipcRenderer.on('checking-for-update', (arg: string) => {
    disableUpdateStates();
    setCheckingForUpdate(true);
    updateMessage = arg;
  });
  window.electron.ipcRenderer.on('update-available', (arg: string) => {
    disableUpdateStates();
    setUpdateAvailable(true);
    updateMessage = arg;
  });
  window.electron.ipcRenderer.on('update-not-available', (arg: string) => {
    disableUpdateStates();
    setUpdateUnavailable(true);
    updateMessage = arg;
  });
  window.electron.ipcRenderer.on('download-progress', (arg: string) => {
    disableUpdateStates();
    setUpdateDownloading(true);
    updateMessage = arg;
  });
  window.electron.ipcRenderer.on('update-downloaded', (arg: string) => {
    disableUpdateStates();
    setUpdateDownloaded(true);
    updateMessage = arg;
  });

  const restartHandler = () => {
    window.electron.ipcRenderer.sendMessage('restart_and_update', []);
  };
  return (
    <>
      <div
        className="navMain"
        style={
          themeCtx.isDarkTheme
            ? { backgroundColor: themeCtx.nav.dark.backgroundColor }
            : {
                backgroundColor: themeCtx.nav.light.backgroundColor,
              }
        }
      >
        <div className="logoContainer">
          <Logo />
        </div>
        <NavButtons />
        <div className="logoContainer">
          <NavStatus />

          {/* <a className="navLogo"></a> */}
        </div>
      </div>
    </>
  );
};
export default Nav;
