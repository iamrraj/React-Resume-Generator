import React, { Component } from "react";
import Education from "./Education";
import About from "./About";
import Work from "./Work";
import Project from "./Project";
import Language from "./Language";
import Skills from "./Skills";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      file: null,
      name: "",
      location: "",
      github: "",
      linkedin: "",
      email: "",
      phone: "",
      web: "",
      skype: "",
      about: "",
      education: "",
      work: "",
      project: "",
      language: "",
      skill: "",
      inputFields4: [
        {
          skills: ""
        }
      ],
      inputFields3: [
        {
          language: "",
          level: ""
        }
      ],
      inputFields2: [
        {
          title: "",
          aproject: "",
          link: ""
        }
      ],
      inputFields1: [
        {
          postion: "",
          type: "",
          startdate: "",
          cname: "",
          wlocation: "",
          enddate: "",
          description: ""
        }
      ],
      inputFields: [
        {
          university: "",
          subject: "",
          from: "",
          to: "",
          grade: "",
          total: "",
          ulocation: "",
          degree: ""
        }
      ]
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  async change(e) {
    await this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  ImageChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  render() {
    const { step } = this.state;

    const {
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
      inputFields,
      inputFields1,
      inputFields2,
      inputFields3,
      inputFields4,
      language,
      skill,
      work,
      project
    } = this.state;
    const values = {
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
      inputFields,
      inputFields1,
      inputFields2,
      inputFields3,
      inputFields4,
      language,
      skill,
      work,
      project
    };
    switch (step) {
      case 1:
        return (
          <About
            nextStep={this.nextStep}
            handleChange={this.change.bind(this)}
            values={values}
            image={this.ImageChange.bind(this)}
          />
        );
      case 2:
        return (
          <Education
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.inputFields}
          />
        );
      case 3:
        return (
          <Work
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.inputFields1}
          />
        );
      case 4:
        return (
          <Project
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.inputFields2}
          />
        );
      case 5:
        return (
          <Language
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.inputFields3}
          />
        );

      case 6:
        return (
          <Skills
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.inputFields4}
          />
        );
      default:
        return null;
    }
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default MainForm;
