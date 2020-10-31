import React, { Component } from "react";
import config from "../../Config/config";
import { ProgressBar } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


class ViewResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      skills: [],
      languages: [],
      projects: [],
      works: [],
      educations: [],
      hobbies: [],
    };
  }

  async componentDidMount() {
    let authToken = localStorage.getItem("Token");
    try {
      await fetch(`${config.apiUrl.resume}${this.props.match.params.pk}/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      })
        .then((blog) => blog.json())
        .then((blog) => {
          this.setState({
            ...this.state,
            blog,
            educations: blog.educations,
            works: blog.works,
            projects: blog.projects,
            languages: blog.languages,
            skills: blog.skills,
            hobbies: blog.hobbies,
          });
        });
    } catch (e) {
      console.log(e);
    }
  }

  printDocument(name)  {
    const input = document.getElementById("divToPrint");
    window.scrollTo(0, 0);
    html2canvas(input).then((canvas) => {
      document.body.appendChild(canvas);
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL("image/png");
      window.open(imgData);
      const pdf = new jsPDF("p", "mm");
      var position = -2;
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      /* add extra pages if the div size is larger than a a4 size */
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${name}.pdf`);
    });
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  }

  render() {
    const {
      blog,
      educations,
      projects,
      works,
      skills,
      languages,
      hobbies,
    } = this.state;
    //  localStorage.setItem("Total", blog.length);
    return (
      <div>
        {/* <section id="fact1" class=" text-white">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <h3 class="display-4 text-white">
                  <strong style={{ color: "orange" }}>
                    {window.localStorage.getItem("Name")}
                  </strong>{" "}
                  Your All Resume List
                </h3>
              </div>
            </div>
          </div>
        </section> */}
        <button
          className="btn btn-success"
          style={{ width: "100px", height: "50px" }}
          onClick={this.printDocument.bind(blog.name)}
        >
          Print
        </button>

        <div
          id="divToPrint"
          style={{
            backgroundColor: "#f5f5f5",
            width: "210mm",
            minHeight: "280mm",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <section class="sheet ">
            <article>
              <div className="row top_head basic_information1 bg-white">
              <div className="col-sm-2">
              <img
                      src={
                        blog.photo
                          ? `${blog.photo}`
                          : "https://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png"
                      }
                      alt="Profile"
                      style={{
                        borderRadius: "50%",
                        height: "130px",
                        width: "130px",
                        marginLeft: "-30px"
                      }}
                    />
                </div>
                <div className="col-sm-10" style={{marginTop:"-20px"}}>
                  <h1 className="heading">{blog.name}</h1>
                  <p className="subheading text-justify" >{blog.about}</p>
                </div>
              </div>

              <div className="row basic_information fuel_basic ">
                <div className="col-sm-4">
                  <p>
                    <a
                      href={`tel:${blog.phone}`}
                      target="_blank"
                      className="text-dark"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-phone faa"></i> &nbsp; {blog.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={blog.linkedin ? `${blog.linkedin}` : "# "}
                      target="_blank"
                      className="text-dark"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin faa"> &nbsp; {blog.linkedin}</i>{" "}
                      &nbsp;{" "}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${blog.email}`}
                      target="_blank"
                      className="text-dark dd"
                      rel="noopener noreferrer"
                    >
                      <span className=" faa">@</span> &nbsp; {blog.email}
                    </a>
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <i className="fa fa-map-marker faa"></i> &nbsp;{" "}
                    {blog.location}
                  </p>
                  <p>
                    <a
                      href={blog.github ? `${blog.github}` : "# "}
                      target="_blank"
                      className="text-dark dons"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github faa">&nbsp; {blog.github}</i>
                    </a>
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <i className="fab fa-skype faa"></i> &nbsp; {blog.skype}
                  </p>
                  <p>
                    <a
                      href={blog.web ? `${blog.web}` : "# "}
                      target="_blank"
                      className="text-dark dons"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-globe faa">&nbsp; {blog.web}</i>
                    </a>
                  </p>
                </div>
              </div>

              <div className="row main_section ">
                <div className="col-sm-6">
                  {/* This Section For Education List */}

                  {/* For Work Projects */}
                  <div className="work_experiance" style={{ marginTop: "1px" }}>
                    <h1 className="education">WORK</h1>

                    {/* This Section For Person List */}
                    <div className="row" style={{ paddingBottom: "8px" }}>
                      {works.map((c) => (
                        <div className="col-sm-12">
                          <h1 className="name_section">{c.postion}</h1>
                          <p className="degree_major">
                            {c.cname.toUpperCase()} (
                            {c.employe ? `${c.employe}` : " "})
                          </p>
                          <p className="from_to">
                            <span>
                              {c.startdate
                                ? `${new Date(c.startdate).getMonth() < 10 ? `0${new Date(c.startdate).getMonth()}` : new Date(c.startdate).getMonth()}`
                                : " "}{" "}
                              /
                              {c.startdate
                                ? `${new Date(c.startdate).getFullYear()}`
                                : " "}{" "}
                              &nbsp; - &nbsp;
                              {c.enddate
                                ? `${new Date(c.enddate).getMonth() < 10 ? `0${new Date(c.enddate).getMonth()}` : new Date(c.enddate).getMonth()}`
                                : " "}{" "}
                              /
                              {c.enddate
                                ? `${new Date(c.enddate).getFullYear()}`
                                : "Present "}{" "}
                            </span>{" "}
                            <span className="float-right">
                              {" "}
                              {c.wlocation ? `${c.wlocation}` : " "}
                            </span>
                          </p>
                          <p
                            className="about_project1"
                            style={{ textAlign: "justify" }}
                          >
                            - {c.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* For Personal Projects */}
                  <div
                    className="work_experiance"
                    style={{ marginTop: "13px" }}
                  >
                    <h1 className="education">PROJECT</h1>

                    {/* This Section For Person List */}
                    <div className="row" style={{ paddingBottom: "8px" }}>
                      {projects.map((c) => (
                        <div className="col-sm-12">
                          <p className="project_head">
                            {c.title} {c.title ? `${c.title}` : " "}
                          </p>
                          <p
                            className="about_project"
                            style={{ marginTop: "", textAlign: "justify" }}
                          >
                            - {c.projectdetails ? `${c.projectdetails}` : "-"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Another Part Of Resume  */}
                <div className="col-sm-6 dod">
                  {/* For Education Projects */}
                  <h1 className="education hello_eductioen">EDUCATION</h1>
                  <div
                    className="row hello_eductioen"
                    style={{ paddingBottom: "8px" }}
                  >
                    {educations.map((c) => (
                      <div className="col-sm-12">
                        <h1 className="name_section">{c.university}</h1>
                        <p className="degree_major">
                          {c.degree} ( {c.majorsubject})
                        </p>
                        <p className="from_to">
                          <span>
                            {c.startyear
                              ? `${new Date(c.startyear).getMonth() < 10 ? `0${new Date(c.startyear).getMonth()}` : new Date(c.startyear).getMonth()}`
                              : " "}{" "}
                            /
                            {c.startyear
                              ? `${new Date(c.startyear).getFullYear()}`
                              : " "}{" "}
                            &nbsp; - &nbsp;
                            {c.endyear
                              ? `${new Date(c.endyear).getMonth() < 10 ? `0${new Date(c.endyear).getMonth()}` : new Date(c.endyear).getMonth()}`
                              : " "}{" "}
                            /
                            {c.endyear
                              ? `${new Date(c.endyear).getFullYear()}`
                              : "Present "}{" "}
                          </span>{" "}
                          <span className="float-right">{c.ulocation}</span>
                        </p>
                        <p className="from_to" style={{ marginTop: "-15px" }}>
                          GPA {c.grade}/{c.total}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* For Skill Projects */}
                  <div className="skill_experiance hello_eductioen">
                    <h1 className="education ">SKILL</h1>

                    {/* This Section For Person List */}
                    <div
                      className="row bte hello_eductioen"
                      style={{ paddingBottom: "8px" }}
                    >
                      {skills.map((c) => (
                        <button
                          className="btn bttn  "
                          style={{
                            border: "1px solid gray",
                            backgroundColor:"rgb(66, 66, 204)",
                            marginTop: "5px",
                            color: "white",
                            fontSize: "12px",
                            width: "100px",
                            marginLeft: "5px",
                          }}
                        >
                          {c.skilss ? `${c.skilss}` : ""}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* For LANGUAGE Projects */}
                  <div
                    className="language_experiance hello_eductioen"
                    style={{ marginTop: "20px" }}
                  >
                    <h1 className="education">LANGUAGE</h1>

                    {/* This Section For Person List */}
                    <div
                      className="row "
                      style={{ paddingBottom: "8px", marginTop: "15px" }}
                    >
                      {languages.map((c) => (
                        <div className="col-sm-12">
                          <div className="row">
                            <div className="col-sm-4">
                              {" "}
                              {c.language ? `${c.language}` : ""}
                            </div>
                            <div className="col-sm-8">
                              {" "}
                              {/* {c.level ? `${c.level}` : ""} */}
                              <ProgressBar
                                now={
                                  c.level === "Native"
                                    ? 100
                                    : c.level === "Full-Professional"
                                    ? 80
                                    : c.level === "Freelance"
                                    ? 60
                                    : c.level === "Contract"
                                    ? 40
                                    : 30
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="skill_experiance hello_eductioen"
                    style={{ marginTop: "20px" }}
                  >
                    <h1 className="education">INTERESTS</h1>

                    {/* This Section For Person List */}
                    <div
                      className="row bte hello_eductioen"
                      style={{ paddingBottom: "8px" }}
                    >
                      {hobbies.map((c) => (
                        <button
                          className="btn bttn "
                          style={{
                            border: "1px solid gray",
                            backgroundColor:"rgb(66, 66, 204)",
                           
                            color: "white",
                            fontSize: "12px",
                            width: "100px",
                            marginTop: "5px",
                            marginLeft: "5px",
                          }}
                        >
                          {c.intrest ? `${c.intrest}` : ""}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default ViewResume;
