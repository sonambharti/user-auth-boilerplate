const express = require("express");
const router = express.Router();

// const { signUp, login } = require("../controllers/auth");
const {
    register,
    register2,
    accountActivation,
    accountActivation2,
    login,
    users,
    forgetPassword,
    resetPassword,
    resetPassword2,
    resetPassword3,
  } = require("../controllers/auth");


  router.route("/users/register")
  .post((req, res, next) => {
    try {
      register(req, res, next);
    } catch (err) {
        console.log("Error in handling register.\n", err);
        next(err);
    }
  });
  
  
router.route("/users/login")
    .post((req, res, next) => {
      try {
        login(req, res, next);
      } catch (err) {
          console.log("Error in handling login.\n", err);
          next(err);
      }
    });

//   router.route("/users/register").post(register);  
  router.route("/users/register2").post(register2);
  router.route("/users/account-activation").post(accountActivation);
  router.route("/users/account-activation2").post(accountActivation2);
//   router.route("/users/login").post(login);  
  router.route("/users/users").get(users);
  router.route("/users/forgetpassword").post(forgetPassword);
  router.route("/users/resetpassword").put(resetPassword);
  router.route("/users/resetpassword2").put(resetPassword2);
  router.route("/users/resetpassword3").put(resetPassword3);
  

module.exports = router;