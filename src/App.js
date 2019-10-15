import React from "react";
import { connect } from "react-redux";

import { SignIn } from "./pages/signin";
import { Home } from "./pages/home";

function App({ isLoggedIn }) {
  return <div className="App">{!isLoggedIn ? <SignIn /> : <Home />}</div>;
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(App);
