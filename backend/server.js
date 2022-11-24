import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtAuth from "./middleware/jwtAuth.js";

dotenv.config();

const app = express();
// enable CORS
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const DATABASE = process.env.DATABASE;
const DATASOURCE = process.env.DATASOURCE;

const config = {
  headers: {
    "content-type": "application/json",
    "api-key": API_KEY,
  },
};

app.get("/", (_, res) => {
  res.send("Server is running!");
});

// users post
const registerPayload = {
  collection: "users",
  database: DATABASE,
  dataSource: DATASOURCE,
};

app.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.data.password, salt);
    const user = {
      email: req.body.data.email,
      password: hashedPassword,
      firstName: req.body.data.firstName,
      lastName: req.body.data.lastName,
    };
    const payload = { ...registerPayload, document: user };
    axios
      .post(API_URL + "/action/insertOne", payload, config)
      .then((response) => res.send(response.data))
      .catch((error) => {
        console.log(error);
      });
  } catch {
    res.status(500).send();
  }
});

// Login
let loginPayload = {
  collection: "users",
  database: DATABASE,
  dataSource: DATASOURCE,
};

app.post("/login", async (req, res) => {
  const User = {
    email: req.body.data.email,
    password: req.body.data.password,
  };
  if (!User.email || !User.password) {
    return res.status(400).json("Ongeldige invoer");
  }
  loginPayload = { ...loginPayload, filter: { email: User.email } };
  axios.post(API_URL + "/action/findOne", loginPayload, config).then(async (response) => {
    const emailMatch = User.email === response.data.document.email;
    const passwordMatch = await bcrypt.compare(User.password, response.data.document.password);
    if (emailMatch && passwordMatch) {
      const accessToken = jwt.sign({ email: req.body.data.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
      res.json({ accessToken });
    } else {
      console.log("Email of wachtwoord is onjuist");
      res.status(400).json({ message: "Email of wachtwoord is onjuist" });
    }
  });
  if (!User.email === res.email) {
    return res.json({ error: "User not found!" });
  }
});

app.get("/logout", (req, res) => {
  req.logOut();
  // req.flash('succes_msg', 'You are logged out');
});

// Users
const userPayload = {
  collection: "users",
  database: DATABASE,
  dataSource: DATASOURCE,
  projection: {
    _id: 1,
    firstName: 1,
    lastName: 1,
    role: 1,
  },
};

app.get("/users", jwtAuth, (_, res) => {
  axios
    .post(API_URL + "/action/find", userPayload, config)
    .then((response) => res.send(response.data))
    .catch((error) => {
      console.log(error);
    });
});

// console log when app is running
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
