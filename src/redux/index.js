import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";
import userInfoReducer from "./reducers/userInfoReducer";
import userSignReducer from "./reducers/userSignReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  sign: userSignReducer,
  user: userInfoReducer,
});

const store = createStore(rootReducer);

export default store;
