import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  title: { type: String, required: true },
  budget_name: { type: String, required: true },
  ownerID: { type: Number },
  cardtype: { type: String, enum: ["Burner", "Subscription"] },
  status: { type: String, enum: ["Active", "Blocked"] },
  expiry: { type: Date },
  spent: { value: { type: Number }, currency: { type: String } },
  balance: { value: { type: Number }, currency: { type: String } },
  limit: { type: Number },
});

export const cardModel = mongoose.model("cards", cardSchema);
