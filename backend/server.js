const express = require("express");
// const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
// const connection = require("./src/config/db");
const usersRoute = require("./src/routes/utilisateurs.route");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type", "authorization"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(express.json());
// app.use(cookieParser());

app.use(usersRoute);
app.get("/", (req, res) => {
  res.status(200).send("yeah");
});

// server
app.listen(process.env.PORT, () => {
  // console.log(`Listening on port ${process.env.PORT}`);
});
