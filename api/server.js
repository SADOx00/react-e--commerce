const app = require("express")();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// routes

const categoryRoute = require("./routes/categorties");
const productRoute = require("./routes/products");
const billRoute = require("./routes/bill");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
const con = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("COnnected Sucessful");
  } catch (error) {
    throw error;
  }
};

// middlewares

app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bill", billRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  con();
  console.log("App is listening on port " + PORT);
});
