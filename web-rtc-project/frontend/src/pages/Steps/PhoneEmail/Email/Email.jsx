import React, { useState } from "react";
import Card from "../../../../components/common/Card/Card";
import Button from "../../../../components/common/Button/Button";
import styles from "../PhoneEmail.module.css";
import TextInput from "../../../../components/common/TextInput/TextInput";

const Email = () => {
  const [email, setEmail] = useState("");

  return (
    <Card title="Enter your Email">
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="abc.123@gmail.com"
      />
      <div>
        <div>
          <Button text="Next" />
        </div>
        <p className={styles.pText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          quidem impedit laudantium,
        </p>
      </div>
    </Card>
  );
};

export default Email;
