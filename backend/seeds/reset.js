const mongoose = require("mongoose");

// Require models
const User = require("../models/users");
const Product = require("../models/products");

// Set up .env
const dotenv = require("dotenv");
dotenv.config();

// Database config
const db = `mongodb://${process.env.DB_SERVER}/${process.env.DB_NAME}`;

mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected!");
    User.collection.drop(() => console.log("User Dropped"));
    Product.collection.drop(() => console.log("Product Dropped"));
  })
  .catch((err) => console.log(err.message));

// mongoose.disconnect().then(() => console.log("Database disconnected"));
