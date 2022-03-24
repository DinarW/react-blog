import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import GlobalSvgSelector from "../../assets/GlobalSvgSelector";

const Header = () => {
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const timerRef = React.useRef();
  const userAutorize = useSelector((state) => state.user.userAutoriz);
  const dispatch = useDispatch();

  const onChangeSearchInput = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    clearTimeout(timerRef.current);
    if (value) {
      timerRef.current = setTimeout(() => {
        dispatch({ type: "SET_FILTER", payload: value });
      }, 100);
    } else {
      clearTimeout(timerRef.current);
      dispatch({ type: "SET_FILTER", payload: "" });
    }
  };

  const onClickSearch = () => {
    setSearchValue("");
    setIsSearching(true);
  };

  const onClickProfile = () => {
    dispatch({ type: "SIGN_IN" });
  };

  const onClickLogout = () => {
    if (window.confirm("Выйти из аккаунта?")) {
      dispatch({ type: "LOGOUT_USER" });
      localStorage.removeItem("user");
    }
  };

  return isSearching ? (
    <div className={styles.searchField}>
      <input
        autoFocus
        onChange={onChangeSearchInput}
        value={searchValue}
        placeholder="Поиск статьи по заголовку или тексту..."
        type="text"
      />
      <div style={{ display: "inline" }} onClick={() => setIsSearching(false)}>
        <GlobalSvgSelector id="closeInput" />
      </div>
    </div>
  ) : (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        VASYA BLOG
      </Link>
      <ul className={styles.links}>
        <li onClick={onClickSearch} className={styles.link}>
          <GlobalSvgSelector id="search" />
        </li>
        {userAutorize ? (
          <>
            <li className={styles.link}>
              <Link to="/createpost">
                <GlobalSvgSelector id="write" />
              </Link>
            </li>
            <li onClick={onClickLogout} className={styles.link}>
              <Link to="/">
                <GlobalSvgSelector id="logout" />
              </Link>
            </li>
          </>
        ) : (
          <li onClick={onClickProfile} className={styles.link}>
            <GlobalSvgSelector id="profile" />
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
