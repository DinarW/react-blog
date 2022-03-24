import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "../../formatters/formatCreatedAt";

import styles from "./Menu.module.scss";
import GlobalSvgSelector from "../../assets/GlobalSvgSelector";

const Menu = () => {
  const [opened, setOpened] = React.useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => {
    const autoriz = state.user.userAutoriz;
    if (autoriz) {
      const { createdAt, fullName } = state.user.userInfo;
      return { autoriz, createdAt, fullName };
    }

    return { autoriz };
  });

  const onSignIn = () => {
    dispatch({ type: "SIGN_IN" });
  };

  const onSignUp = () => {
    dispatch({ type: "SIGN_UP" });
  };

  const onLogout = () => {
    if (window.confirm("Выйти из аккаунта?")) {
      dispatch({ type: "LOGOUT_USER" });
      localStorage.removeItem("user");
    }
  };

  return (
    <div className={`${styles.menu} ${opened ? styles.opened : ""}`}>
      <div style={{ display: opened ? "block" : "none " }}>
        {userInfo.autoriz ? (
          <>
            <div className={styles.userInfo}>
              <h3>{userInfo.fullName}</h3>
              <p>
                Дата регистрации:{" "}
                {formatCreatedAt(userInfo.createdAt).toLocaleLowerCase()}
              </p>
            </div>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/profile">Мой профиль</Link>
              </li>
              <li>
                <Link to="/createpost">Создать запись</Link>
              </li>
              <li onClick={onLogout}>
                <Link to="/">Выйти</Link>
              </li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li onClick={onSignIn}>
              <Link to="/">Войти</Link>
            </li>
            <li onClick={onSignUp}>
              <Link to="/">Зарегистрироваться</Link>
            </li>
          </ul>
        )}
      </div>
      <div
        onClick={() => setOpened(!opened)}
        className={`${styles.toggle} ${opened ? styles.toggle_opened : ""}`}
      >
        <p className={styles.toggle_text}>МЕНЮ</p>
        <GlobalSvgSelector
          styles={styles.toggle_icon}
          id={opened ? "closeMenu" : "openMenu"}
        />
      </div>
    </div>
  );
};

export default Menu;
