const initialState = {
  signUp: false,
  signIn: false,
};

const userSignReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, signUp: true, signIn: false };
    case "SIGN_IN":
      return { ...state, signIn: true, signUp: false };
    case "CLOSE_MODAL":
      return { ...state, signIn: false, signUp: false };
    default:
      return state;
  }
};

export default userSignReducer;
