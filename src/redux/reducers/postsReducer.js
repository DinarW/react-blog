const initialState = {
  list: [],
  filterBy: "",
  currentPost: {
    id: -1,
  },
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, list: action.payload };
    case "SET_FILTER":
      return { ...state, filterBy: action.payload };
    case "SET_CURRENT_POST":
      return { ...state, currentPost: action.payload };
    case "DELETE_POST":
      const newList = state.list.filter((item) => item._id !== action.payload);
      return { ...state, list: newList };
    default:
      return state;
  }
};

export default postsReducer;
