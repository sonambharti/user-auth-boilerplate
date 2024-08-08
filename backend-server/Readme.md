JWT - Json Web Token

- JWT is a compact, URL-safe means of representing claims to be transferred between two parties.
- The token is digitally signed and contains a payload with claims.
- JWT is commonly used for authentication and authorization in web applications.

# Basic Code to check the api is working fine or not:

### controllers/auth.js

`const express = require("express");
<br/>

exports.signUp = (req, res) => { <br/>
    res.json({success: true}); <br/>
}; <br/>

exports.login = (req, res) => { <br/>
    res.json({success: true}); <br/>
};` 


### routers/routeUsers.js

`const express = require("express"); <br/>
const router = express.Router(); <br/>

const { signUp, login } = require("../controllers/auth"); <br/>

<!-- console.log("SignUp resp: ", signUp) -->

// router.route("/register").post(signUp);
// router.route("/login").post(login);

router.route("/register") <br/>
  .post((req, res, next) => { <br/>
    try { <br/>
      signUp(req, res, next); <br/>
    } catch (err) {<br/>
        console.log("Error in handling register.\n", err); <br/>
        next(err);<br/>
    }<br/>
  });<br/>

router.route("/login") <br/>
  .post((req, res, next) => { <br/>
    try { <br/>
      login(req, res, next); <br/>
    } catch (err) { <br/>
        console.log("Error in handling login.\n", err); <br/>
        next(err); <br/>
    }<br/>
  });<br/>


module.exports = router;`

## index.js

`require("dotenv").config({path: "./config.env"});
const express = require("express")
const app = express();
const userRoute = require("./routers/routeUsers");

app.use(express.json());

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
});`