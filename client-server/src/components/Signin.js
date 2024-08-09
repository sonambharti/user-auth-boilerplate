import React from "react";
// import { Navigate } from "react-router-dom";
import SigninForm from "./SigninForm";
import Layout from "../containers/Layout";
// import { isAuth } from "../../helpers";

const Signin = () => {
  return (
    <Layout>
      {/* {isAuth() ? <Navigate to="/" /> : null} */}
      <div
        className="container"
        style={{
          border: "0px solid red",
          maxWidth: "1072px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-md-5">
            <SigninForm />
          </div>
          <div className="col-md-7 my-auto">
            {/* <img className="img-fluid w-100" src={rocketImg} alt="" /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;