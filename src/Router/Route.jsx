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
  Profile,
  Feed,
  Blog,
  Tags,
  BlogDetail,
  EditProfile,
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
          <PrivateRoute path="/User/:username/" component={Profile} />
          <PrivateRoute path="/feed/" component={Feed} />
          <PrivateRoute path="/blog/list/" component={Blog} />
          <PrivateRoute path="/tag/list/:tag/" component={Tags} />
          <PrivateRoute path="/blog/list/user/:pk/" component={Tags} />
          <PrivateRoute path="/blog/detail/:pk/:slug/" component={BlogDetail} />
          <PrivateRoute path="/edit/profile/" component={EditProfile} />

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
