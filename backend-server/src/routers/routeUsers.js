const express = require("express");
const router = express.Router();

const { signUp, login } = require("../controllers/auth");

console.log("SignUp resp: ", signUp)

// router.route("/register").post(signUp);
// router.route("/login").post(login);

router.route("/register")
  .post((req, res, next) => {
    try {
      signUp(req, res, next);
    } catch (err) {
        console.log("Error in handling register.\n", err);
        next(err);
    }
  });

router.route("/login")
  .post((req, res, next) => {
    try {
      login(req, res, next);
    } catch (err) {
        console.log("Error in handling login.\n", err);
        next(err);
    }
  });


module.exports = router;