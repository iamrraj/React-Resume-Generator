import React, { useState, useEffect } from "react";
import { getResume } from "../../Service/Resume";
import moment from "moment";

const ResumeList = () => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    getResume().then((data) => {
      setResume(data);
    });
  });

  // const handleDelete =( index) => {

  //   deleteResume(index).then((data) => {

  //   });
  // }

  return (
    <div>
      <section id="fact1" class=" text-white">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <h1 class="display-4 text-white">
                User{" "}
                <strong style={{ color: "orange" }}>
                  {window.localStorage.getItem("username")}
                </strong>{" "}
                Dashboard
              </h1>
              <p class="lead">List Of Your Resume</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row " style={{ width: "100%" }}>
          {resume.length > 0 ? (
            resume.map((c, i) => (
              <div
                className="col-md-4  box "
                style={{ marginBottom: "20px" }}
                key={c.pk}
              >
                <div className="box11">
                  <div className=" n">
                    <div class="row" style={{ marginTop: "20px" }}>
                      <div class="col-sm-3" style={{ marginLeft: "20px" }}>
                        <img
                          src={
                            c.photo
                              ? c.photo
                              : "https://i.ibb.co/WzYTTSf/66996194-394482144528868-896954686559485952-n.jpg"
                          }
                          alt="66996194-394482144528868-896954686559485952-n"
                          style={{
                            borderRadius: "50%",
                            width: "60px",
                            height: "60px",
                            marginTop: "-10px",
                          }}
                        />
                      </div>
                      <div class="col-sm-8">
                        <h5 class="card-title  pb-3">Resume {i + 1}</h5>
                        <p
                          style={{
                            marginTop: "-25px",
                            fontSize: "12px",
                            opacity: "0.6",
                          }}
                        >
                          <i class="fas fa-clock "></i>
                          &nbsp;{moment(c.timestamp).format("YYYY-MM-DD")}
                        </p>
                      </div>
                      <hr></hr>

                      <div
                        className="fact1 row"
                        style={{ marginLeft: "30px", marginTop: "10px" }}
                      >
                        <div className="col">
                          <h5>
                            <i className="fa fa-user"></i> <br></br>
                            {c.name ? `${c.name}` : " ? "}
                          </h5>

                          <h5>
                            <i className="fab fa-github"></i> <br></br>
                            <a
                              href={c.github ? `${c.github}` : "# "}
                              style={{ color: "black" }}
                            >
                              Github
                            </a>
                          </h5>
                        </div>

                        <div className="col-md-3">
                          <h5>
                            <i className="fa fa-map-marker"></i>{" "}
                            {c.location ? `${c.location}` : " ? "}
                          </h5>

                          <h5>
                            <i className="fab fa-linkedin"></i> <br></br>
                            <a
                              href={c.linkedin ? `${c.linkedin}` : "# "}
                              style={{ color: "black" }}
                            >
                              Linkedin
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <hr
                      style={{ borderWidth: "2px", borderColor: "black" }}
                    ></hr>

                    <br></br>
                    <center>
                      <a
                        href={`/resume/detail/${c.id}/`}
                        className="btn btn-login h-100 align-center text-center"
                        style={{ marginTop: "-10px" }}
                      >
                        {" "}
                        More Info
                      </a>
                      <div className="float-right">
                        <a href="# ">
                          <i
                            className="fa fa-trash"
                            style={{
                              fontSize: "19px",
                              color: "rgba(183, 28, 28, 1)",
                            }}
                          ></i>
                        </a>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <section
              id="fact1"
              class=" text-white"
              style={{ position: "absolute", top: "40%", zIndex: "-99999" }}
            >
              <div class="container">
                <div class="row text-center">
                  <div class="col-md-12">
                    <h3 class="display-4 text-white">
                      Sorry{" "}
                      <strong style={{ color: "orange" }}>
                        {window.localStorage.getItem("Name")}
                      </strong>{" "}
                      you have not create any resume.. if you want to create
                      resume <a href="/create/resume/">Click here</a>
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeList;
