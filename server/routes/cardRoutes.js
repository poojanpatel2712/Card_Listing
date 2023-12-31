import express from "express";
import {
  GetCardList,
  PostCard,
  findCardByUserId,
  getBlockedCards,
  getCardsByName,
  getCardsByType,
  getCardsNames,
} from "../controllers/cardController.js";

const router = express.Router();

router.get("/cardlist", GetCardList);
router.post("/add", PostCard);
router.get("/get/:userId", findCardByUserId);
router.get("/blocked", getBlockedCards);
router.post("/title", getCardsByName);
router.post("/type", getCardsByType);
router.get("/names", getCardsNames);

export default router;
