require("dotenv").config();
require("colors");

const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const morgan = require("morgan");

const authRoute = require("./routes/authRoute");


const app = express();
const PORT = process.env.PORT || 8080;
connectDB();

//Middleware
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});


app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}`.yellow.bold.underline.bgBlue
  );
});