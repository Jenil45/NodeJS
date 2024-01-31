import React, { useState } from "react";
import Button from "../../../components/common/Button/Button";
import styles from "./UserName.module.css";
import Card from "../../../components/common/Card/Card";
import TextInput from "../../../components/common/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";

const UserName = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const data = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log("data of user ", data);
  const [fullname, setFullName] = useState(name);

  function nextStep() {
    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));
    onNext();
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="What's your Full Name">
        <TextInput
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          placeholder=""
        />
        <div>
          <div>
            <Button onClick={nextStep} text="Next" />
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

export default UserName;
