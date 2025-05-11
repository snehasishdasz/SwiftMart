const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

const requireSignin = (req, res, next)=> {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    res.status(401).json({ error: "Unauthorized - Invalid or expired token" });
  }
}

// Middleware to check if the user is an admin
const isAdmin = async (req, res, next) =>{
  try{
    const user = await Users.findById(req.user._id);
    if(user.role !== 1){
      return res.status(403).json({ error: "Access denied - Admins only" });
    }
    else{
      next();
    }
  }
  catch(error){
    console.error("Admin check failed:", error.message);
    res.status(403).json({ error: "Forbidden - Admin access required" });
  }
}

module.exports = { requireSignin, isAdmin };
