const express = require("express");
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController");
const { requireSignin, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// Register Controller
router.post("/register", registerController);

// Login Controller
router.post("/login", loginController);

//test route
router.get("/test",requireSignin,isAdmin, testController);

module.exports = router;