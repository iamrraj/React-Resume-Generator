import React, { useState, useEffect, Suspense } from "react";
import { getUserDetail } from "../../Service/User";
import { followUser } from "../../Service/User";
import "./Profile.css";

function Profile(props) {
  const [name, setName] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    getUserDetail(props.match.params.username).then((data) => {
      setName(data);
      setPost(data.user_posts);
    });
    //  getUser();
  }, [name]);

  const getFollow = (name) => (e) => {
    e.preventDefault();
    followUser(name).then((data) => {}); //props.match.params.slug
  };

  return (
    <div className="">
      <main className="bg-gray-100 bg-opacity-25">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              {/* <!-- profile image --> */}
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1"
                src={
                  name.profile_pic
                    ? name.profile_pic
                    : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                }
                alt="profile"
              />
            </div>

            {/* <!-- profile meta --> */}
            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {name.username}
                </h2>

                {/* <!-- badge --> */}
                {name.is_verify && (
                  <span
                    style={{ marginTop: "15px" }}
                    className="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2"
                    aria-hidden="true"
                  >
                    <i
                      className="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"
                    ></i>
                  </span>
                )}

                {/* <!-- follow button --> */}

                <span
                  className="block text-center 
                        sm:inline-block block"
                >
                  <span>
                    {localStorage.getItem("username") === name.username ? (
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
                            onClick={getFollow(name.username)}
                            className="bg-blue-500 px-2 py-1
                        text-white font-semibold text-sm rounded block text-center
                        sm:inline-block block"
                          >
                            Follow
                          </a>
                        ) : (
                          <a
                            href="# "
                            onClick={getFollow(name.username)}
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
                  <button
                    className="btn profile-settings-btn"
                    aria-label="profile settings"
                  >
                    <i
                      className="fas fa-cog "
                      aria-hidden="true"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </button>
                </span>
              </div>

              {/* <!-- post, following, followers list for medium screens --> */}
              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">
                    {" "}
                    {name.number_of_posts ? name.number_of_posts : 0}{" "}
                  </span>
                  posts
                </li>

                <li>
                  <span className="font-semibold">
                    {name.number_of_followers ? name.number_of_followers : 0}{" "}
                  </span>
                  followers
                </li>
                <li>
                  <span className="font-semibold">
                    {name.number_of_following ? name.number_of_following : 0}{" "}
                  </span>
                  following
                </li>
              </ul>

              {/* <!-- user meta form medium screens --> */}
              <div className="hidden md:block">
                <h6 className="font-semibold">
                  {name.fullname ? name.fullname : name.username}
                </h6>

                <p>{name.bio ? name.bio : ""}</p>
              </div>
            </div>

            {/* <!-- user meta form small screens --> */}
            <div className="md:hidden text-sm my-2">
              <h6 className="font-semibold">
                {" "}
                {name.fullname ? name.fullname : name.username}
              </h6>
              <p>{name.bio ? name.bio : ""}</p>
            </div>
          </header>

          {/* <!-- posts --> */}
          <div className="px-px md:px-3">
            {/* <!-- user following for mobile only --> */}
            <ul
              className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span className="font-semibold text-gray-800 block">
                  {" "}
                  {name.number_of_posts ? name.number_of_posts : 0}{" "}
                </span>
                posts
              </li>

              <li>
                <span className="font-semibold text-gray-800 block">
                  {" "}
                  {name.number_of_followers ? name.number_of_followers : 0}{" "}
                </span>
                followers
              </li>
              <li>
                <span className="font-semibold text-gray-800 block">
                  {" "}
                  {name.number_of_following ? name.number_of_following : 0}{" "}
                </span>
                following
              </li>
            </ul>

            {/* <!-- insta freatures --> */}
            <ul
              className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t"
            >
              {/* <!-- posts tab is active --> */}
              <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a className="inline-block p-3" href="# ">
                  <i className="fas fa-th-large text-xl md:text-xs"></i>
                  <span className="hidden md:inline">post</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="# ">
                  <i className="far fa-square text-xl md:text-xs"></i>
                  <span className="hidden md:inline">igtv</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="# ">
                  <i
                    className="fas fa-user border border-gray-500
                             px-1 pt-1 rounded text-xl md:text-xs"
                  ></i>
                  <span className="hidden md:inline">tagged</span>
                </a>
              </li>
            </ul>
            {/* <!-- flexbox grid --> */}
            <div className="flex flex-wrap -mx-px md:-mx-3">
              {/* <!-- column --> */}

              {post.length > 0
                ? post.map((c, i) => (
                    <div className="w-1/3 p-px md:px-3" key={i + 1}>
                      <a href="# ">
                        <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                          <Suspense
                            fallback={
                              <img
                                src="https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                                alt="sdsd"
                              />
                            }
                          >
                            <img
                              className="w-full h-full absolute left-0 top-0 object-cover"
                              src={
                                c.photo
                                  ? c.photo
                                  : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                              }
                              alt="Logo"
                            />
                          </Suspense>

                          {/* <i class="fas fa-video absolute right-0 top-0 m-1"></i> */}

                          {/* <!-- overlay--> */}
                          <div
                            className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                          >
                            <div
                              className="flex justify-center items-center 
                                    space-x-4 h-full"
                            >
                              <span className="p-2 font-bold">
                                <i className="fas fa-heart"></i>{" "}
                                {c.number_of_likes}
                              </span>

                              <span className="p-2 font-bold">
                                <i className="fas fa-comment"></i>{" "}
                                {c.number_of_comments}
                              </span>
                            </div>
                          </div>
                        </article>
                      </a>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </main>
      <button className="myBtn" title="Add New Post">
        {" "}
        <span style={{ position: "relative", top: "-4px" }}> +</span>
      </button>
    </div>
  );
}

export default Profile;
