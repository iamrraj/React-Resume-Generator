import React, { useState } from "react";
import config from "../../Config/config";
import Swal from "sweetalert2";
function AddFeed() {
  const [image, setImage] = useState({
    photo: null,
    text: "",
    location: "",
    preview: "",
  });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        photo: e.target.files[0],
      });
    }
  };
  const handleChangeText = (event) => {
    const { name, value } = event.target;
    setImage({ ...image, [name]: value });
    console.log(image);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading",
      type: "warning",
      showCancelButton: false,
      showConfirmButton: false,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const formData = new FormData();
    let authToken = localStorage.getItem("Token");

    formData.append("text", image.text);
    formData.append("location", image.location);
    formData.append("photo", image.photo);

    await fetch(config.apiUrl.post, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + authToken,
      },
      body: formData,
    })
      .then((response) => {
        Swal.fire({
          title: "Post Added",
          icon: "success",
          text: "Sucessfully added new post",
          showConfirmButton: false,
          timer: 3000,
        });
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      })
      .catch((reject) => {
        console.log(reject);
        Swal.fire({
          title: "Login Error",
          icon: "error",
          text: "error",
          timer: 2000,
        });
      });
  };

  return (
    <div id="ex1" class="modal">
      <a href="# " rel="modal:close" className="float-right">
        <i className="fa fa-times fa-2x"></i>
      </a>
      <div className="post_add">
        <h4 className="text-center">NEW POST</h4>
        <hr></hr>
        <div className="row">
          <div className="col-md-5">
            <img
              src={
                image.photo == null
                  ? "https://60qlzg8tna-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/BlogWriting.png"
                  : image.preview
              }
              alt="Forget Password"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-md-7">
            <form onSubmit={handleUpload}>
              <div className="form-group">
                <div class="upload-btn-wrapper ">
                  <button class="btn112" style={{ fontSize: "14px" }}>
                    <i className="fa fa-upload"></i> Upload Post Image
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    name="photo"
                    onChange={handleChange}
                  />
                </div>

                <div class="form-group" style={{ marginTop: "15px" }}>
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="Location"
                    value={image.location}
                    onChange={handleChangeText}
                  />
                </div>

                <div class="form-group" style={{ marginTop: "10px" }}>
                  <textarea
                    name="text"
                    className="form-control"
                    placeholder="Post Text"
                    rows="3"
                    value={image.text}
                    onChange={handleChangeText}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                value="Login"
                className="btn btn-login btn-block "
              >
                NEW POST
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFeed;
