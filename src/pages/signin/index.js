import React, { useState } from "react";
import { connect } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { loginAction } from "../../redux/actions";
import "./index.scss";

export const SignIn = connect(
  null,
  { loginAction }
)(({ loginAction }) => {
  const [username, setUsername] = useState("");
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="login">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User Name"
            autoFocus
            onChange={e => setUsername(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={() => {
              loginAction(username);
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
});
