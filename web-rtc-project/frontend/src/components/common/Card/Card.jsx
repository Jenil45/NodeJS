import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingRtc}>{title}</div>
      {children}
    </div>
  );
};

export default Card;
