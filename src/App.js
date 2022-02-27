import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      const userData = JSON.parse(localStorage.getItem("user"));
      axios.get(`http://localhost:5656/users/${userData._id}`).then((res) =>
        dispatch({
          type: "ENTER_USER",
          payload: { ...userData, ...res.data },
        })
      );
    }
  }, [dispatch]);

  switch (pathname) {
    case "/profile":
      return <Profile />;
    default:
      return <Home />;
  }
}

export default App;
