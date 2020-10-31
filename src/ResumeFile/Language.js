import React, { Component } from "react";
import config from "../Config/config";

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [],
      inputFields: [
        {
          language: "",
          level: ""
        }
      ]
    };
  }

  handleAddFields = () => {
    const values = this.props.state;
    values.push({
      language: "",
      level: ""
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
    if (["language", "level"].includes(e.target.name)) {
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

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  async componentDidMount() {
    const res = await fetch(config.apiUrl.langauge);
    const code = await res.json();
    console.log(code);
    this.setState({
      code
    });
  }

  render() {
    const { code } = this.state;
    return (
      <div id="Main_section" style={{ paddingBottom: "30px" }}>
        <form style={{ top: "60px", position: "relative" }}>
          <h1>
            <input
              type="text"
              defaultValue="LANGUAGE"
              name="language"
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
                  <div className="col-sm-6 ">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        LANGUAGE{" "}
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-language"></i>
                          </span>
                        </div>

                        <select
                          name="language"
                          className="form-control"
                          value={inputField.language}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        >
                          <option value="" disabled hidden security>
                            Choose Language
                          </option>
                          {code.map(C => (
                            <option value={C.name}>{C.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 ">
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        LEVEL{" "}
                      </label>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-tasks"></i>
                          </span>
                        </div>
                        <select
                          name="level"
                          className="form-control"
                          value={inputField.level}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        >
                          <option value=" ">- </option>
                          <option value="Native">Native</option>
                          <option value="Full-Professional">
                            Full Professional
                          </option>
                          <option value="Freelance">
                            Professional Working
                          </option>
                          <option value="Contract">Limited Working</option>
                          <option value="Internship">Elementry Working</option>
                        </select>
                      </div>
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

export default Language;
