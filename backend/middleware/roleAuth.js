import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const roleAuth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log(token)
  if (!token) {
    res.status(401).json("token not found");
    return;
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (user.role !== "admin") {
      res.status(401).json("unauthorized!");
    }
    next();
    console.log("middleware is working");
  } catch (error) {
    res.status(401).json("invalid token");
  }
};

export default roleAuth;
