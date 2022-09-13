const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/user");

router.get("/", (req, res) => {
  res.send(`server started`);
});

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
