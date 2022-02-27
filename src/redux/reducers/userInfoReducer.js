const initialState = {
  userAutoriz: false,
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENTER_USER":
      return { ...state, userAutoriz: true, userInfo: action.payload };
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
};

export default userInfoReducer;
