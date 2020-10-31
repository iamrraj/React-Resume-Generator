import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddFields = () => {
    const values = this.props.state;
    values.push({
      university: "",
      majorsubject: "",
      startyear: null,
      endyear: null,
      grade: null,
      total: null,
      ulocation: "",
      degree: ""
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
    if (
      [
        "university",
        "majorsubject",
        "degree",
        "startyear",
        "endyear",
        "grade",
        "total",
        "ulocation"
      ].includes(e.target.name)
    ) {
      let cats = [...this.props.state];
      cats[index][e.target.name] = e.target.value;
      await this.setState({
        cats
      });
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
    //console.log(this.props.state);
  }

  //   async change(e) {
  //     await this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //     console.log(this.state.education);
  //   }

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     console.log("inputFields", this.props.state);
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
      <div id="Main_section"  style={{ paddingBottom: "30px" }}>
        <form  style={{ top: "60px", position: "relative" }}>
          <h1>
            <input
              type="text"
              defaultValue="EDUCATION"
              name="education"
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
                  <div className="col-sm-12 ">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        University/School Name{" "}
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-building"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="university"
                          className="form-control"
                          value={inputField.university}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 ">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        Major Subject{" "}
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-book"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="majorsubject"
                          className="form-control"
                          value={inputField.majorsubject}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    {/* From this datr to  this date */}

                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        START DATE
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          name="startyear"
                          className="form-control"
                          value={inputField.startyear}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    {/* University Location */}
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        Location{" "}
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-map-marker"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="ulocation"
                          className="form-control"
                          value={inputField.ulocation}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    {/* Grade Filed ut */}

                    <div className="row">
                      <div className="col-sm-6 ">
                        <div className="form-group">
                          <label htmlFor="name" className="label">
                            GRADE
                          </label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">
                                <i className="fa fa-hourglass-half"></i>
                              </span>
                            </div>
                            <input
                              type="number"
                              name="grade"
                              step="0.01"
                              className="form-control"
                              value={inputField.grade}
                              onChange={e => {
                                this.onChange(e, index);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 ">
                        <div className="form-group">
                          <label htmlFor="name" className="label">
                            OUTOF
                          </label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">
                                <i className="fa fa-hourglass"></i>
                              </span>
                            </div>
                            <input
                              type="number"
                              name="total"
                              step="0.01"
                              className="form-control"
                              value={inputField.total}
                              onChange={e => {
                                this.onChange(e, index);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 ">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        Degree{" "}
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-graduation-cap"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="degree"
                          className="form-control"
                          value={inputField.degree}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        END DATE
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          name="endyear"
                          className="form-control"
                          value={inputField.endyear}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-m-3 ">
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

export default Education;
