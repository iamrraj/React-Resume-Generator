import React, { Component } from "react";
import { getUser } from "../../Service/Auth";
import config from "../../Config/Config";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      walk: []
    };
  }

  async componentDidMount() {
    let authToken = localStorage.getItem("Token");
    const res = await fetch(config.apiUrl.me, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken
      }
    });
    const walk = await res.json();
    localStorage.setItem("Name", walk.first_name);
    this.setState({
      walk
    });
  }

  render() {
    const { walk } = this.state;

    return (
      <span>
        {/* {localStorage.getItem("Name")} */}
        {walk.first_name} {walk.last_name}
      </span>
    );
  }
}

export default User;
