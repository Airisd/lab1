import React from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Link to="/Profile">Profile</Link>
      </div>
      <div className={"${s.item} ${s.active}"}>
        <Link to="/Dialogs">Messages</Link>
      </div>
      <div className={s.item}>
        <Link to="/News">News</Link>
      </div>
      <div className={s.item}>
        <Link to="Music">Music</Link>
      </div>
      <div className={s.item}>
        <Link to="Setting">Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
