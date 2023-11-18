import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Cards from "./cards/Cards";
import { useDispatch } from "react-redux";
import { getById } from "../redux/user/userActions";
import {
  getBlockedCards,
  getCardList,
  getCardsByUserid,
} from "../redux/cards/cardActions";
import { useParams } from "react-router-dom";

function Home({ id }) {
  const { type } = useParams();
  const [cards, setCards] = useState([]);
  console.log(type)
  const dispatch = useDispatch();

  useEffect(() => {
    if (type == "your") {
        if(id) {
            dispatch(getCardsByUserid(id)).then((data) =>{
              console.log(data)
              if(data.payload.data)
                setCards(data.payload.data.cards)
            });
        }
        } else if (type == "all") {
            console.log("poojan")
          dispatch(getCardList()).then((data) =>{
            console.log(data)
            if(data.payload.data)
              setCards(data.payload.data.cards)
          });;
        } else {
          dispatch(getBlockedCards()).then((data) =>{
            console.log(data)
            if(data.payload.data)
              setCards(data.payload.data.cards)
          });;
        }
  } ,[type,id,setCards])
    
  

  return (
    <div>
      <Navbar />
      <Cards cards={cards} />
    </div>
  );
}

export default Home;
