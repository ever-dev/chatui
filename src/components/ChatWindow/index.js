import React from "react";
import { connect } from "react-redux";
import { Header, Info, MessageList, UserInput } from "./components";
import { CssBaseline } from "@material-ui/core";
import { toggleChatWindow, sendAction } from "../../redux/actions";
import "./index.scss";

const mapStateToProps = state => ({
  messages: state.messages
});

export const ChatWindow = connect(
  mapStateToProps,
  { toggleChatWindow, sendAction }
)(({ messages, toggleChatWindow, sendAction }) => {
  return (
    <div className="chat-window">
      <Header closeWindow={() => toggleChatWindow(false)}></Header>
      <CssBaseline />
      <Info></Info>
      <MessageList className="message-list" messages={messages}></MessageList>
      <UserInput sendAction={sendAction}></UserInput>
    </div>
  );
});
