const express = require("express");
// const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "../config/.env" });
const cors = require("cors");
// const connection = require("./config/db");
const usersRoute = require("./routes/utilisateurs.route");

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type", "authorization"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(express.json());
// app.use(cookieParser());

app.use("/api/utilisateur", usersRoute);
app.get("/", (req, res) => {
  res.status(200).send("yeah");
});

// ready to export
module.exports = app;
