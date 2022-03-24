import React from "react";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import { instance } from "../../../config/axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Comment from "../../Comment";

import styles from "./Article.module.scss";
import GlobalSvgSelector from "../../../assets/GlobalSvgSelector";
import postBackground from "../../../assets/images/postBackground.png";
import { formatCreatedAt } from "../../../formatters/formatCreatedAt";

const Article = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [commentText, setCommentText] = React.useState("");
  const [commentsList, setCommentsList] = React.useState({
    total: 0,
    comments: [],
  });
  const [currentPost, userEnter, userInfo] = useSelector((state) => [
    state.posts.currentPost,
    state.user.userAutoriz,
    state.user?.userInfo,
  ]);
  // при переключении на статью, получаем её комментарии, добавляем в стейт
  React.useEffect(() => {
    let isIgnoreResponse = false;
    console.log(currentPost);
    async function fetchComments() {
      try {
        const { data } = await axios.get(
          `http://localhost:5656/comments/post/${currentPost._id}`
        );

        // чтобы при переключении между статьями сбрасывался текст в поле ввода коммента
        setCommentText("");

        if (!isIgnoreResponse) {
          setCommentsList((prev) => ({
            ...prev,
            total: data.length,
            comments: data,
          }));
        }
      } catch (e) {
        if (currentPost._id) {
          alert("Ошибка при получении комментариев :/");
          console.error(e);
        }
      }
    }

    if (currentPost._id) {
      fetchComments();
    }

    return () => {
      isIgnoreResponse = true;
    };
  }, [currentPost]);

  const onRemovePost = (id) => {
    instance.delete(`/posts/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
    navigate('/');
  }

  const onRemoveComment = (id) => {
    instance.delete(`/comments/${id}`);
    setCommentsList((prev) => ({
      total: prev.total - 1,
      comments: prev.comments.filter((item) => item._id !== id),
    }));
  };

  const onEditComment = (text, id) => {
    instance.patch(`/comments/${id}`, {
      text,
    });
    setCommentsList((prev) => ({
      ...prev,
      comment: prev.comments.map((item) =>
        item._id === id ? { ...item, text } : item
      ),
    }));
  };

  const onSendComment = async () => {
    try {
      const { data } = await instance.post("/comments", {
        text: commentText,
        postId: currentPost._id,
      });
      setCommentsList((prev) => ({
        ...prev,
        total: prev.total + 1,
        comments: [...prev.comments, { ...data, user: { fullName: userInfo.fullName } }],
      }));
      setCommentText("");
    } catch (e) {
      alert("Ошибка");
      console.error(e);
    }
  };

  return (
    <div className={styles.Article}>
      <div className={styles.image}>
        <div className={styles.titleContent}>
          <div className={styles.metaInfo}>
            <p>{formatCreatedAt(currentPost.createdAt).toLocaleUpperCase()}</p>
            <div>
              <GlobalSvgSelector id="views" />
              {currentPost.views}
            </div>
          </div>
          <h1>{currentPost.title}</h1>
        </div>
        <img src={postBackground} alt="background" />
        {
          userInfo?._id === (currentPost?.user?._id || currentPost?.user) && (
            <div className={styles.editPost}>
              <p onClick={() => onRemovePost(currentPost?._id)}>Удалить</p>
              <p>Редактировать</p>
            </div>
          )
        }
      </div>

      <div className={styles.wrapper}>
        <MDEditor.Markdown source={currentPost.text} linkTarget="_blank" />
        <div className={styles.comments}>
          <h3>Комментарии ({commentsList.total})</h3>
          {userEnter && (
            <div className={styles.addComment}>
              <label>Добавить комментарий</label>
              <br />
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                type="text"
              />
              <div>
                <button disabled={commentText === ""} onClick={onSendComment}>
                  Отправить
                </button>
              </div>
            </div>
          )}
          <div className={styles.commentsList}>
            {commentsList.comments.map((comment) => (
              <Comment
                key={comment._id}
                onRemove={onRemoveComment}
                onEdit={onEditComment}
                data={comment}
                userName={userInfo.fullName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
