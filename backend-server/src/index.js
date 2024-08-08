require("dotenv").config({path: "./config.env"});
const express = require("express")
const cors = require("cors");
const app = express();
const path = require("path");
const userRoute = require("./routers/routeUsers");

// const connectDB = require("./db/mongoose");

// connectDB();

app.use(express.json());
app.use(cors());

// app.use("/api/auth", userRoute);
app.use("/api/auth", (req, res, next) => {
    try {
      userRoute(req, res, next);
    } catch (err) {
      console.log("Error in handling userRoute.\n", err);
      next(err);
    }
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});