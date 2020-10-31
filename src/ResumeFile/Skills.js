import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddFields = () => {
    const values = this.props.state;
    values.push({
      skilss: ""
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
    if (["skilss"].includes(e.target.name)) {
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

  render() {
    return (
      <div id="Main_section"  style={{ paddingBottom: "30px" }}>
        <form style={{ top: "60px", position: "relative" }}>
          <h1>
            <input
              type="text"
              defaultValue="SKILL"
              name="skill"
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

          <div style={{ marginBottom: "20px" }}>
            <div className="row">
              {this.props.state.map((inputField, index) => (
                <div className="box1">
                  <div className="col-sm-3 " key={`${inputField}~${index}`}>
                    <div className="form-group">
                      <label htmlFor="name" className="label">
                        SKILL{" "}
                      </label>
                      <div class="form-group">
                        {/* <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <i className="fa fa-language"></i>
                        </span>
                      </div> */}
                        <input
                          type="text"
                          name="skilss"
                          style={{ width: "150px" }}
                          className="form-control"
                          value={inputField.skilss}
                          onChange={e => {
                            this.onChange(e, index);
                          }}
                        />
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
            </div>
          </div>
          <div className="button">
          <button onClick={this.back} className="btn btn-info">
            Back
          </button>
          <button onClick={this.saveAndContinue} className="btn btn-success">
            Save And Continue{" "}
          </button></div>
        </form>
      </div>
    );
  }
}

export default Skills;
