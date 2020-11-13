import React, { useState, useEffect } from "react";
import moment from "moment";
import { getBlogDetails, getUserBlogList } from "../../Service/Blog";
import { followUser } from "../../Service/User";

function BlogDetail(props) {
  const [lol, setLol] = useState({});
  const [author, setAuthor] = useState({});
  const [name, setName] = useState({});

  useEffect(() => {
    getBlogDetails(props.match.params.pk).then((data) => {
      setAuthor(data.author);
      setLol(data);
    });
    getUser();
  }, []); //[] leave black means you will not repet your url

  const getUser = () => {
    getUserBlogList(props.match.params.slug).then((data) => {
      setName(data);
    });
  };

  const getFollow = (e) => {
    e.preventDefault();
    followUser(props.match.params.slug).then((data) => {});
  };

  return (
    <div className="card   bg-gray-100 bg-opacity-25 ">
      <div className="lg:w-10/12 lg:mx-auto mb-0 ">
        <div className="flex flex-wrap -mx-px md:-mx-1 ">
          <div className="body_tag col-md-12 p-px  ">
            <div className="main_section">
              <div className="row">
                <div className="col-sm-2">
                  <img
                    src={
                      "https://i.ibb.co/WzYTTSf/66996194-394482144528868-896954686559485952-n.jpg"
                    }
                    alt="66996194-394482144528868-896954686559485952-n"
                    className="main_image"
                  />
                </div>
                <div className="col-sm-8">
                  <h5>
                    {" "}
                    By{" "}
                    <strong>
                      {author.fullname ? author.fullname : author.username}
                    </strong>{" "}
                    &nbsp;
                    <span>
                      {localStorage.getItem("username") === author.username ? (
                        <a
                          href="/edit/profile/"
                          className="bg-white-500 px-2 py-1
                        text-black border font-semibold text-sm rounded "
                        >
                          Edit Profile
                        </a>
                      ) : (
                        <span>
                          {name.followed_by_req_user === false ? (
                            <a
                              href="# "
                              onClick={getFollow}
                              className="bg-blue-500 px-2 py-1
                        text-white font-semibold text-sm rounded block text-center
                        sm:inline-block block"
                            >
                              Follow
                            </a>
                          ) : (
                            <a
                              href="# "
                              onClick={getFollow}
                              className="bg-white-500 px-2 py-1 text-dark
                                                     text-white font-semibold text-sm rounded block text-center
                                                     sm:inline-block block border"
                            >
                              Following
                            </a>
                          )}
                        </span>
                      )}
                    </span>
                  </h5>
                  <p> {author.bio ? author.bio : ""}</p>

                  <div className="row" style={{ width: "20%" }}>
                    <div className="col-sm-2">
                      {" "}
                      <a
                        href="https://www.facebook.com/imrrraj"
                        style={{ marginRight: "14px" }}
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div className="col-sm-2">
                      <a
                        href="https://www.instagram.com/rajr97555/"
                        style={{ marginRight: "14px" }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div className="col-sm-2">
                      <a
                        href="https://www.linkedin.com/in/iamrraj/"
                        style={{ marginRight: "14px" }}
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                    <div className="col-sm-2">
                      {" "}
                      <a href="https://github.com/iamrraj">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog_detail">
              <h3 style={{ opacity: "0.7" }} class="text-center">
                {lol.header}
              </h3>
              <hr />
              <br />
              <h1 className="title text-center">{lol.title}</h1>
              <br />

              <p className="user_don">
                <i className="fa"> &#xf073; </i> sfs
                {moment(lol.timestamp).format("DD-MM-YYYY")} &nbsp;
                <i className="fa fa-user"> </i>
                <a href="# ">
                  {" "}
                  fdfsf
                  {author.fullname ? author.fullname : author.username}
                </a>{" "}
                &nbsp;
                <i className="fa">&#xf017; </i> {lol.read_time}
                Minutes Read &nbsp; <i className="fa fa-comment"></i> 0 Comments
                &nbsp; <i className="fa">&#xf06e;</i> {lol.views} Views
                {/*  */}
              </p>
              <br></br>
              <div className="image_section">
                {/* <img
                src={
                  c.photo
                    ? c.photo
                    : "https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg"
                }
                alt={c.title}
                className="img"
              /> */}
                <img
                  src="https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg"
                  alt="title"
                  className="img"
                />
              </div>

              <div className="details_section">
                <p className="body_text"></p>
                {/* <p>
                  {c.get_tags.map((app) => (
                    <button className="btn btn_tag">
                      <a href={baseUrl + "/tag/list/" + app} className="done">
                        # {app}
                      </a>
                    </button>
                  ))}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
