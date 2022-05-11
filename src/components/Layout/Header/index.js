import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("header__container")}>
        <div className={cx("header__logo")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
            className={cx("header__logoImg")}
          />
        </div>
        <div className={cx("header__search")}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <div className={cx("header__searchBtns")}>
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faCircleXmark} className={cx("")} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="header__actions"></div>
      </div>
    </header>
  );
}

export default Header;
