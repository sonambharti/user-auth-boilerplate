import styles from "../Style/Home.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuth, signout } from "../helpers";
import Layout from "../containers/Layout";

const Home = ({ history }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setIsClicked(true);
  };

  return (
    <>
      {isClicked ? <Navigate to="/signup" /> : null}
      <Layout>
        <section className={styles.hero}>
          <div className={styles.heroSection}>
            {/* <p>If you like it, please give me a star</p> */}

            {!isAuth() && (
              <>
                <h1>USER AUTH</h1>
                <h1>BOILERPLATE</h1>
                <br />
                <p>
                  {" "}
                  This is User Auth Boilerplate. <br />
                  If you like it, please give me a star
                </p>
                <button className={styles.btn} onClick={handleClick}>
                  Get Started
                </button>
              </>
            )}

            {isAuth() && (
              <>
                <h1>Welcome Back</h1>
                <h1>{isAuth.username}</h1>
                <br />
                <p>
                  You are signed-in. If you want to sign-out, please hit "sign
                  out" button
                </p>
                <button
                  className={styles.btn}
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
          <div className={styles.animation}>
            <img src="/images/background.png" alt="hero-img" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;