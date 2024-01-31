import React, { useState } from "react";
import Button from "../../../components/common/Button/Button";
import styles from "./Profile.module.css";
import Card from "../../../components/common/Card/Card";
import TextInput from "../../../components/common/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import { setAuth } from "../../../store/authSlice";
import { activateUser } from "../../../http";

const Profile = ({ onNext }) => {
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/p1.jpeg");

  const dispatch = useDispatch();

  function nextStep() {
    onNext();
  }

  function captureImage(e) {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      // console.log(reader.result);
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  }

  async function saveNameAndProfile() {
    try {
      const { data } = await activateUser({ name, avatar });

      if (data.auth) {
        dispatch(setAuth(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title={`${name}, Set your profile pic`}>
        <div>
          <div className={styles.imageWrapper}>
            <img src={image} alt="avatar" />
          </div>
          <div>
            <input
              onChange={captureImage}
              type="file"
              id="avtarInput"
              className={styles.avtarInput}
            />
            <label htmlFor="avtarInput" className={styles.avtarLabel}>
              Select your pic
            </label>
          </div>
          <div>
            <Button onClick={saveNameAndProfile} text="Next" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
