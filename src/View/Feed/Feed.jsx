import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  getFeed,
  likePost,
  postComment1,
  deleteComment,
  deletePost,
  getLiker,
} from "../../Service/User";
import "./Feed.css";
import AddFeed from "./AddFeed";
import Likers from "./Likers";

function Feed() {
  const [feed, setFeed] = useState([]);
  const [like, setLike] = useState([]);

  const [product, setProduct] = useState({
    text: "",
  });

  useEffect(() => {
    getFeed().then((data) => {
      // console.log(data);
      setFeed(data);
    });
  });

  const getLike = (id) => (e) => {
    e.preventDefault();
    likePost(id).then((data) => {});
  };

  const likerLst = (id) => (e) => {
    e.preventDefault();
    getLiker(id).then((data) => {
      setLike(data.results);
    });
  };

  const getComment = (id) => (e) => {
    e.preventDefault();
    postComment1(product, id).then((data) => {
      setProduct(data);
    });
    e.target.reset();
  };

  const removeComment = (id) => (e) => {
    e.preventDefault();
    deleteComment(id).then((data) => {});
  };
  const removePost = (id) => (e) => {
    e.preventDefault();
    deletePost(id).then((data) => {});
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="card   bg-gray-100 bg-opacity-25 ">
      <AddFeed />

      {feed.length > 0 ? (
        <div
          className="lg:w-8/12 lg:mx-auto mb-0 "
          style={{ paddingBottom: "30px" }}
        >
          <div className="flex flex-wrap -mx-px md:-mx-1 ">
            {feed.map((d, i) => (
              <div
                className="col-md-8 p-px md:px-2 border m-10"
                key={i + 1}
                style={{ padding: "0px", marginBottom: "-10px" }}
              >
                <div className="card-header d-flex  align-items-center bg-white">
                  <Link to="" className="my-1 ml-2">
                    <img
                      className="img-fluid border rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                      src={
                        d.author.profile_pic
                          ? d.author.profile_pic
                          : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="ml-3">
                    <Link
                      to={""} //{`/profile/${photo.author.username}`}
                      className="text-decoration-none"
                    >
                      <h6 className="font-weight-bold text-dark m-0">
                        {d.author.username}
                      </h6>
                    </Link>
                    <p className="m-0"> {d.location ? d.location : ""}</p>
                  </div>
                  {localStorage.getItem("Username") === d.author.username ? (
                    <div className="dropdown ml-auto mr-3">
                      <i
                        class="fas fa-ellipsis-v"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                      />
                      <div class="dropdown-menu dropdown-menu-right">
                        <button
                          className="btn dropdown-item m-0 p-0"
                          onClick={removePost(d.id)}
                        >
                          <p className="m-1 text-center">
                            <i class="far fa-trash-alt" /> Delete
                          </p>
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>

                <img
                  className="w-full h-full  left-0 top-0 object-cover"
                  style={{ height: "450px" }}
                  src={
                    d.photo
                      ? d.photo
                      : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                  }
                  alt=""
                />
                <div className="card-body">
                  <section>
                    <button className="btn p-0" onClick={getLike(d.id)}>
                      {d.liked_by_req_user === true ? (
                        <i
                          class="fas fa-heart fa-2x"
                          style={{ color: "red", fontSize: "22px" }}
                        />
                      ) : (
                        <i
                          className="far fa-heart fa-2x"
                          style={{ fontSize: "22px" }}
                        />
                      )}
                    </button>
                    <button className="btn p-0">
                      <i
                        className="ml-2 far fa-comment fa-2x"
                        style={{ fontSize: "22px" }}
                      />
                    </button>
                  </section>
                  <section style={{ fontSize: "16px" }}>
                    <Likers data={like} data1={likerLst} />

                    <a href="# " className="text-decoration-none">
                      <p className="font-weight-bold text-dark m-0 mt-2">
                        <a
                          href="#ex13"
                          rel="modal:open"
                          className="text-dark"
                          onClick={likerLst(d.id)}
                        >
                          {d.number_of_likes} likes
                        </a>
                      </p>
                    </a>
                  </section>

                  <section className="mt-2" key={i + 1}>
                    <section className="mt-2" style={{ fontSize: "15px" }}>
                      <Link to={""} className="text-decoration-none">
                        <h6
                          className="d-inline font-weight-bold text-dark m-0"
                          style={{ fontSize: "15px" }}
                        >
                          {d.author.username}
                        </h6>
                      </Link>
                      <p className="d-inline"> {d.text}</p>
                    </section>
                  </section>
                  {d.post_comments.map((c, i) => (
                    <section className="mt-2" key={i + 1}>
                      <section className="mt-2" style={{ fontSize: "15px" }}>
                        <Link to={""} className="text-decoration-none">
                          <h6
                            className="d-inline font-weight-bold text-dark m-0"
                            style={{ fontSize: "15px" }}
                          >
                            {c.author.username}
                          </h6>
                        </Link>
                        <p className="d-inline"> {c.text}</p>
                      </section>

                      {localStorage.getItem("username") ===
                      c.author.username ? (
                        <section
                          className="float-right"
                          style={{ marginTop: "-15px" }}
                        >
                          <a
                            href="# "
                            className="text-secondary"
                            onClick={removeComment(c.id)}
                          >
                            <i
                              className="fas fa-trash fa-2x"
                              style={{
                                fontSize: "16px",
                              }}
                            />
                          </a>
                        </section>
                      ) : (
                        ""
                      )}
                    </section>
                  ))}

                  {/* {photo.post_comments.map((comment) => (
          <Comment comment={comment} />
        ))} */}

                  <section>
                    <small
                      className="text-muted text-uppercase "
                      style={{ fontSize: "11px" }}
                    >
                      {moment(d.posted_on).fromNow()}
                    </small>
                    <hr />
                  </section>
                  <section>
                    <form className="form_comment" onSubmit={getComment(d.id)}>
                      <input
                        type="text"
                        name="text"
                        onChange={handleInputChange}
                        style={{
                          background: "white",
                          width: "460px",
                          border: "none",
                          outline: "none",
                        }}
                        className="input_from"
                        placeholder="Add a comment..."
                      />
                      <button className="btn post">Post</button>
                    </form>
                  </section>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="not_available"> There is not any post available</p>
      )}

      <a className="myBtn" title="Add New Post" href="#ex1" rel="modal:open">
        {" "}
        <span style={{ position: "relative", top: "-4px", left: "17px" }}>
          {" "}
          +
        </span>
      </a>
    </div>
  );
}

export default Feed;
//onSubmit={this.onSubmit(photo.id)}
