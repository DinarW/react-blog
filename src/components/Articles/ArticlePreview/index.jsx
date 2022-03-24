import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "../../../formatters/formatCreatedAt";

import styles from "./ArticlePreview.module.scss";
import GlobalSvgSelector from "../../../assets/GlobalSvgSelector";

const ArticlePreview = ({ post }) => {
  const dispatch = useDispatch();
  const currentPostId = useSelector((state) => state.posts.currentPost._id);

  const onOpenPost = () => {
    dispatch({ type: "SET_CURRENT_POST", payload: post });
  };

  return (
    <div
      className={`${styles.preview} ${
        currentPostId === post._id ? styles.active : ""
      }`}
    >
      <div>
        <Link
          onClick={onOpenPost}
          className={styles.title}
          to={`/post/${post._id}`}
        >
          {post.title}
        </Link>
        <p className={styles.shortDescription}>
          {`${post.text
            .replace(/[^a-zA-Zа-яА-Я\d]/g, " ")
            .split("")
            .slice(0, 100)
            .join("")}...`}
        </p>
        <ul className={styles.metaInfo}>
          <li style={{ marginRight: "20px" }}>
            {formatCreatedAt(post.createdAt)}
          </li>
          <li>
            <div>
              <GlobalSvgSelector id="views" />
              {post.views}
            </div>
          </li>
        </ul>
      </div>
      {!!post.previewImg && (
        <img
          className={styles.previewImg}
          src={post.previewImg}
          alt="preview"
        />
      )}
    </div>
  );
};

export default ArticlePreview;
