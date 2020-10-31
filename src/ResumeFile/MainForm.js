import React, { Component } from "react";
import Education from "./Education";
import About from "./About";
import Work from "./Work";
import Project from "./Project";
import Language from "./Language";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Success from "./Success";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../Config/config"
import "./style.css"

let authToken = localStorage.getItem("Token");
class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      photo: null,
      name: "",
      location: "",
      github: "",
      linkedin: "",
      email: "",
      phone: "",
      web: "",
      skype: "",
      about: "",
      skills: [
        {
          skilss: ""
        }
      ],
      languages: [
        {
          language: "",
          level: ""
        }
      ],
      projects: [
        {
          title: "",
          projectdetails: "",
          link: ""
        }
      ],
      works: [
        {
          postion: "",
          employe: "",
          startdate: null,
          cname: "",
          wlocation: "",
          enddate: null,
          description: ""
        }
      ],
      educations: [
        {
          university: "",
          majorsubject: "",
          startyear: null,
          endyear: null,
          grade: null,
          total: null,
          ulocation: "",
          degree: ""
        }
      ],
      hobbies: [
        {
          intrest: ""
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ImageChange = this.ImageChange.bind(this)
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
    let reader = new FileReader();
    let image = event.target.files[0];
    reader.readAsDataURL(image);
    
      reader.onloadend = (e) => {
        this.setState({
          photo: reader.result,
        });
      };
  }




  async handleImage(e) {
    let reader = new FileReader();
    let image = e.target.files[0];
    reader.readAsDataURL(image);
    
      reader.onloadend = (e) => {
        this.setState({
          photo: reader.result,
        });
      };

  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      photo: this.state.photo,
      name: this.state.name,
      location: this.state.location,
      github: this.state.github,
      linkedin: this.state.linkedin,
      email: this.state.email,
      phone: this.state.phone,
      web: this.state.web,
      skype: this.state.skype,
      about: this.state.about,
      skills: [...this.state.skills],
      languages: [...this.state.languages],
      projects: [...this.state.projects],
      works: [...this.state.works],
      educations: [...this.state.educations],
      hobbies: [...this.state.hobbies]
    };

    axios({
      method: "post",
      url: config.apiUrl.resume ,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken
      },
      data
    })
      .then(res => {
        this.setState({
          photo: null,
          name: "",
          location: "",
          github: "",
          linkedin: "",
          email: "",
          phone: "",
          web: "",
          skype: "",
          about: "",
          skills: [
            {
              skilss: ""
            }
          ],
          languages: [
            {
              language: "",
              level: ""
            }
          ],
          projects: [
            {
              title: "",
              projectdetails: ".",
              link: ""
            }
          ],
          works: [
            {
              postion: "",
              employe: "",
              startdate: null,
              cname: "",
              wlocation: "",
              enddate: null,
              description: ""
            }
          ],
          educations: [
            {
              university: "",
              majorsubject: "",
              startyear: null,
              endyear: null,
              grade: null,
              total: null,
              ulocation: "",
              degree: ""
            }
          ],
          hobbies: [
            {
              intrest: ""
            }
          ]
        });
        this.props.history.push(`/user/view/resume/`);
        Swal.fire({
          title: "Resume Added",
          icon: "success",
          text: "Resume added successfully !!",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: "Resume Added Error",
          icon: "error",
          text: "Error while Creating new Resume!",
          timer: 2000
        });
      });
  }

  render() {
    const { step } = this.state;

    const {
      photo,
      name,
      location,
      github,
      linkedin,
      email,
      phone,
      web,
      skype,
      about,
      educations,
      works,
      projects,
      languages,
      skills,
      hobbies
    } = this.state;
    const values = {
      photo,
      name,
      location,
      github,
      linkedin,
      email,
      phone,
      web,
      skype,
      about,
      educations,
      works,
      projects,
      languages,
      skills,
      hobbies
    };

    switch (step) {
      case 1:
        return (
          <About
            nextStep={this.nextStep}
            handleChange={this.change.bind(this)}
            values={values}
            image={this.ImageChange}
          />
        );
      case 2:
        return (
          <Education
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.educations}
          />
        );
      case 3:
        return (
          <Work
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.works}
          />
        );
      case 4:
        return (
          <Project
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.projects}
          />
        );
      case 5:
        return (
          <Language
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.languages}
          />
        );

      case 6:
        return (
          <Skills
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.skills}
          />
        );

      case 7:
        return (
          <Hobbies
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.change.bind(this)}
            values={values}
            state={this.state.hobbies}
          />
        );
      case 8:
        return (
          <Success
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            save={this.handleSubmit}
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
