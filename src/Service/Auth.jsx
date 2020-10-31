import config from "../Config/config"
// import Swal from "sweetalert2";
// let authToken = localStorage.getItem("Token");


// const CLIENT_ID = "Resume-Builder";
// const GRANT_TYPE = "password";

// export async function getLogin(username, password) {
//     return fetch(config.apiUrl.login, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
        
//       },
//       body: `grant_type=${GRANT_TYPE}&username=${username}&password=${password}&client_id=${CLIENT_ID}`,
//     })
//       .then((response) => {
//         localStorage.setItem("Token",response.data["access_token"] )
       
//           console.log(response.status)
//         return response.json();
//       })
//       .catch((err) => {
       
//         console.log(err);
//       });
//   }
  

export async function getUser(username) {
  let products = new Promise((resolve, reject) => {
    fetch(
      `${config.apiUrl.profile}${username}/`,
      config.head
    )
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}