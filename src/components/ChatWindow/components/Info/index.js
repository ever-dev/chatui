import React from "react";
import { Avatar, Toolbar, IconButton, Typography } from "@material-ui/core";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

import "./index.scss";

export const Info = ({ name = "Demo", title = "title" }) => (
  <Toolbar className="agent-info">
    <Avatar />
    <div className="info">
      <Typography color="inherit" noWrap>
        {name}
      </Typography>
      <Typography color="inherit" noWrap>
        {title}
      </Typography>
    </div>
    <IconButton>
      <ThumbUp />
    </IconButton>
    <IconButton>
      <ThumbDown />
    </IconButton>
  </Toolbar>
);
