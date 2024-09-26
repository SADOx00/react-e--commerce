const User = require("../models/User");
const router = require("express").Router();

router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    // const users = await User.find();
    // res.status(200).json(users);
    const user = await User.findById(req.body.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
