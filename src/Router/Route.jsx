import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  MainForm,
  SignUp,
  Home,
  Header,
  ForgetPassword,
  ResetPassword,
  Auth,
  ResumeList,
  ViewResume,
  ChangePassword,
} from "./Index";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(innerProps) =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const WithoutTokenRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(innerProps) =>
        localStorage.getItem("Token") ? (
          <Redirect
            to={{
              pathname: "/home/",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...innerProps} />
        )
      }
    />
  );
};

const ResetPasswordTokenRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(innerProps) =>
        new URLSearchParams(window.location.search).get("token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header loggedIn={localStorage.getItem("Token") != null} />
        <Switch>
          <PrivateRoute path="/create/resume/" component={MainForm} />
          <PrivateRoute path="/home/" exact component={Home} />
          <PrivateRoute path="/user/view/resume/" component={ResumeList} />
          <PrivateRoute path="/resume/detail/:pk/" component={ViewResume} />
          <PrivateRoute path="/change/password/" component={ChangePassword} />
          {/* <PrivateRoute path="/a4/" component={A4} />
            <PrivateRoute path="/one/" component={One} />
            <PrivateRoute path="/list/detail/:name" exact component={Details} />
            <PrivateRoute path="/user/profile/:name" component={Profile} />
            <PrivateRoute path="/edit/profile/:name" component={EditProfile} /> */}

          <WithoutTokenRoute path="/register/" component={SignUp} />
          <WithoutTokenRoute
            path="/forget/password/"
            component={ForgetPassword}
          />
          <ResetPasswordTokenRoute
            path="/reset/password/"
            component={ResetPassword}
          />
          <WithoutTokenRoute path="/" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
