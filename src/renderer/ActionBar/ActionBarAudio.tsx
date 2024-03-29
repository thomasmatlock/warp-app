import { Fragment, useState, useContext } from 'react';
import sortIcon from './assets/sort.svg';
import collapseIcon from './assets/collapse.svg';
import expandIcon from './assets/expand.svg';
import ThemeContext from '../../store/themeContext';
import ActionBarContext from '../../store/actionBarContext';

import ContextMenu from '../ContextMenu/ContextMenu';
import ContextMenuSortOptions from '../ContextMenu/ContextMenuOptionsSort';

import './ActionBarWarpstagram';

const FilterBar = (props) => {
  // console.log(props);

  const [isContextMenuVisible, setisContextMenuVisible] = useState(false);
  const toggleContextMenuSort = () => {
    if (isContextMenuVisible) {
      setisContextMenuVisible(false);
    } else {
      setisContextMenuVisible(true);
    }
  };
  const turnOffContextMenu = () => {
    setisContextMenuVisible(false);
  };
  const themeCtx = useContext(ThemeContext);
  const actionBarCtx = useContext(ActionBarContext);
  const downloadsTotalString =
    props.audioDownloadsTotal === 1
      ? `${props.audioDownloadsTotal} audio download`
      : `${props.audioDownloadsTotal} audio downloads`;
  // console.log(actionBarCtx);

  return (
    <Fragment>
      <div
        // className="filterBar"
        onMouseLeave={turnOffContextMenu}
        className={
          actionBarCtx.isDownloadsPanelCollapsed
            ? 'filterBar__collapsed'
            : 'filterBar'
        }
      >
        {/* <div className="filterBar__menu filterBar__menu__left">

        </div> */}
        <div className="filterBar__menu filterBar__menu__right">
          {!actionBarCtx.isDownloadsPanelCollapsed && (
            <div
              className="filterBar__menu__item filterBar__menu__item__accounts_total"
              style={
                themeCtx.isDarkTheme
                  ? { filter: 'invert(0%)' }
                  : {
                      filter: 'invert(100%)',
                    }
              }
            >
              {downloadsTotalString}
              {/* {props.audioDownloadsTotal} audio downloads */}
            </div>
          )}
          {!actionBarCtx.isDownloadsPanelCollapsed && (
            <div
              onClick={toggleContextMenuSort}
              className="filterBar__menu__item filterBar__menu__item__sort"
            >
              <img
                title="Sort"
                src={sortIcon}
                style={
                  themeCtx.isDarkTheme
                    ? { filter: 'invert(0%)' }
                    : {
                        filter: 'invert(100%)',
                      }
                }
              />
              {isContextMenuVisible && (
                <ContextMenu options={ContextMenuSortOptions} />
              )}
            </div>
          )}
          {!actionBarCtx.isBrowserPanelCollapsed &&
            !actionBarCtx.isDownloadsPanelCollapsed && (
              <div
                onClick={actionBarCtx.toggleBrowserPanelCollapsed}
                className="filterBar__menu__item filterBar__menu__item__sort"
              >
                <img
                  title="Expand downloads panel"
                  src={expandIcon}
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(100%)' }
                      : {
                          filter: 'invert(0%)',
                        }
                  }
                />
              </div>
            )}
          {actionBarCtx.isBrowserPanelCollapsed && (
            <div
              onClick={actionBarCtx.toggleBrowserPanelCollapsed}
              className="filterBar__menu__item filterBar__menu__item__sort"
            >
              <img
                title="Restore split view"
                src={collapseIcon}
                style={
                  themeCtx.isDarkTheme
                    ? { filter: 'invert(100%)' }
                    : {
                        filter: 'invert(0%)',
                      }
                }
              />
            </div>
          )}
          {actionBarCtx.isDownloadsPanelCollapsed && (
            <div
              onClick={actionBarCtx.toggleDownloadsPanelCollapsed}
              className="filterBar__menu__item filterBar__menu__item__sort"
            >
              <img
                title="Restore split view"
                src={expandIcon}
                style={
                  themeCtx.isDarkTheme
                    ? { filter: 'invert(100%)' }
                    : {
                        filter: 'invert(0%)',
                      }
                }
              />
            </div>
          )}{' '}
          {!actionBarCtx.isDownloadsPanelCollapsed &&
            !actionBarCtx.isBrowserPanelCollapsed && (
              <div
                onClick={actionBarCtx.toggleDownloadsPanelCollapsed}
                className="filterBar__menu__item filterBar__menu__item__sort"
              >
                <img
                  title="Collapse downloads panel"
                  src={collapseIcon}
                  style={
                    themeCtx.isDarkTheme
                      ? { filter: 'invert(100%)' }
                      : {
                          filter: 'invert(0%)',
                        }
                  }
                />
              </div>
            )}
        </div>
      </div>
    </Fragment>
  );
};
export default FilterBar;
