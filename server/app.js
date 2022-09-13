const express = require("express");
// const carpost = require("./routes/carroute");
const dotenv = require("dotenv");
const app = express();
const authrouter = require("./routes/auth");
const cors = require("cors");

//ENV

dotenv.config({ path: "./.env" });
//DB
// require database file
require("./database/conn");
//model

// const User = require("./models/userModel");
app.use(cors());
app.use(express.json());

//require routes ...to make routes easy
app.use(require("./routes/auth"));

// app.use("/carpost", carpost);
app.use("/", authrouter);
//port
const PORT = process.env.PORT;

//middleware

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
