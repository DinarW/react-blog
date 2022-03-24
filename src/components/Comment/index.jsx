import React from "react";

import styles from "./Comment.module.scss";
import { formatCreatedAt } from "../../formatters/formatCreatedAt";

const Comment = ({ data, onRemove, onEdit, userName }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(data.text);

  return (
    <div className={styles.comment}>
      <div className={styles.metaInfo}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "150px",
          }}
        >
          <p className={styles.name}>{data.user.fullName}</p>
        </div>
        <p className={styles.createdAt}>
          {formatCreatedAt(data.createdAt).toLocaleLowerCase()}
        </p>
      </div>
      {!isEditing ? (
        <p className={styles.text}>{editText}</p>
      ) : (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      )}
      {data.user.fullName === userName && (
        <div className={styles.editBlock}>
          {!isEditing ? (
            <>
              <p onClick={() => onRemove(data._id)}>Удалить</p>
              <p onClick={() => setIsEditing(true)}>Редактировать</p>
            </>
          ) : (
            <button
              onClick={() => {
                onEdit(editText, data._id);
                setIsEditing(false);
              }}
            >
              Сохранить
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
