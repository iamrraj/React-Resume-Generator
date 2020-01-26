import React, { Component } from "react";

export class A4 extends Component {
  render() {
    return (
      //   <div>
      //    <page size="A4"></page>
      //   </div>
      <div class="A4">
        <section class="sheet ">
          <article>
            <div className="row top_head">
              <div className="col-sm-2">
                <img
                  src={
                    "https://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png"
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
                <h1 className="heading">Rahul Raj</h1>
                <p className="subheading">
                  I am a Computer Science student with extensive knowledge of
                  programming and computer applications.I'm a Full Stack
                  Developer. At the moment, I'm living in Warsaw Poland and
                  working as full stack developerat Viva Drive. currently
                  working with Python, Django, React Js,Node js . I also worked
                  have Knowledge inProgramming with Java, PHP,DataScience and
                  passionate to learn Data Science Machine Learning.
                </p>
              </div>
            </div>

            <div className="row basic_information ">
              <div className="col-sm-4">
                <p>
                  <i className="fa fa-phone faa"></i> &nbsp; +48722750618
                </p>
                <p>
                  <i className="fab fa-linkedin faa"></i> &nbsp; Linkedin
                </p>
                <p>
                  <span className=" faa">@</span> &nbsp; rajr97555@gmail.com
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  <i className="fa fa-map-marker faa"></i> &nbsp; Warsaw, Poland
                </p>
                <p>
                  <i className="fab fa-github faa"></i> &nbsp; Githubb
                </p>
              </div>
              <div className="col-sm-4">
                <p>
                  <i className="fab fa-skype faa"></i> &nbsp; Skype
                </p>
                <p>
                  <i className="fa fa-globe faa"></i> &nbsp; Web
                </p>
              </div>
            </div>

            <div className="row main_section">
              <div className="col-sm-6">
                <h1 className="education">EDUCATION</h1>

                {/* This Section For Education List */}
                <div className="row" style={{ paddingBottom: "8px" }}>
                  <div className="col-sm-12">
                    <h1 className="name_section">
                      University Of Social Science
                    </h1>
                    <p className="degree_major">Bachelor (Computer Science)</p>
                    <p className="from_to">
                      <span>10/2016 - 02/2020 </span>{" "}
                      <span className="float-right"> Warsaw, Poland</span>
                    </p>
                    <p className="from_to" style={{ marginTop: "-15px" }}>
                      GPA 4.6/5
                    </p>
                  </div>
                </div>

                {/* For Work Projects */}
                <div className="work_experiance" style={{ marginTop: "13px" }}>
                  <h1 className="education">WORK EXPERIANCE</h1>

                  {/* This Section For Person List */}
                  <div className="row" style={{ paddingBottom: "8px" }}>
                    <div className="col-sm-12">
                      <h1 className="name_section">Full Stack Developer</h1>
                      <p className="degree_major">VIVA DRIVE (Full-Time)</p>
                      <p className="from_to">
                        <span>10/2016 - 02/2020 </span>{" "}
                        <span className="float-right"> Warsaw, Poland</span>
                      </p>
                      <p className="about_project1">
                        - I am a Computer Science student with extensive
                        knowledge of programming and computer applications.I'm a
                        Full Stack Developer. At the moment, I'm living in
                        Warsaw Poland and working as full stack developerat Viva
                        Drive
                      </p>
                    </div>
                  </div>
                </div>

                {/* For Personal Projects */}
                <div className="work_experiance" style={{ marginTop: "13px" }}>
                  <h1 className="education">PERSONAL PROJECT</h1>

                  {/* This Section For Person List */}
                  <div className="row" style={{ paddingBottom: "8px" }}>
                    <div className="col-sm-12">
                      <p className="project_head">
                        Trace Speditions and Manage CMRs Circulation{" "}
                        <a href="# ">
                          <i className=" fa fa-link faa"></i>{" "}
                        </a>{" "}
                      </p>
                      <p className="about_project" style={{ marginTop: "" }}>
                        - I am a Computer Science student with extensive
                        knowledge of programming and computer applications.I'm a
                        Full Stack Developer. At the moment, I'm living in
                        Warsaw Poland and working as full stack developerat Viva
                        Drive
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Another Part Of Resume  */}
              <div className="col-sm-6">
                {/* For Skills Projects */}
                <div className="skill_experiance">
                  <h1 className="education">SKILLS</h1>

                  {/* This Section For Person List */}
                  <div className="row bte" style={{ paddingBottom: "8px" }}>
                    <button className="btn bttn"> Java</button>
                    <button className="btn bttn"> Pyhton</button>
                    <button className="btn bttn"> JavaScript</button>
                    <button className="btn bttn"> ReactJs</button>
                    <button className="btn bttn"> HTML5</button>
                    <button className="btn bttn"> BOOTSTRAP</button>
                  </div>
                </div>

                {/* For LANGUAGE Projects */}
                <div
                  className="language_experiance"
                  style={{ marginTop: "20px" }}
                >
                  <h1 className="education">LANGUAGE</h1>

                  {/* This Section For Person List */}
                  <div className="row " style={{ paddingBottom: "8px" }}>
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-4"> ENGLISH</div>
                        <div className="col-sm-4"> FLUENT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default A4;
