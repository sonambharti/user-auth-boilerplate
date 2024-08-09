import styles from "../Style/Home.css";
import React, { useState } from "react";
import Layout from "../containers/Layout";

const SentEmail = ({ user }) => {
  console.log(user);

  const { username, email } = user;

  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroSection}>
          {/* <h1>Please Check</h1> */}
          <h1>A verification email has been sent to:</h1>
          {/* <h1>your email</h1> */}
          <br />
          <h3>{email}</h3>
        </div>
        <div className={styles.animation}>
          <img src="/images/background.png" alt="hero-img" />
        </div>
      </section>
    </Layout>
  );
};

export default SentEmail;