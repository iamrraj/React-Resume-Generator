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
        project,
        inputFields,
        inputFields1,
        inputFields2,
        inputFields3,
        inputFields4
      }
    } = this.props;
    return (
      <div class="A4">
        <section class="sheet ">
          <article>
            <div className="row top_head">
              <div className="col-sm-2">
                <img
                  src={
                    file
                      ? `${file}`
                      : "https://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png"
                  }
                  alt="Profile"
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px"
                  }}
                />
              </div>

              <div className="col-sm-10">
                <h1 className="heading">{name}</h1>
                <p className="subheading">{about}</p>
              </div>
            </div>

            <div className="row basic_information ">
              <div className="col-sm-4">
                <p>
                  <i className="fa fa-phone faa"></i> &nbsp; {phone}
                </p>
                <p>
                  <i className="fab fa-linkedin faa"></i> &nbsp; {linkedin}
                </p>
                <p>
                  <span className=" faa">@</span> &nbsp; {email}
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  <i className="fa fa-map-marker faa"></i> &nbsp; {location}
                </p>
                <p>
                  <i className="fab fa-github faa"></i> &nbsp; {github}
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  <i className="fab fa-skype faa"></i> &nbsp; {skype}
                </p>
                <p>
                  <i className="fa fa-globe faa"></i> &nbsp; {web}
                </p>
              </div>
            </div>

            <div className="row main_section">
              <div className="col-sm-6">
                <h1 className="education">{education.toUpperCase()}</h1>

                {/* This Section For Education List */}
                <div className="row" style={{ paddingBottom: "8px" }}>
                  {inputFields.map(c => (
                    <div className="col-sm-12">
                      <h1 className="name_section">{c.university}</h1>
                      <p className="degree_major">
                        {c.degree} ( {c.subject})
                      </p>
                      <p className="from_to">
                        <span>
                          {c.from} - {c.to ? `${c.to}` : "Present"}{" "}
                        </span>{" "}
                        <span className="float-right">{c.ulocation}</span>
                      </p>
                      <p className="from_to" style={{ marginTop: "-15px" }}>
                        GPA {c.grade}/{c.total}
                      </p>
                    </div>
                  ))}
                </div>

                {/* For Work Projects */}
                <div className="work_experiance" style={{ marginTop: "13px" }}>
                  <h1 className="education">{work.toUpperCase()}</h1>

                  {/* This Section For Person List */}
                  <div className="row" style={{ paddingBottom: "8px" }}>
                    {inputFields1.map(c => (
                      <div className="col-sm-12">
                        <h1 className="name_section">{c.postion}</h1>
                        <p className="degree_major">
                          {c.cname.toUpperCase()} ({c.type ? `${c.type}` : " "})
                        </p>
                        <p className="from_to">
                          <span>
                            {c.startdate} -{" "}
                            {c.enddate ? `${c.enddate}` : "Present"}{" "}
                          </span>{" "}
                          <span className="float-right">
                            {" "}
                            {c.wlocation ? `${c.wlocation}` : " "}
                          </span>
                        </p>
                        <p className="about_project1">- {c.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* For Personal Projects */}
                <div className="work_experiance" style={{ marginTop: "13px" }}>
                  <h1 className="education">{project.toUpperCase()}</h1>

                  {/* This Section For Person List */}
                  <div className="row" style={{ paddingBottom: "8px" }}>
                    {inputFields2.map(c => (
                      <div className="col-sm-12">
                        <p className="project_head">
                          {c.title}
                          <a
                            href={c.link ? `${c.link}` : "# "}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className=" fa fa-link faa"></i>{" "}
                          </a>{" "}
                        </p>
                        <p className="about_project" style={{ marginTop: "" }}>
                          - {c.aproject}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Another Part Of Resume  */}
              <div className="col-sm-6">
                {/* For Skills Projects */}
                <div className="skill_experiance">
                  <h1 className="education">{skill.toUpperCase()}</h1>

                  {/* This Section For Person List */}
                  <div className="row bte" style={{ paddingBottom: "8px" }}>
                    {inputFields4.map(c => (
                      <button className="btn bttn">
                        {c.skills ? `${c.skills}` : ""}
                      </button>
                    ))}
                  </div>
                </div>

                {/* For LANGUAGE Projects */}
                <div
                  className="language_experiance"
                  style={{ marginTop: "20px" }}
                >
                  <h1 className="education">{language.toUpperCase()}</h1>

                  {/* This Section For Person List */}
                  <div className="row " style={{ paddingBottom: "8px" }}>
                    {inputFields3.map(c => (
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
              </div>
            </div>
          </article>
        </section>

        <button onClick={this.back}>Back</button>
        <button onClick={this.saveAndContinue}>Save And Continue </button>
      </div>
    );
  }
}

export default Success;
