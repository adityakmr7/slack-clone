export const initialState = {
    user: "",
  };
  
  export const actionType = {
    AUTH_USER: "AUTH_USER",
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionType.AUTH_USER:
        return {
          ...state,
          user: action.payload,
        };
  
      default:
        return { ...state };
    }
  };
  