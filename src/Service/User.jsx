import config from "../Config/config";
import Swal from "sweetalert2";
let authToken = localStorage.getItem("Token");

export async function getUserDetail(name) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.user}${name}/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function followUser(name) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.user}${name}/follow/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function postComment1(product, id) {
  return fetch(`${config.apiUrl.comment}${id}/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + authToken,
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function deletePost(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.post}${id}/`, config.headDelete)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function deleteComment(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.comment}${id}/`, config.headDelete)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getFeed() {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.feed}`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getLiker(liker) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.post}${liker}/get-likers/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function likePost(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.like}${id}/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getUser(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.edit}`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function EditUser(product) {
  return fetch(`${config.apiUrl.edit}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + authToken,
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.status === 200) {
        Swal.fire({
          title: "Update",
          icon: "success",
          text: "Profile Update success fully !",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
          title: "Error !",
          icon: "error",
          text: " ERROR WHILE UPDATE PROFILE !",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function deleteUser(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.edit}`, config.headDelete)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}
