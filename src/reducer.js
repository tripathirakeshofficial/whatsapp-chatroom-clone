export const initialState = {
  user: null,
  email: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        email: action.email,
      };
    default:
      return state;
  }
};

export default reducer;
