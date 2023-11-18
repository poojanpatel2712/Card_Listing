import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBlockedCards,
  getCardList,
  getCardsByUserid,
} from "../../redux/cards/cardActions";
import { getById } from "../../redux/user/userActions";
import Card from "./Card";

function Cards({cards}) {
    
  return <div className="ml-56 m-16 flex flex-row flex-wrap px-10">
    {cards.map((card,index) => {
        return <Card key={index} {...card} />
    })}
  </div>;
}

export default Cards;
