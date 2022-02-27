import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import GlobalSvgSelector from "../../assets/GlobalSvgSelector";

import styles from "./UserSign.module.scss";

const UserSign = () => {
  const dispatch = useDispatch();
  const [signIn, signUp] = useSelector((state) => [
    state.sign.signIn,
    state.sign.signUp,
  ]);
  const [fieldsValues, setFieldsValues] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setFieldsValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
    setFieldsValues({
      fullName: "",
      email: "",
      password: "",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        signUp
          ? "http://localhost:5656/auth/register"
          : "http://localhost:5656/auth/login",
        signUp
          ? fieldsValues
          : { email: fieldsValues.email, password: fieldsValues.password }
      );
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "ENTER_USER", payload: data });
      onCloseModal();
    } catch (e) {
      alert("Ошибка!");
      console.error(e);
    }
  };

  if (!(signUp || signIn)) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.window}>
        <div className={styles.top}>
          <h1>{signUp ? "Регистрация" : "Вход в аккаунт"}</h1>
          <div onClick={onCloseModal}>
            <GlobalSvgSelector id="closeModal" />
          </div>
        </div>
        <form>
          {signUp && (
            <div className={styles.field}>
              <label>Имя и фамилия</label>
              <input
                value={fieldsValues.fullName}
                onChange={onChangeField}
                name="fullName"
                type="text"
              />
            </div>
          )}
          <div className={styles.field}>
            <label>Email</label>
            <input
              value={fieldsValues.email}
              onChange={onChangeField}
              name="email"
              type="text"
            />
          </div>
          <div className={styles.field}>
            <label>Пароль</label>
            <input
              value={fieldsValues.password}
              onChange={onChangeField}
              name="password"
              type="password"
            />
          </div>
          <button onClick={onSubmit}>
            {signUp ? "Зарегистрироваться" : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSign;
