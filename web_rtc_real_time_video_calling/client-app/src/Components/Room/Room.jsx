import React, { useCallback, useEffect, useState } from "react";
import styles from "./Room.module.css";
import { useSocketEvent } from "../../Context/SocketEventHandler";
import EVENTS from "../../Events/event";
import ReactPlayer from "react-player";
import peer from "../../services/WebRTCService";

const Room = () => {
  const [roomSocketId, setRoomSocketId] = useState(null);
  const [myVideo, setMyVideo] = useState();
  const [memberVideo, setMemberVideo] = useState();

  // taking the socket
  const socket = useSocketEvent();

  // all event handled
  const notifyRoomUserConnected = useCallback(({ email, id }) => {
    console.log("User joined ", { email, id });
    // let newRoomMember = [...roomSocketId, id];
    setRoomSocketId(id);
  }, []);

  // calling the member
  const handleCall = useCallback(async () => {
    //  my stream
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    // create a offer
    const offer = await peer.createOffer();
    socket.emit(EVENTS.CALL_USER, { to: roomSocketId, offer });

    console.log("Call is going to ", roomSocketId);
    setMyVideo(stream);
  }, [roomSocketId, socket]);

  //

  const handleIncomingCall = useCallback(
    async (data) => {
      const { from, offer } = data;

      // now connect him with this
      setRoomSocketId(from);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setMyVideo(stream);

      console.log("Incoming call from ", from);
      const ans = await peer.createAnswer(offer);
      socket.emit(EVENTS.ACCEPTED_CALL, { to: from, ans });
    },
    [socket]
  );

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setAnswerToRemote(ans);
      console.log("Call accepted");
      console.log("Streams ", myVideo);
    },
    [socket]
  );

  useEffect(() => {
    // events
    socket.on(EVENTS.USER_JOINED, notifyRoomUserConnected);
    socket.on(EVENTS.INCOMING_CALL_USER, handleIncomingCall);
    socket.on(EVENTS.ACCEPTED_CALL, handleCallAccepted);

    // off event
    return () => {
      socket.off(EVENTS.USER_JOINED, notifyRoomUserConnected);
      socket.off(EVENTS.INCOMING_CALL_USER, handleIncomingCall);
      socket.off(EVENTS.ACCEPTED_CALL, handleCallAccepted);
    };
  });

  return (
    <div className={styles.roomlist}>
      <h1>Room</h1>
      <h4>{roomSocketId ? "Connected" : "No one in room"}</h4>
      <div className={styles.roomMember}>
        {myVideo && (
          <>
            <h3>My Stream</h3>
            <ReactPlayer
              muted
              playing
              height="300px"
              width="300px"
              url={myVideo}
            />
          </>
        )}
        <button onClick={handleCall} className={styles.btn}>
          Call
        </button>
      </div>
    </div>
  );
};

export default Room;
