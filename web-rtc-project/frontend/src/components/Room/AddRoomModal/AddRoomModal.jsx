import React, { useState } from "react";
import styles from "./AddRoomModal.module.css";
import TextInput from "../../common/TextInput/TextInput";
import { addRoom } from "../../../http";
import { useNavigate } from "react-router-dom";

const AddRoomModal = ({ onClick }) => {
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");

  const navigate = useNavigate();

  async function createRoom() {
    // server call
    try {
      if (!topic) {
        return;
      }
      const { data } = await addRoom({ topic, roomType });
      console.log(data);
      navigate(`/room/${data.room._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalbody}>
        <div className={styles.closebtn} onClick={onClick}>
          <img src="/images/close.png" alt="" />
        </div>
        <div className={styles.modalheader}>
          <h3>Enter the topic</h3>
          <TextInput
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            fullwidth="true"
          />
          <h3>Room Types</h3>
          <div className={styles.roomtypes}>
            <div
              onClick={() => setRoomType("open")}
              className={`${styles.type} ${
                roomType === "open" ? styles.active : ""
              }`}
            >
              <img src="/images/globe.png" alt="globe" />
              {/* <img src="/images/user-icon.png" alt="user" /> */}

              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${styles.type} ${
                roomType === "social" ? styles.active : ""
              }`}
            >
              <img src="/images/social.png" alt="social" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("private")}
              className={`${styles.type} ${
                roomType === "private" ? styles.active : ""
              }`}
            >
              <img src="/images/lock.png" alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modalfooter}>
          <h3>Let's create a room</h3>
          <button onClick={createRoom} className={styles.btn}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModal;
