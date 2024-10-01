const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
  {
    CustomerName: { type: String, require: true },
    CustomerTel: { type: String, require: true },
    CustomerSelect: { type: String, require: true },
    subTotal: { type: Number, require: true },
    tax: { type: Number, require: true },
    totalAmount: { type: Number, require: true },
    cardItems: { type: Array, require: true },
  },
  {
    timestamps: true,
  }
);

const Bill = mongoose.model("bills", BillSchema);
module.exports = Bill;
