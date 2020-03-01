import React, { Component } from "react";
import axios from "axios";
import config from "../../Config/config";
import Swal from "sweetalert2";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // image: null,
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      facebook_url: "",
      website: "",
      location: "",
      github_url: "",
      youtubue_url: "",
      bio: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let authToken = localStorage.getItem("Token");
    axios
      .get(config.apiUrl.profile, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken
        }
      })
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          // image: res.data.image,
          username: res.data.username,
          email: res.data.email,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          facebook_url: res.data.facebook_url,
          website: res.data.website,
          location: res.data.location,
          github_url: res.data.github_url,
          youtubue_url: res.data.youtubue_url,
          bio: res.data.bio
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let authToken = localStorage.getItem("Token");

    const data = {
      //image: this.state.image,
      username: this.state.username,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      facebook_url: this.state.facebook_url,
      website: this.state.website,
      location: this.state.location,
      github_url: this.state.github_url,
      youtubue_url: this.state.youtubue_url,
      bio: this.state.bio
    };

    axios({
      method: "put",
      url: `https://softbike.herokuapp.com/api/1/profilee/`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken
      },
      data
    })
      .then(res => {
        Swal.fire({
          title: "Data Edited",
          icon: "success",
          text: "Data Edited SuccessFully !",
          showConfirmButton: false,
          timer: 2000
        });
        this.props.history.push("/user/profile/");
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Data Edited",
          icon: "error",
          text: "Data Edited Error Please Try Again!",
          showConfirmButton: false,
          timer: 4000
        });
      });
  }

  async onChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  ImageChange(event) {
    this.setState({
      image: URL.createObjectURL(event.target.files[0])
    });
  }
  render() {
    return (
      <div>
        <section id="fact1" class=" text-white">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <h1 class="display-4 text-white">
                  User{" "}
                  <strong style={{ color: "orange" }}>
                    {window.localStorage.getItem("Name")}
                  </strong>{" "}
                  Profile Edit View
                </h1>
              </div>
            </div>
          </div>
        </section>
        <div
          className="container box1"
          style={{ marginTop: "100px", maxWidth: "800px" }}
        >
          <h1 className="text-center">
            Edit profile <strong>{window.localStorage.getItem("Name")}</strong>{" "}
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
                      value={this.state.username}
                      onChange={this.onChange.bind(this)}
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
                      value={this.state.email}
                      onChange={this.onChange.bind(this)}
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
                      value={this.state.first_name}
                      className="form-control"
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Facebook Url </label>
                    <input
                      type="url"
                      name="facebook_url"
                      value={this.state.facebook_url}
                      className="form-control"
                      onChange={this.onChange.bind(this)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="username">Portfolio Url </label>
                    <input
                      type="url"
                      name="website"
                      value={this.state.website}
                      onChange={this.onChange.bind(this)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Location </label>
                    <input
                      type="text"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange.bind(this)}
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
                      value={this.state.last_name}
                      className="form-control"
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Github Url </label>
                    <input
                      type="url"
                      name="github_url"
                      value={this.state.github_url}
                      className="form-control"
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Youtube Url </label>
                    <input
                      type="url"
                      name="youtubue_url"
                      value={this.state.youtubue_url}
                      className="form-control"
                      onChange={this.onChange.bind(this)}
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
                      value={this.state.bio}
                      onChange={this.onChange.bind(this)}
                      name="bio"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <center>
              <button
                className="btn btn-black  w-50 font-weight-bolder "
                style={{ background: "orange", marginBottom: "30px" }}
              >
                {" "}
                Save Edit
              </button>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
