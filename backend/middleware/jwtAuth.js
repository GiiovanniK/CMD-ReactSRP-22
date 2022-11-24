import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtAuth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log(token)
  if (!token) {
    res.status(401).json("token not found");
    return;
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("middleware is working");
    next();
  } catch (error) {
    res.status(401).json("invalid token");
  }
};

export default jwtAuth;
