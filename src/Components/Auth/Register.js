import React, { Component } from "react";
import config from "../../Config/config";
import Swal from "sweetalert2";
import axios from "axios";
import ReactDOM from "react-dom";
// import Cookies from "universal-cookie";
import { Overlay, Popover } from "react-bootstrap";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      first_name: "",
      showPassword: false,
      errors: [],
      errorEmail: false,
      errorUsername: false,
      errorPasswordLenght: false,
      errorPasswordMatch: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  validate(password, email) {
    const errors = [];

    if (email.length < 5) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }

    if (email.indexOf(".") === -1) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }

    if (password.length < 6) {
      this.setState({ errorPasswordLenght: true });
    } else {
      this.setState({ errorPasswordLenght: false });
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errorPasswordMatch: true });
    } else {
      this.setState({ errorPasswordMatch: false });
    }

    return errors;
  }

  async handleSubmit(e) {
    e.preventDefault();
    let authToken = localStorage.getItem("Token");
    const email = this.state.email;
    const password = this.state.password;

    await this.validate(email, password);

    const confirmPassword = this.state.confirmPassword;
    //const errorEmail = this.state.errorEmail;
    const errorPasswordLenght = this.state.errorPasswordLenght;
    const errorPasswordMatch = this.state.errorPasswordMatch;

    if (password && confirmPassword) {
      if (
        // errorEmail === false &&
        errorPasswordLenght === false &&
        errorPasswordMatch === false
      ) {
        const data = {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name
        };

        axios({
          method: "post",
          url: config.apiUrl.register,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

            Authorization: "Bearer " + JSON.parse(authToken)
          },
          data
        })
          .then(res => {
            this.setState({
              username: "",
              email: "",
              password: "",
              first_name: ""
            });
            this.props.history.push("/");
            Swal.fire({
              title: "Registered",
              icon: "success",
              text: "You registered successfully !",
              showConfirmButton: false,
              timer: 2000
            });
          })
          .catch(err => {
            console.log(err);
            Swal.fire({
              title: "Registered",
              icon: "error",
              text: "Error while register!",
              timer: 2000
            });
          });
      } else {
        console.log("TODO Swal, Check errors");
      }
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <header>
        <main class="container flex flex-column items-center justify-center signup">
          <form
            class="flex signup-form"
            onSubmit={this.handleSubmit}
            autoComplete="off"
            style={{ paddingLeft: "0px" }}
          >
            <aside class="flex flex-column justify-center items-center">
              <h1>hello, friend!</h1>
              <h2>
                by creating your account your are agree to our privacy and
                policy.
              </h2>
              <button type="button">
                {" "}
                <a href="/" className="text-white">
                  LOGIN
                </a>
              </button>
            </aside>
            <div class="content flex flex-column justify-center items-center">
              <div class="text">
                <h1>create account</h1>
                {/* <div class="icon flex justify-center items-center">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-google"></i>
                </div>
                <span>or use social media to signup</span> */}
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="first_name"
                  autoComplete="off"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                  ref="first_name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter your username"
                  ref="username"
                  name="username"
                  autoComplete="off"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="someone@email.com"
                  ref="email"
                  name="email"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                {/* <span
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
                </span> */}
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  ref="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </div>

              <div class="form-group">
                <input type="submit" value="SIGNUP" />
              </div>
            </div>
            <Overlay
              show={this.state.errorEmail}
              target={() => {
                return ReactDOM.findDOMNode(this.refs.email);
              }}
              placement="right"
            >
              <Popover id="popover-email" title="Niepoprawny e-mail">
                Error Email address Please check it
              </Popover>
            </Overlay>

            {/* <Overlay
                  show={this.state.errorUsername}
                  target={() => {
                    return ReactDOM.findDOMNode(this.refs.username);
                  }}
                  placement="right"
                >
                  <Popover id="popover-email" title="Niepoprawny e-mail">
                    Username lenght is must be 3 or more
                  </Popover>
                </Overlay> */}

            <Overlay
              show={this.state.errorPasswordLenght}
              target={() => {
                return ReactDOM.findDOMNode(this.refs.password);
              }}
              placement="right"
            >
              <Popover id="popover-password" title="Hasło za krótkie">
                Password length must be 6 or more
              </Popover>
            </Overlay>

            <Overlay
              show={this.state.errorPasswordMatch}
              target={() => {
                return ReactDOM.findDOMNode(this.refs.confirmPassword);
              }}
              placement="right"
            >
              <Popover id="popover-confirmPassword" title="Hasła nie pasują">
                Password and confirm password did not mactch
              </Popover>
            </Overlay>
          </form>
        </main>
      </header>
    );
  }
}

export default Register;
