import React from "react";
import styles from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <div>
      <input
        type="text"
        style={{ width: props.fullwidth === "true" ? "100%" : "inherit" }}
        className={styles.inputBox}
        {...props}
      />
    </div>
  );
};

export default TextInput;
