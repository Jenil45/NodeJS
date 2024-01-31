import React from "react";
import styles from "./RoomCard.module.css";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/room/${room._id}`)} className={styles.card}>
      <h3>{room.topic}</h3>
      <div
        className={`${styles.speakers} ${
          room.speakers.length === 1 ? styles.singlespeaker : ""
        }`}
      >
        <div className={styles.speakerImage}>
          {room.speakers.map((speaker) => (
            <img key={speaker.id} src={speaker.profile} alt="Speaker" />
          ))}
        </div>
        <div className={styles.speakerName}>
          {room.speakers.map((speaker) => (
            <span key={speaker.id}>{speaker.name}</span>
          ))}
        </div>
      </div>
      <div className={styles.audience}>
        {room.totalPeople}
        <img src="/images/user-icon.png" alt="user" />
      </div>
    </div>
  );
};

export default RoomCard;
