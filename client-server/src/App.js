import "./index.css";
import React, { useState } from "react";
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import SentEmail from "./components/SentEmail";
import Activate from "./components/Activate";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup";


const App = () => {
  const [user, setUser] = useState(null);

  console.log("app");

  const getUserInfo = (value) => {
    console.log("line 27 user Value: ", value);
    if (value !== undefined) {
      return setUser(value);
    }
    console.log("line 31 user: ", user);
  };

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/signup" component={Signup} /> */}
        {/* <Route exact path="/signup2" component={Signup2} /> */}
        <Route
          exact
          path="/signup"
          render={() => <Signup getUserInfo={getUserInfo} />}
        />
        <Route exact path="/signin" component={Signin} />
        {/* <Route exact path="/signin2" component={Signin2} /> */}
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route
          exact
          path="/auth/resetpassword/:token"
          component={ResetPassword}
        />
        <Route exact path="/auth/activate/:token" component={Activate} />
        {user && (
          <Route
            exact
            path="/sentemail"
            render={() => <SentEmail user={user} />}
          />
        )}
      </Routes>
    </HashRouter>
  );
};

export default App;