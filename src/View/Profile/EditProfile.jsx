import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser, EditUser } from "../../Service/User";
function EditProfile() {
  const [name, setName] = useState([]);
  const [product, setProduct] = useState({
    email: "",
    username: "",
    phone_number: "",
    website: "",
    fullname: "",
    bio: "",
    image: null,
  });

  useEffect(() => {
    handleUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // let formData = new FormData();

    EditUser(product).then((data) => {});
  };

  const handleUser = () => {
    getUser().then((data) => {
      // console.log(data);
      setName(data);
      setProduct({
        ...product,
        image: data.profile_pic,
        email: data.email,
        username: data.username,
        emailNew: data.email,
        phone_number: data.phone_number,
        website: data.website,
        fullname: data.fullname,
        bio: data.bio,
      });
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  //const baseUrl = process.env.PUBLIC_URL;
  return (
    <div className="container hip1 " id="edit_profiile">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image">
                  <img
                    src="https://img.favpng.com/8/24/15/interview-icon-profiles-icon-portfolio-icon-png-favpng-YqqDgDpiDEmRwbpqGDqLcDrp0.jpg"
                    alt="Forget Password"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col-lg-6 don_sm">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h3 hee forget_name text-gray-900 mb-2">
                        EDIT PROFILE
                      </h1>
                      <div className="card-header d-flex  align-items-center bg-white">
                        <Link to="" className="my-1 ml-2">
                          <img
                            className="img-fluid border rounded-circle"
                            style={{ width: "80px", height: "80px" }}
                            src={
                              name.profile_pic
                                ? name.profile_pic
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
                            <h5 className="font-weight-bold text-dark m-0">
                              {product.fullname}
                            </h5>
                            <h5 className="font-weight-bold  text-secondary m-0">
                              {product.username}
                            </h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <form
                      className="user "
                      onSubmit={handleSubmit}
                      autoComplete="off"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          name="fullname"
                          className="form-control"
                          placeholder="Full Name"
                          value={product.fullname}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Username"
                          value={product.username}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="website"
                          className="form-control"
                          placeholder="Website"
                          value={product.website}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          placeholder="Email"
                          value={product.email}
                          onChange={handleInputChange}
                          type="email"
                          className="form-control"
                          name="email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          placeholder="Phone Number"
                          value={product.phone_number}
                          onChange={handleInputChange}
                          type="text"
                          className="form-control"
                          name="phone_number"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="bio"
                          className="form-control"
                          placeholder="About Yourself"
                          value={product.bio}
                          onChange={handleInputChange}
                          row="5"
                        />
                      </div>

                      <button
                        type="submit"
                        value="Login"
                        className="btn btn-login btn-block "
                      >
                        Save Changes
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a
                        className="small h5 "
                        href="/blog/list/"
                        style={{ color: "#b71c1c", opacity: "0.8" }}
                      >
                        Home Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
