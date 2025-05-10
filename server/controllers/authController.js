const Users = require("../models/userModel");
const { hashPassword, comparePassword } = require("../utils/authHelper");
const jwt = require("jsonwebtoken");


const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validations
        if (!name) {
            return res.status(400).json({ message: "❌ Name is required" });
        }
        if (!email) {
            return res.status(400).json({ message: "❌ Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "❌ Password is required" });
        }
        if (!phone) {
            return res.status(400).json({ message: "❌ Phone number is required" });
        }
        if (!address) {
            return res.status(400).json({ message: "❌ Address is required" });
        }

        // Check if user already exists
        const existingUser = await Users.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "⚠️ User already exists. Please login.",
            });
        }

        // Register user
        const hashedPassword = await hashPassword(password);
        const user = await Users.create({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
        });

        res.status(201).json({
            success: true,
            message: "🎉 User registered successfully!",
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "💥 Error in registration",
            error: error.message,
        });
    }
};

const loginController = async (req, res) => {
    try{
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        // Validations
        if (!email || !password) {
          return res.status(400).json({
            error: "Please fill all the fields",
          });
        }

        // Check if user exists
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "⚠️ User not found. Please register.",
            });
        }
        // Check password
        const isMatch = await comparePassword(password, user.password);

        if(isMatch){
            return res.status(200).json({
              success: true,
              message: "Login successful🥳🎉",
              user: user,
            });
        }
        else{
            return res.status(400).json({
              success: false,
              error: "⚠️Invalid credentials⚠️",
            });
        }

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "💥 Error in login",
            error: error.message,
        });
    }
}



module.exports = { registerController, loginController };
