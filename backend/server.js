import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  res.send("Hello World!");
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
const loginPayload = {
  collection: "users",
  database: DATABASE,
  dataSource: DATASOURCE,
  projection: {
    email: 1,
    password: 1,
  },
};

app.post("/login", async (req, res) => {
  const User = {
    email: req.body.data.email,
    password: req.body.data.password,
  };

  axios.post(API_URL + "/action/findOne", loginPayload, config).then(async (response) => {
    const match = await bcrypt.compare(User.password, response.data.document.password);
    if (match) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let data = {
        time: Date(),
        userId: 12,
      };
      const token = jwt.sign(data, jwtSecretKey);
      res.send(token);
      console.log(token);
    } else {
      res.status(404).send({ message: "Dit wachtwoord bestaat niet" });
    }
  });
  if (!User.email === res.email) {
    return res.json({ error: "User not found!" });
  }
});

app.get("/validateToken", (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
      const token = req.header(tokenHeaderKey);

      const verified = jwt.verify(token, jwtSecretKey);
      if(verified){
          return res.send("Successfully Verified");
      }else{
          // Access Denied
          return res.status(401).send(error);
      }
  } catch (error) {
      // Access Denied
      return res.status(401).send(error);
  }
});

app.get("/logout", (req, res) => {
  req.logOut();
  // req.flash('succes_msg', 'You are logged out');
  res.redirect("login");
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

app.get("/users", (_, res) => {
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
