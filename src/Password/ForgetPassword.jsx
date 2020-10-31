import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../Config/config";
import "./Forget.css";

function ForgetPassword() {
  const [password, setPassword] = useState({
    email: "",
  });

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

      axios({
        method: "post",
        url: config.apiUrl.forgetPassword,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        data: password,
      })
        .then((response) => {
          Swal.fire({
            title: "Email Sent",
            icon: "success",
            text: `We have succesfully sent an email to ${password.email}`,
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
            text: err.response.data["message"],
            timer: 2000,
          });
        });
    } 
  const mailformat = RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  const isEnabled = password.email.match(mailformat);
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
                    src="https://images.techhive.com/images/article/2016/01/password_enter-100637310-primary.idge.jpg"
                    alt="Forget Password"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div class="col-lg-6 don_sm">
                  <div class="p-5">
                    <div class="text-center">
                      <h1
                        class="h4 hee forget_name text-gray-900 mb-2"
                       
                      >
                        Forget Password ?
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
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email id"
                          value={password.email}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        type="submit"
                        value="Login"
                        disabled={!isEnabled}
                        className="btn btn-login btn-block "
                      >
                        Send email
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a
                        class="small"
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

export default ForgetPassword;
