const Bill = require("../models/Bills");
const router = require("express").Router();

router.get("/get-all", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add-bll", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Bill created successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
