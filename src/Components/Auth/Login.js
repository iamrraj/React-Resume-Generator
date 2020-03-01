import React, { Component } from "react";
import config from "../../Config/config";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "universal-cookie";
import "./style.css";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";

var CLIENT_ID = "Resume-Builder";
var GRANT_TYPE = "password";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

    console.log(this.state);
  }
  componentDidMount() {
    this.redirect();
  }
  handleSubmit(e) {
    e.preventDefault();
    let authToken = localStorage.getItem("Token");
    axios({
      method: "post",
      url: config.apiUrl.login,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + JSON.parse(authToken)
      },

      data: `grant_type=${GRANT_TYPE}&username=${this.state.username}&password=${this.state.password}&client_id=${CLIENT_ID}`
    })
      .then(response => {
        this.cookies = new Cookies();
        window.localStorage.setItem("Token", response.data["access_token"]);
        this.cookies.set("Token", response.data["access_token"], {
          path: "/",
          maxAge: response.data["expires_in"]
        });
        window.localStorage.setItem(
          "RefreshToken",
          response.data["refresh_token"]
        );
        window.localStorage.setItem("Toke Type", response.data["token_type"]);
        window.localStorage.setItem("Token Scope", response.data["scope"]);
        window.localStorage.setItem("Expire in", response.data["expires_in"]);

        Swal.fire({
          title: "Log in",
          icon: "success",
          text: "You Successfully loggedin",
          showConfirmButton: false,
          timer: 3000
        });
        this.redirect();
      })
      .catch(response => {
        console.log(response);
        Swal.fire({
          title: "Login Error",
          icon: "error",
          text: "Please Enter Correct Username and Password",
          timer: 2000
        });
      });
  }

  redirect() {
    if (localStorage.getItem("Token")) {
      this.props.history.push("/user/view/resume/");
      window.location.reload();
    }
  }
  render() {
    return (
      <header>
        <main class="container flex flex-column items-center justify-center login">
          <form
            class="flex justify-between login-form"
            onSubmit={this.handleSubmit}
            autoComplete="off"
            style={{ paddingRight: "0px" }}
          >
            <div class="content flex flex-column justify-center items-center">
              <div class="text flex flex-column justify-center items-center">
                <h1>user login</h1>
                {/* <div class="icon">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-google"></i>
                </div>
                <span>or use social media to signup</span> */}
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="enter your username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  name="username"
                />
              </div>

              <div class="form-group">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="**************"
                />
                <span
                  className="full float-right"
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? (
                    <p>Hide Password</p>
                  ) : (
                    <p>Show Password</p>
                  )}
                </span>
              </div>
              <div class="form-group">
                <input type="submit" value="LOGIN" />
              </div>
            </div>
            <aside class="flex flex-column justify-center items-center">
              <h1>welcome, back!</h1>
              <h2>
                by creating your account your are agree to our privacy and
                policy.
              </h2>
              <button type="button">
                <a href="/register/" className="text-white">
                  SIGNUP
                </a>
              </button>
            </aside>
          </form>
        </main>
      </header>
    );
  }
}

export default Login;
