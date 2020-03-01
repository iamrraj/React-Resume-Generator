import React from "react";
import "./SideNav.css";
// import User from "../User";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";
import config from "../../Config/config";
// import ls from "local-storage";

const cookies = new Cookies();
// import header from "./../../img/Just/header.png";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      status: [],
      user: []
    };
  }

  // componentDidMount() {
  //   if (cookies.get("Token") === null || cookies.get("Token") === undefined) {
  //     // check if not logged in and get the value from the set cookie
  //     localStorage.clear();
  //     this.props.history.push("/");
  //     //window.location.reload(1);
  //     // setTimeout(function() {
  //     //   window.location.reload(1);
  //     // }, 1000);
  //   } else {
  //     //console.log(cookies.get("Token"));
  //   }
  // }

  async componentDidMount() {
    let authToken = window.localStorage.getItem("Token");
    Promise.all([
      fetch(config.apiUrl.status, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken
        }
      })
        .then(status => status.json())
        .then(status => {
          window.localStorage.setItem("Status", status.is_superuser);
          this.setState({
            ...this.state,
            status
          });
        }),
      fetch(config.apiUrl.me, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken
        }
      })
        .then(user => user.json())
        .then(user => {
          window.localStorage.setItem("Name", user.first_name);
          this.setState({
            user
          });
        })
    ]);
  }

  onLogout() {
    // e.preventDefault();
    cookies.remove("Token", { path: "/" });
    window.localStorage.clear();
    window.location.href = "/";
    // window.localStorage.clear();

    window.location.reload(1);
  }

  openNavClick = e => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = e => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true
    });

    document.addEventListener("keydown", this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false
    });

    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };

  render() {
    const { showNav, status } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "270px" : "0" };

    return (
      <React.Fragment>
        <span
          onClick={this.openNavClick}
          class="open-nav text-white"
          style={{ marginTop: "1px" }}
        >
          &#9776;
        </span>
        <div
          onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />

        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <a href="# " onClick={this.closeNavClick} class="close-nav">
            &times;
          </a>
          <p
            className="navbar-brand text-dark text-capitalize "
            style={{ paddingLeft: "30px", marginBottom: "-10px" }}
          >
            <img
              src="https://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png"
              alt="Profile"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px"
              }}
            />
            &nbsp;
            <strong>{window.localStorage.getItem("Name")}</strong>
          </p>
          <hr></hr>
          <a href="/user/Dashboard/">
            <span>
              <i className="fa fa-desktop"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Dashboard
          </a>
          <a href={`/home/${window.localStorage.getItem("Name")}`}>
            <span>
              <i className="fa fa-plus"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Create Resume
          </a>

          <a href={`/user/view/resume/${window.localStorage.getItem("Name")}`}>
            <span>
              <i className="fa fa-eye"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Resume List
          </a>
          <a href={`/user/profile/${window.localStorage.getItem("Name")}`}>
            <span>
              <i className="fa fa-eye"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; View Profile
          </a>
          <a href={`/edit/profile/${window.localStorage.getItem("Name")}`}>
            <span>
              <i className="fa fa-pen"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Edit Profile
          </a>

          {status.is_superuser === true && (
            <span>
              <a href="/admin/userlist/">
                <span>
                  <i className="fa fa-tasks"></i>{" "}
                </span>{" "}
                &nbsp; &nbsp; User List
              </a>

              <a href="/user/editprofile/">
                <span>
                  <i className="fa fa-pen"></i>{" "}
                </span>{" "}
                &nbsp; &nbsp; Email List
              </a>

              <a href="/admin/bloglist/">
                <span>
                  <i className="fa fa-pen"></i>{" "}
                </span>{" "}
                &nbsp; &nbsp; All Blog
              </a>
            </span>
          )}

          <a
            className="dropdown-item  js-scroll-trigger "
            style={{ color: "#212226" }}
            href="# "
            onClick={this.onLogout}
          >
            <span>
              <i className="fa fa-sign-out"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Logout
          </a>

          <div className="row">
            <div className="col-sm-2">
              {" "}
              <a href=" " style={{ marginRight: "14px" }}>
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="col-sm-2">
              <a href=" " style={{ marginRight: "14px" }}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="col-sm-2">
              <a href=" " style={{ marginRight: "14px" }}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="col-sm-2">
              {" "}
              <a href=" ">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SideBar);
