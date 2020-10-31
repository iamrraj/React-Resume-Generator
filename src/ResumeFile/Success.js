import React, { Component } from "react";

class Success extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
       
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
        hobbies,
      },
    } = this.props;
    return (
      <div class="" id="Main_section1">
        <section class="sheet ">
          <article>
            <div className="row top_head basic_information bg-white">
              <div className="col-sm-12">
                <h1 className="heading">{name}</h1>
                <p className="subheading">{about}</p>
              </div>
            </div>

            <div className="row basic_information ">
              <div className="col-sm-4">
                <p>
                  <a
                    href={`tel:${phone}`}
                    target="_blank"
                    className="text-dark"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-phone faa"></i> &nbsp; {phone}
                  </a>
                </p>
                <p>
                  <a
                    href={linkedin ? `${linkedin}` : "# "}
                    target="_blank"
                    className="text-dark"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin faa"></i> &nbsp; {linkedin}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    className="text-dark"
                    rel="noopener noreferrer"
                  >
                    <span className=" faa">@</span> &nbsp; {email}
                  </a>
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  <i className="fa fa-map-marker faa"></i> &nbsp; {location}
                </p>
                <p>
                  <a
                    href={github ? `${github}` : "# "}
                    target="_blank"
                    className="text-dark"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github faa"></i> &nbsp; {github}
                  </a>
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  <i className="fab fa-skype faa"></i> &nbsp; {skype}
                </p>
                <p>
                  <a
                    href={web ? `${web}` : "# "}
                    target="_blank"
                    className="text-dark"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-globe faa"></i> &nbsp; {web}
                  </a>
                </p>
              </div>
            </div>

            <div className="row main_section">
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
                              ? `${new Date(c.startdate).getMonth()}`
                              : " "}{" "}
                            /
                            {c.startdate
                              ? `${new Date(c.startdate).getFullYear()}`
                              : " "}{" "}
                            &nbsp; - &nbsp;
                            {c.enddate
                              ? `${new Date(c.enddate).getMonth()}`
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
                <div className="work_experiance" style={{ marginTop: "13px" }}>
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
              <div className="col-sm-6">
                {/* For Education Projects */}
                <h1 className="education">EDUCATION</h1>
                <div className="row" style={{ paddingBottom: "8px" }}>
                  {educations.map((c) => (
                    <div className="col-sm-12">
                      <h1 className="name_section">{c.university}</h1>
                      <p className="degree_major">
                        {c.degree} ( {c.majorsubject})
                      </p>
                      <p className="from_to">
                        <span>
                          {c.startyear
                            ? `${new Date(c.startyear).getMonth()}`
                            : " "}{" "}
                          /
                          {c.startyear
                            ? `${new Date(c.startyear).getFullYear()}`
                            : " "}{" "}
                          &nbsp; - &nbsp;
                          {c.endyear
                            ? `${new Date(c.endyear).getMonth()}`
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
                <div className="skill_experiance">
                  <h1 className="education">SKILL</h1>

                  {/* This Section For Person List */}
                  <div className="row bte" style={{ paddingBottom: "8px" }}>
                    {skills.map((c) => (
                      <button
                        className="btn bttn  "
                        style={{
                          border: "1px solid gray",
                          // background: "white",
                          color: "white",
                          fontSize: "15px",
                          width: "120px",
                        }}
                      >
                        {c.skilss ? `${c.skilss}` : ""}
                      </button>
                    ))}
                  </div>
                </div>

                {/* For LANGUAGE Projects */}
                <div
                  className="language_experiance"
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
                          <div className="col-sm-4">
                            {" "}
                            {c.level ? `${c.level}` : ""}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skill_experiance" style={{ marginTop: "20px" }}>
                  <h1 className="education">HOBBIES</h1>

                  {/* This Section For Person List */}
                  <div className="row bte" style={{ paddingBottom: "8px" }}>
                    {hobbies.map((c) => (
                      <button
                        className="btn bttn text-dark "
                        style={{
                          border: "1px solid gray",
                          background: "white",
                          color: "black",
                          fontSize: "15px",
                          width: "140px",
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
        <div className="button">
        <form onSubmit={this.props.save}>
       
          <button className="btn btn-success" >Save And Continue </button>
          
        </form>
        <button onClick={this.back} className="btn btn-info">
          Back
        </button>
        </div>
       
      </div>
    );
  }
}

export default Success;
