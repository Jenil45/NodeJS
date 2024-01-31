import React, { useState } from "react";
import Card from "../../../../components/common/Card/Card";
import Button from "../../../../components/common/Button/Button";
import TextInput from "../../../../components/common/TextInput/TextInput";
import styles from "../PhoneEmail.module.css";
import { sendOtp } from "../../../../http";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  async function sendingOtp() {
    try {
      const { data } = await sendOtp({ phone: phoneNumber });
      // console.log(data);
      dispatch(setOtp({ phone: data.phone, hash: data.hash }));
      onNext();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Card title="Enter your Phone Number">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="7894561235"
      />
      <div>
        <div>
          <Button text="Next" onClick={sendingOtp} />
        </div>
        <p className={styles.pText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          quidem impedit laudantium,
        </p>
      </div>
    </Card>
  );
};

export default Phone;
