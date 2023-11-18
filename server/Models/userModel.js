import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: {type: Number},
  userName: {type : String, required: true},
  password: {type: String, required: true}
});

export const userModel = mongoose.model("users", userSchema);
