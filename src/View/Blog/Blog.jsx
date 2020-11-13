import React, { useState, useEffect } from "react";
import moment from "moment";
import { getBlog } from "../../Service/Blog";
import "./Blog.css";
function Blog() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    getBlog().then((data) => {
      setFeed(data);
    });
  }, []);

  const baseUrl = process.env.PUBLIC_URL;

  return (
    <div className="card   bg-gray-100 bg-opacity-25 ">
      <section id="fact23">
        <div class="container text-center">
          <div class="home-search ">
            <div class="overlay">
              <h1 class="display-4 mb-4 text-white">
                <h1 style={{ color: "white", fontSize: "53px" }}>
                  <span style={{ color: "orange" }}>SI</span>MP
                  <span style={{ color: "orange" }}>LE</span> IS{" "}
                  <span style={{ color: "orange" }}>B</span>ES
                  <span style={{ color: "orange" }}>T</span>{" "}
                </h1>
                <h4 class="text-white">Its a Blog channel</h4>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:w-10/12 lg:mx-auto mb-0 ">
        <div className="flex flex-wrap -mx-px md:-mx-1 ">
          {feed.map((c) => (
            <div className="body_tag col-md-8 p-px  border" key={c.id}>
              <div>
                <h3 className="header text-center">{c.header}</h3>

                <hr style={{ border: "1px dashed black", opacity: "0.2" }} />
                <br />
                <a
                  href={"/blog/detail/" + c.id + "/" + c.author.username + "/"}
                >
                  <h1 className="title text-center">{c.title}</h1>
                </a>
                <br />
                <p className="user_don">
                  <i className="fa"> &#xf073; </i>{" "}
                  {moment(c.timestamp).format("DD-MM-YYYY")} &nbsp;
                  <i className="fa fa-user"> </i>
                  <a href={"/blog/list/user/" + c.author.id + "/"}>
                    {" "}
                    {c.author.fullname ? c.author.fullname : c.author.username}
                  </a>{" "}
                  &nbsp;
                  <i className="fa">&#xf017; </i> {c.read_time.substring(0, 5)}{" "}
                  Minutes Read &nbsp; <i className="fa fa-comment"></i> 0
                  Comments &nbsp; <i className="fa">&#xf06e;</i> {c.views} Views
                </p>

                <img
                  src={
                    c.photo
                      ? c.photo
                      : "https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg"
                  }
                  alt={c.title}
                  className="img"
                />

                <br />
                <p className="body_text">{c.blog_body} </p>

                <br />

                <p className="text-center read_more">
                  <a
                    href={
                      "/blog/detail/" + c.id + "/" + c.author.username + "/"
                    }
                  >
                    <strong>READ MORE</strong>
                  </a>
                </p>
                <hr />
                <br />
                <p>
                  {c.get_tags.map((app) => (
                    <button className="btn btn_tag">
                      <a href={baseUrl + "/tag/list/" + app} className="done">
                        # {app}
                      </a>
                    </button>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer_text">
          <h2>
            <i className="fab fa-telegram" aria-hidden="true"></i> Subscribe To
            Our Mailing List
          </h2>
          <h4>Receive updates from the Blog!</h4>

          <p className="down_text">
            © 2019-2020 Simpleisbest®, All Rights Reserved. <br />
            675 Ponce De Leon Ave NE • Suite 5000 • Atlanta, GA 30308 USA <br />
            <a href="# " className="text-dark a">
              Contact Us{" "}
            </a>{" "}
            •{" "}
            <a href="# " className="text-dark a">
              Terms of Use{" "}
            </a>{" "}
            •{" "}
            <a href="# " className="text-dark a">
              Privacy Policy{" "}
            </a>
          </p>
        </div>
      </div>

      <button className="myBtn" title="Add New Blog">
        {" "}
        <span style={{ position: "relative", top: "-4px" }}> +</span>
      </button>
    </div>
  );
}

export default Blog;
