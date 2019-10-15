import React from "react";
import { connect } from "react-redux";
import { ChatWindow } from "../ChatWindow";
import launcherIcon from "../../assets/images/logo-no-bg.svg";
import launcherIconActive from "../../assets/images/close-icon.png";
import { toggleChatWindow } from "../../redux/actions";

import "./index.scss";

const mapStateToProps = state => ({
  showChatWindow: state.showChatWindow
});

export const ChatLauncher = connect(
  mapStateToProps,
  { toggleChatWindow }
)(({ showChatWindow, toggleChatWindow }) => {
  const classList = ["launcher", showChatWindow ? "opened" : ""];
  return (
    <div className="container">
      <div
        className={classList.join(" ")}
        onClick={() => toggleChatWindow(!showChatWindow)}
      >
        <img className="open-icon" src={launcherIconActive} />
        <img className="closed-icon" src={launcherIcon} />
      </div>
      {showChatWindow && <ChatWindow />}
    </div>
  );
});
