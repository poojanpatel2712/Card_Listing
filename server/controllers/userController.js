import { userModel } from "../Models/userModel.js";

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await userModel.findOne({ userName });
    if (!user) return res.status(500).json({ error: "No such user!!" });
    if (user.password != password)
      return res.status(500).json({ error: "Invalid password" });
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export {
  login,
};
