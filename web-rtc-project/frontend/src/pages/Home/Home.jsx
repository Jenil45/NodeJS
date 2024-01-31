import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/common/Card/Card";
import Button from "../../components/common/Button/Button";

const Home = () => {
  const signInLink = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoratrion: "none",
  };

  // create a function for redirecting
  const navigate = useNavigate();
  function redirectRegister() {
    navigate("/login");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to WebRTC">
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          excepturi fugiat quos quaerat possimus sunt magnam consequatur
          obcaecati. Debitis.
        </p>
        <div>
          <Button onClick={redirectRegister} text="Let's Go" />
        </div>
        <div className={styles.signin}>
          <span>Have an invite text</span>
          <Link style={signInLink} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
