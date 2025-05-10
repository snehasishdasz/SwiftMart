const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const saltRounds = await bcrypt.genSalt(10);
    return (hashedPassword = await bcrypt.hash(password, saltRounds));
  } catch (error) {
    throw new Error(error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { hashPassword, comparePassword };
