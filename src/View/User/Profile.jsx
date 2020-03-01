import React, { Component } from "react";
import config from "../../Config/config";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
  }

  async componentDidMount() {
    let authToken = localStorage.getItem("Token");
    try {
      await fetch(config.apiUrl.profile, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken
        }
      })
        .then(blog => blog.json())
        .then(blog => {
          this.setState({
            ...this.state,
            blog
          });
        });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { blog } = this.state;
    return (
      <div className="profile">
        <section id="fact1" class=" text-white">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <h1 class="display-4 text-white">
                  User{" "}
                  <strong style={{ color: "orange" }}>
                    {window.localStorage.getItem("Name")}
                  </strong>{" "}
                  Profile View
                </h1>
              </div>
            </div>
          </div>
        </section>

        <div
          className="container box1"
          style={{ marginTop: "10px", maxWidth: "800px" }}
        >
          <h1 className="text-center">
            Your Profile Details: {blog.first_name} {blog.last_name}
          </h1>
          <hr></hr>
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="edit_form">
              {/* <div class="file btn btn-lg col-sm-12 ">
              <img
                src={
                  this.state.image
                    ? `${this.state.image}`
                    : "https://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png"
                }
                alt="Profile"
                style={{ borderRadius: "50%", height: "100px", width: "100px" }}
              />
              <input
                type="file"
                onChange={this.ImageChange.bind(this)}
                name="image"
                className="file-1"
                defaultValue={this.state.file}
              />
            </div> */}
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="username">Username </label>
                    <input
                      type="text"
                      name="username"
                      value={blog.username}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="username">Email </label>
                    <input
                      type="text"
                      name="email"
                      value={blog.email}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="username">First Name </label>
                    <input
                      type="text"
                      name="first_name"
                      value={blog.first_name}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Facebook Url </label>
                    <input
                      type="url"
                      name="facebook_url"
                      value={blog.facebook_url}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="username">Portfolio Url </label>
                    <input
                      type="url"
                      name="website"
                      value={blog.website}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Location </label>
                    <input
                      type="text"
                      name="location"
                      value={blog.location}
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Anothr cols section start */}
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="username">Last Name </label>
                    <input
                      type="text"
                      name="last_name"
                      value={blog.last_name}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Github Url </label>
                    <input
                      type="url"
                      name="github_url"
                      value={blog.github_url}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Youtube Url </label>
                    <input
                      type="url"
                      name="youtubue_url"
                      value={blog.youtubue_url}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="body">AboutSelf</label>
                    <textarea
                      className="form-control"
                      value={blog.bio}
                      name="bio"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

             <center>
              <a
              href="/edit/profile/"
                className="btn btn-black  w-50 font-weight-bolder "
                style={{ background: "orange", marginBottom: "30px" }}
              >
                {" "}
                Edit Profile
              </a>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
