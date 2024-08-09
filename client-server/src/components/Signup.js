import React from "react";
import SignupForm from "./SignupForm";
import Layout from "../containers/Layout";

const Signup = ({ getUserInfo }) => {
  return (
    <Layout>
      <div
        className="container "
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
            <SignupForm getUserInfo={getUserInfo} />
          </div>
          <div className="col-md-7 my-auto">
            {/* <img className="img-fluid w-100" src={rocketImg} alt="" /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;