const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

const router = express.Router();

// Register Controller
router.post("/register", registerController);

// Login Controller
router.post("/login", loginController);

module.exports = router;