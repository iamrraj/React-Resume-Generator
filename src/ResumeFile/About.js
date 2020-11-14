import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  // componentDidMount() {
  //   const google = (window.google = window.google ? window.google : {});
  //   this.autocomplete = new google.maps.places.Autocomplete(
  //     this.autocompleteInput.current,
  //     { types: ["geocode"] }
  //   );

  //   this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  // }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }

  render() {
    const { values } = this.props;
    return (
      <span>
        {localStorage.getItem("Total") > 2 &&
        localStorage.getItem("Status") === true ? (
          <section
            id="fact1"
            class=" text-white"
            style={{ position: "absolute", top: "40%", zIndex: "-99999" }}
          >
            <div class="container">
              <div class="row text-center">
                <div class="col-md-12">
                  <h3 class="display-4 text-white">
                    Sorry{" "}
                    <strong style={{ color: "orange" }}>
                      {window.localStorage.getItem("Name")}
                    </strong>{" "}
                    you can not create more than 3 resumes at one login if you
                    want to more contact to admin
                  </h3>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div id="Main_section" style={{ paddingBottom: "30px" }}>
            <h1>Personal Details </h1>

            <form>
              <div className="row">
                <div class="file btn btn-lg  col-md-12">
                  <div className="box">
                    <img
                      src={
                        values.photo
                          ? `${values.photo}`
                          : "https://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png"
                      }
                      alt="Profile"
                      style={{
                        borderRadius: "50%",
                        height: "100px",
                        width: "100px",
                      }}
                    />
                    <input
                      type="file"
                      onChange={this.props.image}
                      name="photo"
                      className="file-1"
                    />
                  </div>
                </div>
              </div>
              <div className="box1">
                <div className="row" style={{ marginTop: "20px" }}>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        Name <strong style={{ color: "red" }}>*</strong>
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="name"
                          onChange={this.props.handleChange}
                          className="form-control"
                          required
                          defaultValue={values.name}
                        />
                      </div>
                    </div>

                    {/* THis is for github link */}
                    <div className="form-group">
                      <label htmlFor="location" className="label">
                        Loaction
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-map-marker"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="location"
                          // ref={this.autocompleteInput}
                          id="autocomplete"
                          onChange={this.props.handleChange}
                          className="form-control"
                          defaultValue={values.location}
                        />
                      </div>
                    </div>

                    {/* THis is for github link */}
                    <div className="form-group">
                      <label htmlFor="github" className="label">
                        Github
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fab fa-github"></i>
                          </span>
                        </div>
                        <input
                          type="link"
                          name="github"
                          onChange={this.props.handleChange}
                          className="form-control"
                          defaultValue={values.github}
                        />
                      </div>
                    </div>

                    {/* THis is for github link */}
                    <div className="form-group">
                      <label htmlFor="linkedin" className="label">
                        Linkedin
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fab fa-linkedin"></i>
                          </span>
                        </div>
                        <input
                          type="link"
                          name="linkedin"
                          onChange={this.props.handleChange}
                          className="form-control"
                          defaultValue={values.linkedin}
                        />
                      </div>
                    </div>
                  </div>

                  {/* THis is Another Col section */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="Email" className="label">
                        Email <strong style={{ color: "red" }}>*</strong>
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            @
                          </span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          onChange={this.props.handleChange}
                          className="form-control"
                          defaultValue={values.email}
                          required
                        />
                      </div>
                    </div>

                    {/* This is For Phone Number */}
                    <div className="form-group">
                      <label htmlFor="Phone" className="label">
                        Phone Number <strong style={{ color: "red" }}>*</strong>
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-phone"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="phone"
                          onChange={this.props.handleChange}
                          className="form-control"
                          defaultValue={values.phone}
                          required
                        />
                      </div>
                    </div>

                    {/* This is For Phone Number */}
                    <div className="form-group">
                      <label htmlFor="Phone" className="label">
                        Website
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-globe"></i>
                          </span>
                        </div>
                        <input
                          type="link"
                          onChange={this.props.handleChange}
                          name="web"
                          className="form-control"
                          defaultValue={values.web}
                        />
                      </div>
                    </div>

                    {/* THis is for Skype link */}
                    <div className="form-group">
                      <label htmlFor="skype" className="label">
                        Skype
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fab fa-skype"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          onChange={this.props.handleChange}
                          name="skype"
                          className="form-control"
                          defaultValue={values.skype}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="about" className="label">
                    About Yourself <strong style={{ color: "red" }}>*</strong>
                  </label>

                  <textarea
                    className="form-control"
                    name="about"
                    rows={3}
                    defaultValue={values.about}
                    onChange={this.props.handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <center>
                <button
                  onClick={this.saveAndContinue}
                  className="btn btn-success btn-block"
                  style={{ marginTop: "10px", height: "45px" }}
                >
                  Save And Continue{" "}
                </button>
              </center>
            </form>
          </div>
        )}
      </span>
    );
  }
}

export default About;
