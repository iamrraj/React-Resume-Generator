import React, { Component } from "react";
import config from "../../Config/config";

class ViewResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
  }

  async componentDidMount() {
    let authToken = localStorage.getItem("Token");
    try {
      await fetch(config.apiUrl.resumeuser, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken
        }
      })
        .then(blog => blog.json())
        .then(blog => {
          this.setState({
            ...this.state,
            blog
          });
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { blog } = this.state;
    localStorage.setItem("Total", blog.length);
    return (
      <div>
        <section id="fact1" class=" text-white">
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
        </section>
      </div>
    );
  }
}

export default ViewResume;
