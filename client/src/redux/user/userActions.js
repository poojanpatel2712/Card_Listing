import axios from "axios";

import { GET_BY_ID, LOGIN} from "./userTypes.js";

export const login = (userData) => async (dispatch) => {
  try {
    const user = await axios({
      url: "http://localhost:4000/Card_Listing/user/login",
      method: "POST",
      data: userData,
    });
    console.log(user)
    localStorage.setItem("id", user.data.user.userId);
    window.location.href = "/all";
    return dispatch({ type: LOGIN, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getById = (id) => async (dispatch) => {
  try {
    const user = await axios({
      url: "http://localhost:4000/Card_Listing/user/getById",
      method: "POST",
      data: id,
    });
    return dispatch({ type: GET_BY_ID, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};