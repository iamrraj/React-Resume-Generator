import config from "../Config/config"



export async function getResume() {
    let products = new Promise((resolve, reject) => {
      fetch(
        config.apiUrl.resumeuser,
        config.head
      )
        .then((response) => {
          resolve(response.json());
        })
        .catch((reject) => console.log(reject));
    });
    return products;
  }


  export async function deleteResume(id) {
    let products = new Promise((resolve, reject) => {
      fetch(`${config.apiUrl.resume}${id}/`, config.headDelete)
        .then((response) => {
          resolve(response.json());
        })
        .catch((reject) => console.log(reject));
    });
    return products;
  }
  