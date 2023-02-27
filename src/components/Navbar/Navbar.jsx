import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="Music" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="Setting" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
