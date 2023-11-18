import { GET_BLOCKED_CARDS, GET_CARDS_BY_NAME, GET_CARDS_BY_TYPE, GET_CARDS_NAMES, GET_CARD_BY_USERID, GET_CARD_LIST, POST_CARD } from "./cardTypes.js";

const initialState = {cards: []}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BLOCKED_CARDS:
        return {
          ...state,
          ...action.payload,
        }
        case GET_CARDS_BY_NAME:
        return {
          ...state,
          ...action.payload,
        }
        case GET_CARDS_BY_TYPE:
        return {
          ...state,
          ...action.payload,
        }
        case GET_CARDS_NAMES:
        return {
          ...state,
          ...action.payload,
        }
        case GET_CARD_BY_USERID:
        return {
          ...state,
          ...action.payload,
        }
        case GET_CARD_LIST:
        return {
          ...state,
          ...action.payload,
        }
      default:
        return {
          ...state,
        };
    }
  };
  
  
  export default cardReducer;