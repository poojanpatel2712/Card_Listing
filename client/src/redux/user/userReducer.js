import { GET_BY_ID, LOGIN } from "./userTypes";

const initialState = {user: {}}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          ...action.payload,
        };
        case GET_BY_ID:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  };
  
  
  export default userReducer;