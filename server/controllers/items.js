import express from "express";
import mongoose from "mongoose";
import Item from "../models/item.js";

export const getItems = async (req, res) => {
  const items = await Item.find({});
  res.send(items);
};
export const createItem = async (req, res) => {
  const { name, description, img, date, price } = req.body;
  console.log(`Entry Added: ${req.body}`);
  const newItem = new Item({ name, description, img, date, price });
  await newItem.save();
};

export const updateItem = async (req, res) => {
  const updatedItem = await Item.updateOne({ name: req.body.name }, req.body);
};

export const deleteItem = async (req, res) => {
  const items = await Item.deleteOne(req.body);
};
