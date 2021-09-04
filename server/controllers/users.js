import express from "express";
import mongoose from "mongoose";

import User from "../models/users.js";

export const createUser = async (req, res) => {
  const { name, email, date, password } = req.body;
  const newUser = new User({ name, email, date, password });
  await newUser.save();
};

export const findUser = async (req, res) => {
  const { email, password } = req.body;
  const authenticate = { authenticate: false, name: "" };
  const user = await User.find({ email, password }, function (err, foundUser) {
    if (err) {
      console.log(err);
    }
    if (foundUser) {
      if (foundUser[0].password === password) {
        authenticate.authenticate = true;
      }
    }
    authenticate.name = foundUser[0].name;
    res.send(authenticate);
  });
};
