import React, { Component } from "react";

export class ResumeList extends Component {
  render() {
    return (
      <div>
        <section id="fact1" class=" text-white">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <h1 class="display-4 text-white">
                  User{" "}
                  <strong style={{ color: "orange" }}>
                    {window.localStorage.getItem("Name")}
                  </strong>{" "}
                  Dashboard
                </h1>
                <p class="lead">List Of Your Resume</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ResumeList;
