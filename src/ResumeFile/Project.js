import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: ""
    };
  }

  handleAddFields = () => {
    const values = this.props.state;
    values.push({
      title: "",
      projectdetails: "",
      link: ""
    });
    this.setState({
      values
    });
  };

  handleRemoveFields = index => {
    const values = this.props.state;
    values.splice(index, 1);
    this.setState({
      values
    });
  };

  async onChange(e, index) {
    if (["title", "projectdetails", "link"].includes(e.target.name)) {
      let cats = [...this.props.state];
      cats[index][e.target.name] = e.target.value;
      await this.setState({
        cats
      });
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
    // console.log(this.state.this.props.state);
  }

  //   async change(e) {
  //     await this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //     console.log(this.state.project);
  //   }

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     console.log("inputFields", this.state.inputFields);
  //   };

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div id="Main_section" style={{ paddingBottom: "30px" }}>
        <form style={{ top: "60px", position: "relative" }}>
          <h1>
            <input
              type="text"
              defaultValue="PROJECT"
              name="project"
              style={{ border: "none", background: "transparent" }}
              onChange={this.props.handleChange}
            />
            <button
              className="btn btn-success float-right w-25 font-weight-bolder"
              type="button"
              onClick={() => this.handleAddFields()}
            >
              + Add
            </button>
          </h1>

          {this.props.state.map((inputField, index) => (
            <div className="box1">
              <div
                key={`${inputField}~${index}`}
                style={{ marginBottom: "20px" }}
              >
                <div className="row">
                  {/* Project Name */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        PROJECT TITLE{" "}
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa fa-tasks"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={inputField.title}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        PROJECT LINK{" "}
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa fa-link"></i>
                          </span>
                        </div>
                        <input
                          type="link"
                          name="link"
                          className="form-control"
                          value={inputField.link}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="aproject" className="label">
                        ABOUT PROJECT
                      </label>

                      <textarea
                        className="form-control"
                        name="projectdetails"
                        rows={3}
                        maxLength={300}
                        value={inputField.projectdetails}
                        onChange={e => {
                          this.onChange(e, index);
                        }}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "-30px" }}>
                  <button
                    className="btn btn-danger"
                    style={{ marginTop: "30px" }}
                    type="button"
                    onClick={() => this.handleRemoveFields(index)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
 <div className="button">
          <button onClick={this.back} className="btn btn-info">
            Back
          </button>
          <button onClick={this.saveAndContinue} className="btn btn-success">
            Save And Continue{" "}
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Project;
