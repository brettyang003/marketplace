import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: String,
  date: { type: Date, default: Date.now },
  price: Number,
});
var Item = new mongoose.model("Item", itemSchema);

export default Item;
