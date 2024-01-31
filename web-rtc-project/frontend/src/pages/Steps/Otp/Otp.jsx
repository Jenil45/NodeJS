import React, { useState } from "react";
import Button from "../../../components/common/Button/Button";
import Card from "../../../components/common/Card/Card";
import TextInput from "../../../components/common/TextInput/TextInput";
import styles from "./Otp.module.css";
import { verifyOtp } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";

const Otp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dataOfStore = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  async function verifyingOtp() {
    try {
      const { data } = await verifyOtp({
        otp: otp,
        phone: dataOfStore.otp.phone,
        hash: dataOfStore.otp.hash,
      });
      console.log(data);
      dispatch(setAuth(data.user));
      // onNext();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Enter OTP">
        <TextInput
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder=""
        />
        <div>
          <div>
            <Button onClick={verifyingOtp} text="Next" />
          </div>
          <p className={styles.pText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quidem impedit laudantium,
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Otp;
