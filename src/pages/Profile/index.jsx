import React from "react";
import { useSelector } from "react-redux";
import { formatCreatedAt } from "../../formatters/formatCreatedAt";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import ArticlePreview from "../../components/Articles/ArticlePreview";
import Comment from "../../components/Comment";

import "./styles.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user?.userInfo);
  const [activeTab, setActiveTab] = React.useState("Articles");

  return (
    <div className="Profile">
      <div>
        <Header />
        <div className="ProfileContent">
          <div className="userInfo">
            <h1>{user?.fullName}</h1>
            <p>Дата регистрации: {formatCreatedAt(user?.createdAt)}</p>
          </div>
          <div className="userHistory">
            <button
              onClick={() => setActiveTab("Articles")}
              className={activeTab === "Articles" ? "active" : ""}
            >
              Статьи
            </button>
            <button
              onClick={() => setActiveTab("Comments")}
              className={activeTab === "Comments" ? "active" : ""}
            >
              Комментарии
            </button>
          </div>
          {activeTab === "Articles"
            ? user?.posts.map((post) => (
                <ArticlePreview key={post._id} post={post} />
              ))
            : user?.comments.map((comment) => (
                <Link key={comment._id} to={`/post/${comment.post}`}>
                  <Comment data={comment} userName={null} />
                </Link>
              ))}
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Profile;
