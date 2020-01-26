import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainForm from "./ResumeFile/MainForm";
import A4 from "./ResumeFile/A4";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={MainForm} />
            <Route path="/a4" exact component={A4} />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
