import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/Dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <Link to={path}>{props.name}</Link>
    </div>
  );
};

DialogItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired
};

export default DialogItem;
