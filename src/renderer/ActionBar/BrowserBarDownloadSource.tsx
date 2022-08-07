import { Fragment, useState, useContext } from 'react';
import ThemeContext from '../../storage/themeContext';
import ActionBarContext from '../../storage/actionBarContext';
import SourcesContext from '../../storage/sourcesContext';

import './BrowserBarDownloadSource.scss';
import browserBarDownloadSourceIcon1 from '../../../assets/ActionBar/youtube.svg';
import browserBarDownloadSourceIcon2 from '../../../assets/ActionBar/caret-down.svg';
import downloadSourceIcon__available from '../../../assets/BrowserBar/check.svg';
import downloadSourceIcon__unavailable from '../../../assets/BrowserBar/remove.svg';
import downloadSourceIconFacebook from '../../../assets/BrowserBar/facebook.svg';
import downloadSourceIconPinterest from '../../../assets/BrowserBar/pinterest.svg';
import downloadSourceIconSoundcloud from '../../../assets/BrowserBar/soundcloud.svg';
import downloadSourceIconSnapchat from '../../../assets/BrowserBar/snapchat.svg';
import downloadSourceIconTiktok from '../../../assets/BrowserBar/tiktok.svg';
import downloadSourceIconTwitch from '../../../assets/BrowserBar/twitch.svg';
import downloadSourceIconTwitter from '../../../assets/BrowserBar/twitter.svg';
import downloadSourceIconVimeo from '../../../assets/BrowserBar/vimeo.svg';
import downloadSourceIconYoutube from '../../../assets/BrowserBar/youtube.svg';

const BrowserBarDownloadSource = () => {
  const themeCtx = useContext(ThemeContext);
  const sourcesCtx = useContext(SourcesContext);
  // console.log(sourcesCtx);
  let sourcesCount = sourcesCtx.enabledSources.length;
  let activeSource = sourcesCtx.activeSource;
  console.log(activeSource[0].name);

  // console.log(sourcesCount);

  const [sourceFacebookActive, setSourceFacebookActive] = useState(false);
  const [sourcePinterestActive, setSourcePinterestActive] = useState(false);
  const [sourceSoundcloudActive, setSourceSoundcloudActive] = useState(false);
  const [sourceTiktokActive, setSourceTiktokActive] = useState(false);
  const [sourceTwitterActive, setSourceTwitterActive] = useState(false);
  const [sourceVimeoActive, setSourceVimeoActive] = useState(false);
  const [sourceYoutubeActive, setSourceYoutubeActive] = useState(false);
  const [isSourcesExpanded, setIsSourcesExpanded] = useState(false);
  const sourceSelectedHandler = (event) => {
    console.log(event.target);

    // window.electron.ipcRenderer.sendMessage('source: change', 'tiktok');
    toggleSourceExpanded();
  };
  const toggleSourceExpanded = () => {
    if (isSourcesExpanded) {
      setIsSourcesExpanded(false);
    } else if (!isSourcesExpanded) {
      setIsSourcesExpanded(true);
    }
  };
  const mouseEnterHandler = () => {
    window.electron.ipcRenderer.sendMessage('hideBrowserWindow');
    setIsSourcesExpanded(true);
  };
  const mouseLeaveHandler = () => {
    setIsSourcesExpanded(false);
    window.electron.ipcRenderer.sendMessage('showBrowserWindow');
  };
  return (
    <Fragment>
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        // onClick={toggleSourceExpanded}
        className={
          !isSourcesExpanded
            ? 'browserBarDownloadSource'
            : 'browserBarDownloadSource__hovering'
        }
      >
        <ul
          className={
            !isSourcesExpanded
              ? 'browserBarDownloadSource__list'
              : 'browserBarDownloadSource__hovering__list'
          }
        >
          {/* this is the active source when list isnt being interacted with */}
          {!isSourcesExpanded && (
            <li
              // onClick={selectedFacebookHandler}
              className={'browserBarDownloadSource__list__item__active'}
              id="downloadSource__facebook"
            >
              <div className="browserBarDownloadSource__list__item__container1">
                {sourceFacebookActive && (
                  <img
                    src={downloadSourceIconFacebook}
                    className="browserBarDownloadSource__list__item__icon"
                  />
                )}{' '}
                {sourcePinterestActive && (
                  <img
                    src={downloadSourceIconPinterest}
                    className="browserBarDownloadSource__list__item__icon"
                  />
                )}
                {sourceSoundcloudActive && (
                  <img
                    src={downloadSourceIconSoundcloud}
                    className="browserBarDownloadSource__list__item__icon"
                  />
                )}{' '}
                {sourceTiktokActive && (
                  <img
                    src={downloadSourceIconTiktok}
                    className="browserBarDownloadSource__list__item__icon"
                  />
                )}{' '}
                {sourceTwitterActive && (
                  <img
                    src={downloadSourceIconTwitter}
                    className="browserBarDownloadSource__list__item__icon"
                  />
                )}{' '}
                {sourceYoutubeActive && (
                  <img
                    src={downloadSourceIconYoutube}
                    className="browserBarDownloadSource__list__item__icon"
                  />
                )}
                {sourceFacebookActive && (
                  <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                    Facebook
                  </div>
                )}{' '}
                {sourcePinterestActive && (
                  <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                    Pinterest
                  </div>
                )}{' '}
                {sourceSoundcloudActive && (
                  <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                    Soundcloud
                  </div>
                )}{' '}
                {sourceTiktokActive && (
                  <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                    Tiktok
                  </div>
                )}{' '}
                {sourceTwitterActive && (
                  <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                    Twitter
                  </div>
                )}{' '}
                {sourceYoutubeActive && (
                  <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                    Youtube
                  </div>
                )}
              </div>
              <div className="browserBarDownloadSource__list__item__container2">
                <img
                  src={downloadSourceIcon__available}
                  className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__1"
                />
              </div>
            </li>
          )}
          <li
            onClick={sourceSelectedHandler}
            className={
              sourceFacebookActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
            id="downloadSource__facebook"
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconFacebook}
                className="browserBarDownloadSource__list__item__icon"
              />
              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Facebook
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                src={downloadSourceIcon__available}
                alt=""
                loading="lazy"
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__1"
              />
            </div>
          </li>
          <li
            onClick={sourceSelectedHandler}
            className={
              sourcePinterestActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
            id="downloadSource__pinterest"
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconPinterest}
                className="browserBarDownloadSource__list__item__icon"
              />
              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Pinterest
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                src={downloadSourceIcon__available}
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__1"
              />
            </div>
          </li>
          <li
            onClick={sourceSelectedHandler}
            id="downloadSource__soundcloud"
            className={
              sourceSoundcloudActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconSnapchat}
                alt=""
                loading="lazy"
                className="browserBarDownloadSource__list__item__icon"
              />

              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Snapchat
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                id="browserBarDownloadSource__list__item__icon__status__2"
                src={downloadSourceIcon__available}
                alt=""
                loading="lazy"
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__2"
              />
            </div>
          </li>
          <li
            onClick={sourceSelectedHandler}
            id="downloadSource__soundcloud"
            className={
              sourceSoundcloudActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconSoundcloud}
                alt=""
                loading="lazy"
                className="browserBarDownloadSource__list__item__icon"
              />

              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Soundcloud
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                id="browserBarDownloadSource__list__item__icon__status__2"
                src={downloadSourceIcon__available}
                alt=""
                loading="lazy"
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__2"
              />
            </div>
          </li>
          <li
            onClick={sourceSelectedHandler}
            id="downloadSource__tiktok"
            className="browserBarDownloadSource__list__item "
            className={
              sourceTiktokActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconTiktok}
                className="browserBarDownloadSource__list__item__icon"
              />

              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Tiktok
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                src={downloadSourceIcon__available}
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__3"
              />
            </div>
          </li>{' '}
          <li
            onClick={sourceSelectedHandler}
            id="downloadSource__tiktok"
            className="browserBarDownloadSource__list__item "
            className={
              sourceTiktokActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconTwitch}
                className="browserBarDownloadSource__list__item__icon"
              />

              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Twitch
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                src={downloadSourceIcon__available}
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__3"
              />
            </div>
          </li>
          <li
            onClick={sourceSelectedHandler}
            id="downloadSource__twitter"
            className={
              sourceTwitterActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconTwitter}
                className="browserBarDownloadSource__list__item__icon "
              />

              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Twitter
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                src={downloadSourceIcon__available}
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__4"
              />
            </div>
          </li>
          <li
            id="downloadSource__youtube"
            onClick={sourceSelectedHandler}
            className={
              sourceYoutubeActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconVimeo}
                className="browserBarDownloadSource__list__item__icon"
              />

              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Vimeo
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                src={downloadSourceIcon__available}
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__5"
              />
            </div>
          </li>
          <li
            id="downloadSource__youtube"
            onClick={sourceSelectedHandler}
            className={
              sourceYoutubeActive
                ? 'browserBarDownloadSource__list__item__active'
                : 'browserBarDownloadSource__list__item'
            }
          >
            <div className="browserBarDownloadSource__list__item__container1">
              <img
                src={downloadSourceIconYoutube}
                className="browserBarDownloadSource__list__item__icon"
              />

              <div className="browserBarDownloadSource__list__item__text browserBarDownloadSource__list__item__title">
                Youtube
              </div>
            </div>
            <div className="browserBarDownloadSource__list__item__container2">
              <img
                src={downloadSourceIcon__available}
                className="browserBarDownloadSource__list__item__icon browserBarDownloadSource__list__item__icon__status browserBarDownloadSource__list__item__icon__status__5"
              />
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default BrowserBarDownloadSource;
