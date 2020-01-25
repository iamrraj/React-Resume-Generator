import React, { Component } from "react";

class About extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values } = this.props;
    return (
      <div className="resume_container">
        <h1>Personal Details </h1>

        <form>
          <div class="file btn btn-lg ">
            <img
              src={
                values.file
                  ? `${values.file}`
                  : "https://th.jobsdb.com/en-th/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              }
              alt="Profile"
              style={{ borderRadius: "50%", height: "80px", width: "80px" }}
            />
            <input
              type="file"
              onChange={this.props.image}
              name="file"
              className="file-1"
              defaultValue={values.file}
            />
          </div>

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
        </form>

        <button onClick={this.saveAndContinue}>Save And Continue </button>
      </div>
    );
  }
}

export default About;
