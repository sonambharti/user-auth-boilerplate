import React from "react";
// import { Redirect } from "react-router-dom";
import rocketImg from "../../assets/rocket.png";
import Layout from "../containers/Layout";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Layout>
      {/* {isAuth() ? <Redirect to="/" /> : null} */}
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
            <ForgotPasswordForm />
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={rocketImg} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;