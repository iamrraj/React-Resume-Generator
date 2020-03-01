import React, { Component } from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainForm from "./ResumeFile/MainForm";
import A4 from "./ResumeFile/A4";
import "./App.css";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Header from "./Components/Layout/Header";
import One from "./ResumeFile/Resume/One";
import ResumeList from "./View/User/ResumeList";
import Details from "./View/User/Details";
import Profile from "./View/User/Profile";
import EditProfile from "./View/User/EditProfile";
import ViewResume from "./View/User/ViewResume";
import Home from "./View/Home";

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
            <PrivateRoute path="/home/:name" exact component={MainForm} />
            <PrivateRoute path="/index/" exact component={Home} />
            <PrivateRoute path="/a4/" component={A4} />
            <PrivateRoute path="/one/" component={One} />
            {/* <PrivateRoute path="/list/" component={ResumeList} /> */}
            <PrivateRoute path="/list/detail/:name" exact component={Details} />
            <PrivateRoute path="/user/profile/:name" component={Profile} />
            <PrivateRoute path="/edit/profile/:name" component={EditProfile} />
            <PrivateRoute path="/user/view/resume/" component={ResumeList} />
            <PrivateRoute path="/resume/detail/:pk" component={ViewResume} />

            <Route path="/register/" exact component={Register} />
            <Route path="/" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
