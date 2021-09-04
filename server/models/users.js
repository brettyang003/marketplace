import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: { type: Date, default: Date.now },
  password: String,
});
var User = new mongoose.model("User", userSchema);

export default User;
