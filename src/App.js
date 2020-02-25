import React, { Component } from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainForm from "./ResumeFile/MainForm";
import A4 from "./ResumeFile/A4";
import "./App.css";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Header from "./Components/Layout/Header";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <Header loggedIn={localStorage.getItem("Token") != null} />
          <Switch>
            <PrivateRoute path="/home/" exact component={MainForm} />
            <PrivateRoute path="/a4/" exact component={A4} />
            <Route path="/register/" exact component={Register} />
            <Route path="/" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
