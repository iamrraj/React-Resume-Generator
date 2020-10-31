import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: ""
    };
  }

  handleAddFields = () => {
    const values = this.props.state;
    values.push({
      postion: "",
      employe: "",
      startdate: null,
      cname: "",
      wlocation: "",
      enddate: null,
      description: ""
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
        "postion",
        "employe",
        "startdate",
        "cname",
        "wlocation",
        "enddate",
        "description"
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
    //console.log(this.state.this.props.state);
  }

  //   async change(e) {
  //     await this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //     console.log(this.state.work);
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
              defaultValue="WORK EXPERIANCE"
              name="work"
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
                        POSITION{" "}
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i class="fa fa-briefcase"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="postion"
                          className="form-control"
                          value={inputField.postion}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    {/* Employment Type */}

                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        Employment Type
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa fa-tasks"></i>
                          </span>
                        </div>

                        <select
                          name="employe"
                          className="form-control"
                          value={inputField.employe}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        >
                          <option value=" "> - </option>
                          <option value="Full-Time">Full Time</option>
                          <option value="Part-Time">Part Time</option>
                          <option value="Freelance">Freelance</option>
                          <option value="Contract">Contract</option>
                          <option value="Internship">Internship</option>
                          <option value="Apprenticeship">Apprenticeship</option>
                        </select>
                      </div>
                    </div>

                    {/* START Date */}
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        Start Date
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          name="startdate"
                          className="form-control"
                          value={inputField.startdate}
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
                        COMPANY NAME{" "}
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa fa-building"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="cname"
                          className="form-control"
                          value={inputField.cname}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        LOCATION{" "}
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa fa-map-marker"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          name="wlocation"
                          className="form-control"
                          value={inputField.wlocation}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
                      </div>
                    </div>

                    {/* END Date */}
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        End Date
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          name="enddate"
                          className="form-control"
                          value={inputField.enddate}
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
                        Description
                      </label>

                      <textarea
                        className="form-control"
                        name="description"
                        rows={3}
                        maxLength={300}
                        value={inputField.description}
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

export default Work;
