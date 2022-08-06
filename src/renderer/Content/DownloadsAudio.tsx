import { Fragment, useState, useContext } from 'react';
import thumbnail from '../../../assets/Content/dummy_thumbnail.png';
import iconLength from '../../../assets/Downloads/duration.svg';
import iconFileSize from '../../../assets/Downloads/fileSize.svg';
import iconFileResolution from '../../../assets/Downloads/resolution.svg';
import IconFileTypeVideo from '../../../assets/Downloads/fileTypeVideo.svg';
import ThemeContext from '../../storage/themeContext';
import ActionBarContext from '../../storage/actionBarContext';

import './Downloads.scss';

const DownloadsAudio = () => {
  const themeCtx = useContext(ThemeContext);
  const actionBarCtx = useContext(ActionBarContext);
  const [searchInput, setSearchInput] = useState('');

  window.electron.ipcRenderer.on('Search: InputChange', (arg) => {
    setSearchInput(arg[0]);
  });
  const mouseEnterHandler = () => {
    // console.log('mouse enter');
    window.electron.ipcRenderer.sendMessage('browserNotHovered');
  };
  //  const audioItems = (
  //    <ul className={classes['cart-items']}>
  //      {cartCtx.items.map((item) => (
  //        <CartItem
  //          key={item.id}
  //          name={item.name}
  //          amount={item.amount}
  //          price={item.price}
  //          onRemove={cartItemRemoveHandler.bind(null, item.id)}
  //          onAdd={cartItemAddHandler.bind(null, item)}
  //        />
  //      ))}
  //    </ul>
  //  );
  return (
    <Fragment>
      {/* {audioItems} */}
      <div
        // className="contentPanel"
        className={
          actionBarCtx.isAudioPanelCollapsed
            ? 'contentPanel__collapsed'
            : 'contentPanel'
        }
        style={
          themeCtx.isDarkTheme
            ? { backgroundColor: themeCtx.content.dark.backgroundColor }
            : {
                backgroundColor: themeCtx.content.light.backgroundColor,
              }
        }
      >
        <ul className="content__panel__downloads__list">
          <li
            className="content__panel__downloads__list__item content__panel__downloads__list__item__audio"
            style={
              themeCtx.isDarkTheme
                ? { backgroundColor: themeCtx.nav.dark.backgroundColor }
                : {
                    backgroundColor: themeCtx.nav.light.backgroundColor,
                  }
            }
          >
            <img
              src={thumbnail}
              className="content__panel__downloads__list__item__thumbnail"
            />
            <div className="content__panel__downloads__list__item__info">
              <div className="content__panel__downloads__list__item__info__container">
                <div
                  className="content__panel__downloads__list__item__text content__panel__downloads__list__item__title"
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(0%)' }
                      : {
                          filter: 'invert(100%)',
                        }
                  }
                >
                  Magic of Hong Kong cyberpunk drone video
                </div>
              </div>
              <div className="content__panel__downloads__list__item__info__container">
                <img
                  src={iconLength}
                  className=" content__panel__downloads__list__item__img content__panel__downloads__list__item__file_length"
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(0%)' }
                      : {
                          filter: 'invert(100%)',
                        }
                  }
                ></img>
                <div
                  className=" content__panel__downloads__list__item__text content__panel__downloads__list__item__file_length"
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(0%)' }
                      : {
                          filter: 'invert(100%)',
                        }
                  }
                >
                  7:36
                </div>
                <img
                  src={iconFileSize}
                  className=" content__panel__downloads__list__item__img content__panel__downloads__list__item__file_length"
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(0%)' }
                      : {
                          filter: 'invert(100%)',
                        }
                  }
                ></img>
                <div
                  className=" content__panel__downloads__list__item__text content__panel__downloads__list__item__file_size"
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(0%)' }
                      : {
                          filter: 'invert(100%)',
                        }
                  }
                >
                  8.6MB
                </div>
                <img
                  src={IconFileTypeVideo}
                  className=" content__panel__downloads__list__item__img content__panel__downloads__list__item__file_length"
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(0%)' }
                      : {
                          filter: 'invert(100%)',
                        }
                  }
                ></img>
                <div
                  className=" content__panel__downloads__list__item__text content__panel__downloads__list__item__file_type"
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(0%)' }
                      : {
                          filter: 'invert(100%)',
                        }
                  }
                >
                  MP3
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default DownloadsAudio;
