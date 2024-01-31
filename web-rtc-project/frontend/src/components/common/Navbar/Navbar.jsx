import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../http";
import { setAuth } from "../../../store/authSlice";

const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // inline style
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
  };

  const logoStyle = {
    color: "orange",
    marginLeft: "-5px",
  };

  async function handleLogOut() {
    try {
      const { data } = await logoutUser();
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        {/* <span>WR</span> */}
        <span>
          web <span style={logoStyle}>RTC</span>
        </span>
      </Link>
      {isAuth && (
        <div className={styles.navRight}>
          <div className={styles.profile}>
            <span>{user?.name}</span>
            <Link to="/">
              <img src={user?.profile} alt="" />
            </Link>
          </div>
          <button onClick={handleLogOut} className={styles.btn}>
            LogOut
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
