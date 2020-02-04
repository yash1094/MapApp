const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//load env vars
dotenv.config({ path: "./config/config.env" });

//connect to DB
connectDB();

const app = express();

//body parser
app.use(express.json());

//cors
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/v1/stores", require("./routes/stores"));

const PORT = process.env.PORT || 3434;

app.listen(PORT, () =>
  console.log(
    `listening on port: ${PORT}, Server running in ${process.env.NODE_ENV}`
  )
);
