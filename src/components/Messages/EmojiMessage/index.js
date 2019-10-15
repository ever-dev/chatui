import React from "react";
import "./index.scss";

export const EmojiMessage = ({ data }) => {
  return <div className="message-emoji">{data.e}</div>;
};
