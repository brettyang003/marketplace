import express from "express";
import { createUser, findUser } from "../controllers/users.js";

let router = express.Router();

router.post("/userLogin", findUser);
router.post("/create", createUser);

export default router;
