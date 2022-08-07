import { Fragment, useState, useContext } from 'react';
import sortIcon from '../../../assets/Content/Warpstagram/sort.svg';
import ThemeContext from '../../storage/themeContext';
import ActionBarContext from '../../storage/actionBarContext';

import './ActionBarMenu.scss';
const FilterBar = (props) => {
  const themeCtx = useContext(ThemeContext);
  const actionBarCtx = useContext(ActionBarContext);
  // console.log(actionBarCtx);

  const [filterTypeAll, setFilterTypeAll] = useState(true);
  const [filterTypeUsers, setFilterTypeUsers] = useState(false);
  const [filterTypeHashtags, setFilterTypeHashtags] = useState(false);
  const [filterTypeLocations, setFilterTypeLocations] = useState(false);

  const filterTypeAllHandler = () => {
    window.electron.ipcRenderer.sendMessage(
      'FilterBar: Warpstagram: FilterTypeAll',
      [`FilterBar: Warpstagram: FilterTypeAll`]
    );
    setFilterTypeAll(true);
    setFilterTypeUsers(false);
    setFilterTypeHashtags(false);
    setFilterTypeLocations(false);
  };
  const filterTypeUsersHandler = () => {
    window.electron.ipcRenderer.sendMessage(
      'FilterBar: Warpstagram: FilterTypeUsers',
      [`FilterBar: Warpstagram: FilterTypeUsers`]
    );
    setFilterTypeAll(false);
    setFilterTypeUsers(true);
    setFilterTypeHashtags(false);
    setFilterTypeLocations(false);
  };
  const filterTypeHashtagsHandler = () => {
    window.electron.ipcRenderer.sendMessage(
      'FilterBar: Warpstagram: FilterTypeHashtags',
      [`FilterBar: Warpstagram: FilterTypeHashtags`]
    );
    setFilterTypeAll(false);
    setFilterTypeUsers(false);
    setFilterTypeHashtags(true);
    setFilterTypeLocations(false);
  };
  const filterTypeLocationsHandler = () => {
    window.electron.ipcRenderer.sendMessage(
      'FilterBar: Warpstagram: FilterTypeLocations',
      [`FilterBar: Warpstagram: FilterTypeLocations`]
    );
    setFilterTypeAll(false);
    setFilterTypeUsers(false);
    setFilterTypeHashtags(false);
    setFilterTypeLocations(true);
  };
  let items;
  // document.querySelectorAll('.filter-content__panel__warpstagram__account');
  // console.log(items);
  setTimeout(() => {
    items = document.querySelectorAll('.filter-menuBar__menu__item');
    // console.log(items);
  }, 1000);

  return (
    <Fragment>
      <div className="menuBar">
        <div className="menuBar__menu menuBar__menu__left">
          <div
            className={
              filterTypeAll
                ? 'menuBar__menu__item__active'
                : 'menuBar__menu__item'
            }
            style={
              themeCtx.isDarkTheme
                ? { filter: 'invert(0%)' }
                : {
                    filter: 'invert(100%)',
                  }
            }
            onClick={filterTypeAllHandler}
          >
            All
          </div>
          <div
            className={
              filterTypeUsers
                ? 'menuBar__menu__item__active'
                : 'menuBar__menu__item'
            }
            style={
              themeCtx.isDarkTheme
                ? { filter: 'invert(0%)' }
                : {
                    filter: 'invert(100%)',
                  }
            }
            onClick={filterTypeUsersHandler}
          >
            Users
          </div>
          <div
            className={
              filterTypeHashtags
                ? 'menuBar__menu__item__active'
                : 'menuBar__menu__item'
            }
            style={
              themeCtx.isDarkTheme
                ? { filter: 'invert(0%)' }
                : {
                    filter: 'invert(100%)',
                  }
            }
            onClick={filterTypeHashtagsHandler}
          >
            Hashtags
          </div>
          <div
            className={
              filterTypeLocations
                ? 'menuBar__menu__item__active'
                : 'menuBar__menu__item'
            }
            style={
              themeCtx.isDarkTheme
                ? { filter: 'invert(0%)' }
                : {
                    filter: 'invert(100%)',
                  }
            }
            onClick={filterTypeLocationsHandler}
          >
            Locations
          </div>
        </div>
        <div className="menuBar__menu menuBar__menu__right">
          <div
            className="menuBar__menu__item menuBar__menu__item__accounts_total"
            style={
              themeCtx.isDarkTheme
                ? { filter: 'invert(0%)' }
                : {
                    filter: 'invert(100%)',
                  }
            }
          >
            {props.warpstagramDownloadsTotal} accounts
          </div>
          {/* <div className="menuBar__menu__item menuBar__menu__item__find">
            <img src={searchIcon} />
          </div> */}
          <div className="menuBar__menu__item menuBar__menu__item__icon">
            <img
              src={sortIcon}
              title="Sort"
              style={
                themeCtx.isDarkTheme
                  ? { filter: 'invert(0%)' }
                  : {
                      filter: 'invert(100%)',
                    }
              }
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FilterBar;
