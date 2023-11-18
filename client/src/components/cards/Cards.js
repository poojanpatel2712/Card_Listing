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
    
  return <div className="w-full m-16">
    {cards.map((card,index) => {
        return <Card key={index} {...card} />
    })}
  </div>;
}

export default Cards;
