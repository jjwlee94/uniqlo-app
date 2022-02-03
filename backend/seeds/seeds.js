const mongoose = require("mongoose");

// Require models
const User = require("../models/users");
const Product = require("../models/products");

// Set up .env
const dotenv = require("dotenv");
dotenv.config();

// Database config
const db = `mongodb://${process.env.DB_SERVER}/${process.env.DB_NAME}`;

// Connect to database
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const userOne = new User({
  first_name: "User",
  last_name: "One",
  email: "userone@example.com",
  password: "password",
});

userOne
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const productWomen = new Product({
  name: "Seamless down short coat",
  image:
    "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/439714/item/goods_09_439714.jpg?width=1600&impolicy=quality_75",
  price: 199.9,
  description: [
    "Durable water-repellent coating. Windproof and lightweight. Resin-coated fabric, hood eyelets and seam tape. A down parka with a well balanced, contoured cut. High-performance outerwear without stitching on the surface to help keep water and cold air out. Updated seam tape quilting for a flattering fit. Fleece lined pockets. New quilting width for a sleek look.",
  ],
  category: "women",
});

productWomen
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const productMen = new Product({
  name: "Sweat shirt",
  image:
    "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/444966/item/goods_30_444966.jpg?width=1600&impolicy=quality_75",
  price: 39.9,
  description: [
    "Increased fabric weight. Pairs well with casual styles like jeans, jogger pants or shorts. Compact 30-count yarn creates a fine, smooth texture. Double yarn loops on the reverse side prevent shedding and enhance comfort. V-shaped patch is a nod to the classic French terry T-shirt. Perfectly styled sweatshirt with a contemporary fit.",
  ],
  category: "men",
});

productMen
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const productKids = new Product({
  name: "Fluffy yarn fleece full-zip jacket",
  image:
    "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/439328/sub/goods_439328_sub3.jpg?width=1600&impolicy=quality_75",
  price: 29.9,
  description: [
    "In response to customer feedback, we removed the piping on the front edges and added a chin guard. Fluffy brushed fabric that is soft to the touch. Relaxed cut. Design updated so the area in contact with the neck and chin is also made of soft fleece. Made with recycled polyester.",
  ],
  category: "kids",
});

productKids
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const productBaby = new Product({
  name: "Toddler leggings",
  image:
    "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/446614/item/goods_63_446614.jpg?width=1600&impolicy=quality_75",
  price: 9.9,
  description: [
    "To adjust the fit, pull elastic waistband through the opening and sew at preferred location. The waistband is secured on the right side to prevent twisting. Global quality care label is attached in the mid-back body interior. Stretchy fabric makes them easy to put on. *Please note that pattern may differ from the photo. Your understanding is appreciated. Updated with a larger pocket that can fit a handkerchief. *May not accommodate all handkerchiefs. Back pocket makes it easy to tell front from back, so kids can dress themselves. These leggings are great for daily wear.",
  ],
  category: "baby",
});

productBaby
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
