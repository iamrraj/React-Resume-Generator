import React from "react";
import "./SideNav.css";
// import User from "../User";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";
import { getUser } from "../../Service/Auth";
import LogoutPopup from "../../Password/LogoutPop";
const cookies = new Cookies();

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      status: [],
      user: [],
    };
  }

  // componentDidMount() {
  //   if (cookies.get("Token") === null || cookies.get("Token") === undefined) {

  //     localStorage.clear();
  //     this.props.history.push("/");
  //     window.location.reload(1);

  //     // setTimeout(function() {
  //     //   window.location.reload(1);
  //     // }, 1000);
  //   } else {
  //     //console.log(cookies.get("Token"));
  //   }
  // }

  async componentDidMount() {
    let username = window.localStorage.getItem("username");
    getUser(username).then((data) => {
      this.setState({ username: data, status: data.is_superuser });
    });
  }

  onLogout() {
    window.localStorage.clear();
    cookies.remove("Token");
    window.location.href = "/";
    window.location.reload(1);
  }

  openNavClick = (e) => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = (e) => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true,
    });

    document.addEventListener("keydown", this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false,
    });

    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = (e) => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };

  render() {
    const { showNav, status } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "270px" : "0" };
    console.log(status);
    return (
      <React.Fragment>
        <LogoutPopup />
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
                width: "50px",
              }}
            />
            &nbsp;
            <strong>{window.localStorage.getItem("username")}</strong>
          </p>
          <hr></hr>
          <a href="/user/view/resume/"></a>
          <a href="/user/view/resume/">
            <span>
              <i className="fa fa-desktop"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Dashboard
          </a>
          <a href={`/create/resume/`}>
            <span>
              <i className="fa fa-plus"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Create Resume
          </a>

          <a href={`/user/${window.localStorage.getItem("username")}/`}>
            <span>
              <i className="fa fa-eye"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; View Profile
          </a>
          <a href={`/edit/profile/${window.localStorage.getItem("username")}`}>
            <span>
              <i className="fa fa-pen"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Edit Profile
          </a>

          <a href="/feed/">
            <span>
              <i className="fa fa-eye"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Feed
          </a>

          <a href={`/change/password/`}>
            <span>
              <i className="fa fa-key"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Change Password
          </a>

          {status === true && (
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

              <a href="/blog/list/">
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
