const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

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

app.listen(port, () => console.log(`Server started on port ${port}😎`));
