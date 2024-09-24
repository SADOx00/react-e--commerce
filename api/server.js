const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = 5000;

dotenv.config();

const con = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("COnnected Sucessful");
  } catch (error) {
    throw error;
  }
};
app.listen(PORT, () => {
  con();
  console.log("App is listening on port " + PORT);
});

app.get("/", (req, res) => {
  res.send("HEllo maum");
});
