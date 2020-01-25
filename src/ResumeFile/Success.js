import React, { Component } from "react";

class Success extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        file,
        name,
        location,
        github,
        linkedin,
        email,
        phone,
        web,
        skype,
        about,
        education,
        language,
        skill,
        work,
        project

        // inputFields,
        // inputFields1,
        // inputFields2,
        // inputFields3,
        // inputFields4,
      }
    } = this.props;
    return (
      <div>
        <h1>Hello </h1>
        <p>{name}</p>
        <p>{location}</p>
        <p>{github}</p>
        <p>{linkedin}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{web}</p>
        <p>{skype}</p>
        <p>{about}</p>
        <p>{education}</p>
        <p>{skill}</p>
        <p>{work}</p>
        <p>{project}</p>
        <p>{language}</p>

        <button onClick={this.back}>Back</button>
        <button onClick={this.saveAndContinue}>Save And Continue </button>
      </div>
    );
  }
}

export default Success;
