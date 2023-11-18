import { cardModel } from "../Models/cardModel.js";

const GetCardList = async (req, res) => {
  try {
    const cards = await cardModel.find({});
    return res.status(200).json({ cards });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const PostCard = async (req, res) => {
  try {
    const card_data = req.body;
    const card = await cardModel.create(card_data);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const findCardByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const cards = await cardModel.find({ ownerID: userId });
    return res.status(200).json({ cards });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getBlockedCards = async (req, res) => {
  try {
    const cards = await cardModel.find({ status: "Blocked" });
    return res.status(200).json({ cards });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getCardsByName = async (req, res) => {
  try {
    const { title } = req.body;
    console.log(req.body)
    const cards = await cardModel.find({ title : {
      $regex: title
    } });
    return res.status(200).json({ cards });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getCardsByType = async (req, res) => {
  try {
    const { cardtype } = req.body;
    let cards=[];
    if(cardtype)
    cards = await cardModel.find({ cardtype });
    else
    cards = await cardModel.find({});
    return res.status(200).json({ cards });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getCardsNames = async (req, res) => {
  try {
    const names = await cardModel.find({}, "title");
    return res.status(200).json({ names });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export {
  GetCardList,
  PostCard,
  findCardByUserId,
  getBlockedCards,
  getCardsByName,
  getCardsByType,
  getCardsNames,
};
