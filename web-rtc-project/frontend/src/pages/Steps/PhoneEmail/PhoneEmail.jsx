import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./PhoneEmail.module.css";
const phoneEmail = {
  phone: Phone,
  email: Email,
};

const PhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const CurrentComponent = phoneEmail[type];
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.buttonSwitch} ${
                type === "phone" ? styles.active : ""
              }`}
              onClick={() => setType("phone")}
            >
              Phone
            </button>
            <button
              className={`${styles.buttonSwitch} ${
                type === "email" ? styles.active : ""
              }`}
              onClick={() => setType("email")}
            >
              Email
            </button>
          </div>
          <CurrentComponent onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default PhoneEmail;
