import axios from "axios";

import {GET_BLOCKED_CARDS, GET_CARDS_BY_NAME, GET_CARDS_BY_TYPE, GET_CARDS_NAMES, GET_CARD_BY_USERID, GET_CARD_LIST, POST_CARD } from "./cardTypes.js";

export const getBlockedCards = () => async (dispatch) => {
  try {
    const user = await axios({
      url: "http://localhost:4000/Card_Listing/card/blocked",
      method: "GET",
    });
    return dispatch({ type: GET_BLOCKED_CARDS, payload: user });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getCardsByName = (data) => async (dispatch) => {
    try {
      const user = await axios({
        url: "http://localhost:4000/Card_Listing/card/title",
        method: "GET",
        data: data
      });
      return dispatch({ type: GET_CARDS_BY_NAME, payload: user });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const getCardsByType = (data) => async (dispatch) => {
    try {
        const user = await axios({
          url: "http://localhost:4000/Card_Listing/card/type",
          method: "GET",
          data: data
        });
        return dispatch({ type: GET_CARDS_BY_TYPE, payload: user });
      } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
      }
  };

  export const getCardsNames = () => async (dispatch) => {
    try {
      const user = await axios({
        url: "http://localhost:4000/Card_Listing/card/names",
        method: "GET",
      });
      return dispatch({ type: GET_CARDS_NAMES, payload: user });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const getCardsByUserid = (id) => async (dispatch) => {
    try {
      const user = await axios({
        url: `http://localhost:4000/Card_Listing/card/get/${id}`,
        method: "GET",
      });
      return dispatch({ type: GET_CARD_BY_USERID, payload: user });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };

  export const getCardList = () => async (dispatch) => {
    try {
      const user = await axios({
        url: "http://localhost:4000/Card_Listing/card/cardlist",
        method: "GET",
      });
      return dispatch({ type: GET_CARD_LIST, payload: user });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
  