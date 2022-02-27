import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../../components/Header";
import About from "../../components/About";
import Articles from "../../components/Articles/Articles";
import Article from "../../components/Articles/Article";
import Menu from "../../components/Menu";
import UserSign from "../../components/UserSign";
import CreatePost from "../../components/CreatePost";

import "./styles.scss";

const Home = () => {
  return (
    <div className="Home">
      <UserSign />
      <div className="leftSide">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="post/:id" element={<Article />} />
          <Route path="createpost" element={<CreatePost />} />
        </Routes>
      </div>
      <div className="rightSide">
        <Header />
        <div className="articles">
          <Articles />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Home;
