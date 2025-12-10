const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/campus_lost_found")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const ItemSchema = new mongoose.Schema({
  itemName: String,
  description: String,
  location: String,
  date: String,
  contact: String
});

const Item = mongoose.model("items", ItemSchema);

// Add Item
app.post("/api/add", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.send({ message: "Item Added" });
});

// Get Items
app.get("/api/items", async (req, res) => {
  const data = await Item.find();
  res.send(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
