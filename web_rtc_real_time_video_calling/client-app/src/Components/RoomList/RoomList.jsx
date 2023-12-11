import React, { useCallback, useEffect, useState } from "react";
import styles from "./RoomList.module.css";
import { useSocketEvent } from "../../Context/SocketEventHandler";
import { useNavigate } from "react-router-dom";
import EVENTS from "../../Events/event";

const RoomList = () => {
  // taking the room details for joining
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");

  // taking the socket information
  const socket = useSocketEvent();

  // making the bavigator
  const navigate = useNavigate();

  // on submit the details we submit the form and make a connection and join the room
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit(EVENTS.ROOM_JOIN, { email, roomId });
    },
    [email, roomId, socket]
  );

  // join the user to room and take him/her to that room
  const joiningRoom = useCallback(
    (data) => {
      const { email, roomId } = data;
      navigate(`/room/${roomId}`);
    },
    [navigate]
  );

  useEffect(() => {
    //take user to there
    socket.on(EVENTS.ROOM_JOIN, joiningRoom);

    return () => {
      socket.off(EVENTS.ROOM_JOIN, joiningRoom);
    };
  }, [socket, joiningRoom]);

  return (
    <div className={styles.roomlist}>
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.itag}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span htmlFor="email" className={styles.labelTag}>
            Email
          </span>
        </div>
        <div className={styles.itag}>
          <input
            type="text"
            name="roomid"
            id="roomid"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
          />
          <span htmlFor="roomid" className={styles.labelTag}>
            Room Id
          </span>
        </div>

        <button className={styles.btn} type="submit">
          Join Room
        </button>
      </form>
    </div>
  );
};

export default RoomList;
