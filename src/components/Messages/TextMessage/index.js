import React from "react";
import Linkify from "react-linkify";
import "./index.scss";

export const TextMessage = ({ data }) => {
  return (
    <div className="message-text">
      {<Linkify properties={{ target: "_blank" }}>{data.text}</Linkify>}
    </div>
  );
};
