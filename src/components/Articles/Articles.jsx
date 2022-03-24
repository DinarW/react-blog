import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import styles from "./Articles.module.scss";
import Article from "./ArticlePreview";
import GlobalSvgSelector from "../../assets/GlobalSvgSelector";

const Articles = () => {
  const [switchPage, setSwitchPage] = React.useState({
    currentPage: 1,
    total: 1,
  });
  const filter = React.useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const [list, filterBy] = useSelector((state) => [
    state.posts.list,
    state.posts.filterBy,
  ]);

  // запрашиваю и отправляю в store статьи текущей страницы, которые проходят фильтрацию
  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5656/posts?query=${filterBy}&page=${switchPage.currentPage}`
        );
        setSwitchPage((prev) => ({
          ...prev,
          total: Math.ceil(Number(data.total) / 5),
        }));
        dispatch({ type: "SET_POSTS", payload: data.items });
      } catch (e) {
        alert("Ошибка при запросе данных :/");
      }
    }

    // переключаюсь на первую страницу, чтобы при фильтрации не ломалось
    if (filter.current !== filterBy) {
      setSwitchPage((prev) => ({ ...prev, currentPage: 1 }));
      filter.current = filterBy;
    }

    fetchData();
  }, [dispatch, switchPage.currentPage, filterBy]);

  // логика, чтобы переключаться на пост, id которого в url
  React.useEffect(() => {
    const pathPost = list.find(
      (post) => post._id === window.location.pathname.split("/").pop()
    );
    if (!location.pathname.includes("/post/")) {
      dispatch({ type: "SET_CURRENT_POST", payload: { id: null } });
    }
    if (pathPost) {
      dispatch({ type: "SET_CURRENT_POST", payload: pathPost });
    }
  }, [dispatch, list, location]);

  return (
    <div>
      {list.map((item) => (
        <Article key={item._id} post={item} />
      ))}

      {(list.length > 4 || switchPage.total > 1) && (
        <div className={styles.switchPage}>
          <div className={styles.togglePage}>
            <button
              className={
                switchPage.currentPage !== 1 ? styles.activeSwitch : ""
              }
              onClick={() =>
                setSwitchPage((prev) => ({
                  ...prev,
                  currentPage: prev.currentPage - 1,
                }))
              }
              disabled={switchPage.currentPage === 1}
              style={{ transform: "rotate(-180deg)" }}
            >
              <GlobalSvgSelector id="arrow" />
            </button>
            <button
              className={
                switchPage.currentPage !== switchPage.total
                  ? styles.activeSwitch
                  : ""
              }
              onClick={() =>
                setSwitchPage((prev) => ({
                  ...prev,
                  currentPage: prev.currentPage + 1,
                }))
              }
              disabled={switchPage.currentPage === switchPage.total}
            >
              <GlobalSvgSelector id="arrow" />
            </button>
          </div>
          <p>
            Страница {switchPage.currentPage} из {switchPage.total}
          </p>
        </div>
      )}
    </div>
  );
};

export default Articles;
