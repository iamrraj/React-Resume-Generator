import React from "react";

import { followUser } from "../../Service/User";
function Likers(props) {
  //   useEffect(() => {
  //     props.data;
  //   });

  const getFollow = (username) => (e) => {
    e.preventDefault();
    followUser(username).then((data) => {});
  };
  return (
    <div id="ex13" class="modal">
      <a href="# " rel="modal:close" className="float-right">
        <i className="fa fa-times fa-2x"></i>
      </a>
      <div>
        <h5 className="text-center">User Who likes Post</h5>
        <hr></hr>
        {props.data.length > 0 ? (
          <span>
            {props.data.map((C, i) => (
              <div className="row" key={i + 1}>
                <div className="col-sm-9">
                  <a href={`/user/${C.username}/`}>
                    <div className="card-header d-flex  align-items-center bg-white">
                      <img
                        className="img-fluid border rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src={
                          C.profile_pic
                            ? C.profile_pic
                            : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                        }
                        alt=""
                      />

                      <div className="ml-3">
                        <h5 className="font-weight-bold text-dark full_name m-0">
                          {C.fullname}{" "}
                          <span style={{ position: "relative", top: "10px" }}>
                            {C.is_verify === true && (
                              <span
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
                          </span>
                        </h5>
                        <h5 className="font-weight-bold full_name  text-secondary m-0">
                          {C.username}{" "}
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-3">
                  {localStorage.getItem("username") === C.username ? (
                    <a href="/edit/profile/">.</a>
                  ) : (
                    <span>
                      {C.followed_by_req_user === false ? (
                        <a
                          href="# "
                          onClick={getFollow(C.username)}
                          style={{ marginTop: "18px" }}
                          className="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center
                        sm:inline-block block"
                        >
                          Follow
                        </a>
                      ) : (
                        <a
                          href="# "
                          style={{ marginTop: "18px" }}
                          onClick={getFollow(C.username)}
                          className="bg-white-500 px-2 py-1 text-dark card-header
                                                     text-white font-semibold text-sm rounded block text-center
                                                     sm:inline-block block border"
                        >
                          Following
                        </a>
                      )}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </span>
        ) : (
          <span>Loading ...</span>
        )}
      </div>
    </div>
  );
}

export default Likers;
