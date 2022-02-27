import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { instance } from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./CreatePost.module.scss";
import GlobalSvgSelector from "../../assets/GlobalSvgSelector";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.posts.list);
  const image = React.useRef();

  const [postValues, setPostValues] = React.useState({
    title: "",
    text: "",
  });

  const uploadImage = () => {
    const file = image.current.files[0];
    const data = new FormData();
    data.append("file", file);
    axios.post("http://localhost:5656/posts/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const onCreatingPost = (event) => {
    if (event?.target) {
      const { name, value } = event.target;
      setPostValues((prev) => ({ ...prev, [name]: value }));
      return;
    }
    setPostValues((prev) => ({ ...prev, text: event }));
  };

  const onPublish = async () => {
    try {
      const response = await instance.post(`/posts`, postValues);
      // чтобы на одной странице не появлялось больше 5 постов, делаю проверку
      dispatch({
        type: "SET_POSTS",
        payload:
          list.length === 5
            ? [response.data, ...list.slice(0, 4)]
            : [response.data, ...list],
      });
      // сразу перехожу на страницу только созданного поста
      dispatch({ type: "SET_CURRENT_POST", payload: response.data });
      setPostValues({
        title: "",
        imageUrl: "",
        text: "",
      });
      navigate(`/post/${response.data._id}`);
    } catch (e) {
      alert("Ошибка при публикации!");
      console.error(e);
    }
  };

  return (
    <div className={styles.block}>
      <textarea
        value={postValues.title}
        onChange={onCreatingPost}
        placeholder="Введите заголовок..."
        className={styles.title}
        autoFocus
        name="title"
        type="text"
      />

      <div className={styles.imageUrl}>
        <label>Ссылка на изображение:</label>
        <br />
        <input ref={image} name="imageUrl" type="file" />
        <button onClick={uploadImage}>
          <GlobalSvgSelector id="upload" styles={styles.uploadIcon} />
          Загрузить
        </button>
      </div>

      <MDEditor
        height={440}
        value={postValues.text}
        onChange={onCreatingPost}
      />
      <button onClick={onPublish} className={styles.publish}>
        Опубликовать
      </button>
    </div>
  );
};

export default CreatePost;
