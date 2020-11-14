import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../../Config/config";
import PasswordStrength from "../../Password/Passsword/PasswordStrength";

function SignUp() {
  const [password, setPassword] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
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

    const re = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);
    const isOk = re.test(password.password);

    if (isOk) {
      axios({
        method: "post",
        url: config.apiUrl.register,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        data: password,
      })
        .then((response) => {
          Swal.fire({
            title: "Registerd",
            icon: "success",
            text: `Successfully Register Please check your email "${password.email} "to confirm account !!`,
            showConfirmButton: false,
            timer: 3000,
          });
          setTimeout(function () {
            window.location.href = "/";
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Registerd",
            icon: "error",
            text: err.response.data["message"]
              ? err.response.data["message"]
              : "Seems like this username is already in use",
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
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image">
                  <img
                    src="https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2017/04/lock-windows-user.jpg"
                    alt="Forget Password"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col-lg-6 don_sm">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 hee forget_name text-gray-900 mb-2">
                        Register
                      </h1>
                      <p className="mb-4 h5 " style={{ marginTop: "20px" }}>
                        Welcome to Resume Builder Register page
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
                          type="email"
                          name="email"
                          className="form-control password"
                          placeholder="someone@email.com"
                          value={password.email}
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

                        <PasswordStrength password={password.password} />
                      </div>

                      <div class="form-group">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control password"
                          placeholder="Confirm Password"
                          value={password.confirmPassword}
                          onChange={handleChange}
                        />

                        {password.password !== password.confirmPassword ? (
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
                        )}
                      </div>

                      <button
                        type="submit"
                        value="Login"
                        disabled={
                          password.password !== password.confirmPassword
                        }
                        className="btn btn-login btn-block "
                      >
                        REGISTER
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a
                        className="small h5"
                        href="/"
                        style={{ color: "#b71c1c", opacity: "0.8" }}
                      >
                        Login Page
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

export default SignUp;
