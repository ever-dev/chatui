import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

import "./index.scss";

export const Header = ({ closeWindow }) => (
  <AppBar position="relative" className="header">
    <Toolbar>
      <IconButton
        edge="start"
        className="menu-btn"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap className="title">
        Chat with us!
      </Typography>
      <IconButton
        aria-label="delete"
        color="inherit"
        edge="end"
        onClick={closeWindow}
        className="close-btn"
      >
        <CloseIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);
