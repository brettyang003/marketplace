import express from "express";
import {
  createItem,
  deleteItem,
  getItems,
  updateItem,
} from "../controllers/items.js";
const router = express.Router();

router.post("/addItem", createItem);
router.get("/", getItems);
router.post("/deleteItem", deleteItem);
router.post("/updateItem", updateItem);
export default router;
