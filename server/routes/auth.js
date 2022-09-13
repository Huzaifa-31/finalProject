const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/user");
const { postCar } = require("../controller/car");

router.get("/", (req, res) => {
  res.send(`server started`);
});

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/postcar", postCar);

module.exports = router;
