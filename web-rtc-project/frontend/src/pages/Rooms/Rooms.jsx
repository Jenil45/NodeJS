import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import RoomCard from "../../components/Room/Card/RoomCard";
import AddRoomModal from "../../components/Room/AddRoomModal/AddRoomModal";
import { getAllRooms } from "../../http";
// data
// const rooms = [
//   {
//     id: 1,
//     topic: "Which framework is best ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Jenil Thakor",
//         profile: "/images/jenil.jpeg",
//       },
//       {
//         id: 2,
//         name: "Artist 1",
//         profile: "/images/artist1.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 2,
//     topic: "Which backend should use ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Jenil Thakor",
//         profile: "/images/jenil.jpeg",
//       },
//       {
//         id: 3,
//         name: "Artist 2",
//         profile: "/images/artist2.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 3,
//     topic: "Which framework is best ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Jenil Thakor",
//         profile: "/images/jenil.jpeg",
//       },
//       {
//         id: 2,
//         name: "Artist 1",
//         profile: "/images/artist1.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 4,
//     topic: "Which framework is best ?",
//     speakers: [
//       {
//         id: 1,
//         name: "Jenil Thakor",
//         profile: "/images/jenil.jpeg",
//       },
//       {
//         id: 2,
//         name: "Artist 1",
//         profile: "/images/artist1.jpeg",
//       },
//     ],
//     totalPeople: 40,
//   },
// ];

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  // fetching the data
  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      console.log(data);
      setRooms(data);
    };

    fetchRooms();
  }, []);

  function openModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="container">
        <div className={styles.container1}>
          <div className={styles.left}>
            <div className={styles.heading}>Rooms</div>
            <div className={styles.search}>
              <img src="/images/search-icon.png" alt="search" />
              <input
                type="text"
                placeholder="Search here..."
                className={styles.searchInput}
              />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModal} className={styles.btn}>
              Create Room
            </button>
          </div>
        </div>

        <div className={styles.roomlist}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      {showModal && <AddRoomModal onClick={openModal} />}
    </>
  );
};

export default Rooms;
