import React from "react";
import PropTypes from "prop-types";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message;
