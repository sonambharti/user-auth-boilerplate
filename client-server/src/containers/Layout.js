import React, { Fragment } from "react";
import { Link,withRouter } from "react-router-dom";
import { useNavigate } from 'react-router';
import { isAuth, signout } from "../helpers";
import Navbar from "../../components/Navbar";

const Layout = ({ children, history }) => {
  const nav = () => (
    <ul style={{ border: "1px solid blue" }}>
      <li>
        <Link to="/">Home</Link>
      </li>

      {!isAuth() && (
        <Fragment>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        </Fragment>
      )}

      {isAuth() && (
        <li>
          <span>Hello {isAuth().username}</span>
        </li>
      )}

      {isAuth() && (
        <li>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  );

return (
    <>
      {/* {nav()} */}
      <Navbar history={history} />
      <div>{children}</div>
    </>
  );
};

export default withRouter(Layout);
