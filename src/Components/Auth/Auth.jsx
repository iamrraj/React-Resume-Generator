import React, { useState } from "react";
// import ls from "local-storage";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../../Config/config";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// import Cookies from "universal-cookie";

const CLIENT_ID = "Resume-Builder";
const GRANT_TYPE = "password";

function Auth() {
  const [password, setPassword] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading",
      type: "warning",
      showCancelButton: false,
      showConfirmButton: false,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    axios({
      method: "post",
      url: config.apiUrl.login,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      data: `grant_type=${GRANT_TYPE}&username=${password.username}&password=${password.password}&client_id=${CLIENT_ID}`,
    })
      .then((response) => {
        localStorage.setItem("username", password.username);
        localStorage.setItem("Token", response.data.access_token);

        Swal.fire({
          title: "Log in",
          icon: "success",
          text: "You Successfully loggedin",
          showConfirmButton: false,
          timer: 3000,
        });
        setTimeout(function () {
          window.location.href = "/feed/";
        }, 2000);
      })
      .catch((reject) => {
        console.log(reject);
        Swal.fire({
          title: "Login Error",
          icon: "error",
          text: reject.response.data.message,
          timer: 2000,
        });
      });
  };

  return (
    <div className="container hip1">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image">
                  <img
                    src="https://wuchess.com/wp-content/uploads/2017/05/username-and-password.jpg"
                    alt="Forget Password"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col-lg-6 don_sm">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 hee forget_name text-gray-900 mb-2">
                        Login
                      </h1>
                      <p className="mb-4 h5 " style={{ marginTop: "20px" }}>
                        Welcome to Resume Builder Login page
                      </p>
                    </div>
                    <form
                      className="user "
                      onSubmit={handleSubmit}
                      autoComplete="off"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Username"
                          value={password.username}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="form-control password"
                          placeholder="New Password"
                          value={password.password}
                          onChange={handleChange}
                        />
                        <span
                          className="full"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <Visibility className="opp" />
                          ) : (
                            <VisibilityOff className="opp" />
                          )}
                        </span>
                      </div>

                      <button
                        type="submit"
                        value="Login"
                        className="btn btn-login btn-block "
                      >
                        Login
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a
                        className="small h5 float-left"
                        href="/forget/password/"
                        style={{ color: "#b71c1c", opacity: "0.8" }}
                      >
                        Forget Password ?
                      </a>
                      <a
                        className="small h5 float-right"
                        href="/register/"
                        style={{ color: "#b71c1c", opacity: "0.8" }}
                      >
                        <span className="text-dark">New User ? </span> Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
