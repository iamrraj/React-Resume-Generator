import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../Config/config";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PasswordStrength from "./Passsword/PasswordStrength";

const authToken = localStorage.getItem("Token");
function ChangePassword() {
  const [password, setPassword] = useState({
    old_password: "",
    new_password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
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

    const re = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);
    const isOk = re.test(password.new_password);

    if (isOk) {
      axios({
        url: config.apiUrl.passwordChnage,
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
        data: password,
      })
        .then((response) => {
          Swal.fire({
            title: "Password Changed",
            icon: "success",
            text: `You have successfuly changed password`,
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(function () {
            window.location.href = "/home/";
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Registerd",
            icon: "error",
            text: err.response.data["message"],
            timer: 2000,
          });
        });
    } else {
      Swal.fire({
        title: "Password Error",
        icon: "warning",
        text:
          "Your password must contain at least one small , big letter and least one digit",
        timer: 2000,
      });
    }
  };
  return (
    <div className="container hip1">
      {/* <!-- Outer Row --> */}
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-password-image">
                  <img
                    src="https://www.mozilla.org/media/img/firefox/features/thumbnails/password-manager.945759e567a7.png"
                    alt="Forget Password"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div class="col-lg-6 don_sm">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 hee forget_name text-gray-900 mb-2">
                        Change Password ?
                      </h1>
                      <p class="mb-4 " style={{ marginTop: "20px" }}>
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
                    </div>
                    <form
                      class="user "
                      onSubmit={handleSubmit}
                      autoComplete="off"
                    >
                      <div class="form-group">
                        <input
                          type="password"
                          name="old_password"
                          className="form-control"
                          placeholder="Old Password"
                          value={password.old_password}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="new_password"
                          className="form-control password"
                          placeholder="New Password"
                          value={password.new_password}
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
                        <PasswordStrength password={password.new_password} />
                      </div>

                      <div class="form-group">
                        <input
                          type={showPassword1 ? "text" : "password"}
                          name="confirmPassword"
                          className="form-control password"
                          placeholder="Confirm Password"
                          value={password.confirmPassword}
                          onChange={handleChange}
                        />
                        <span
                          className="full"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                        >
                          {showPassword1 ? (
                            <Visibility className="opp" />
                          ) : (
                            <VisibilityOff className="opp" />
                          )}
                        </span>
                        {password.new_password !== password.confirmPassword ? (
                          password.confirmPassword.length > 1 ? (
                            <span
                              className="text-danger"
                              style={{ marginTop: "-15px" }}
                            >
                              Password did not match
                            </span>
                          ) : (
                            ""
                          )
                        ) : password.confirmPassword.length > 1 ? (
                          <span
                            className="text-success"
                            style={{ marginTop: "-55px" }}
                          >
                            Password matched
                          </span>
                        ) : (
                          ""
                        )}{" "}
                      </div>
                      <button
                        type="submit"
                        value="Login"
                        disabled={
                          password.new_password !== password.confirmPassword
                        }
                        className="btn btn-login btn-block "
                      >
                        CHANGE PASSWORD
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a
                        class="small"
                        href="/home/"
                        style={{ color: "#b71c1c", opacity: "0.8" }}
                      >
                        Main Page
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

export default ChangePassword;
