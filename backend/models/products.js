const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
