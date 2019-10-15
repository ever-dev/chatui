import React from "react";
import { TextMessage } from "./TextMessage";
import { EmojiMessage } from "./EmojiMessage";
import { FileMessage } from "./FileMessage";
import { Avatar } from "@material-ui/core";

const _renderMessageOfType = message => {
  switch (message.type) {
    case "text":
      return <TextMessage {...message} />;
    case "emoji":
      return <EmojiMessage {...message} />;
    case "file":
      return <FileMessage {...message} />;
    default:
      console.error(
        `Attempting to load message with unsupported file type "${message.type}"`
      );
  }
};

export const Message = ({ message }) => {
  let contentClassList = [
    "content",
    message.author === "me" ? "sent" : "received"
  ];
  return (
    <div className="message">
      <div className={contentClassList.join(" ")}>
        {message.author !== "me" && <Avatar />}
        {_renderMessageOfType(message)}
      </div>
    </div>
  );
};
