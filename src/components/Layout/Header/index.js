import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("header__container")}>
        <div className={cx("header__logo")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/800px-TikTok_logo.svg.png"
            className={cx("header__logoImg")}
          />
        </div>
        <div className="header__search"></div>
        <div className="header__icons"></div>
      </div>
    </header>
  );
}

export default Header;
