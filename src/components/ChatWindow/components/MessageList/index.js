import React from 'react';
import { Message } from "../../../Messages";
import "./index.scss";

export const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map((message, i) => {
      return <Message message={message} key={i} />;
    })}
  </div>
);
