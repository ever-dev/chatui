import React, { Component } from "react";
import { ChatLauncher } from "../../components/ChatLauncher";

import "./index.scss";

export class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return <ChatLauncher></ChatLauncher>;
  }
}
