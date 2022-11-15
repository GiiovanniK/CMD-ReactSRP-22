import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// enable CORS
app.use(cors());

const port = process.env.PORT || 5000;
const API_URL = process.env.API_URL;
const DATABASE = process.env.DATABASE;
const DATASOURCE = process.env.DATASOURCE;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// the route we're working with
app.get("/users", (req, res) => {
  axios.post(API_URL, {
      collection: "users",
      database: DATABASE,
      dataSource: DATASOURCE,

      projection: {
        _id: 1,
      },
    })
    .then((response) => res.send(response.data));
});

// console log when app is running
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
