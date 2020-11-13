import config from "../Config/config";

export async function getBlog() {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.blog.blog_list}`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getBlogByTag(tag) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.blog.blog_list}list/?tags__name=${tag}`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}
export async function getBlogByUSer(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.blog.blog_list}list/?author=${id}`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getBlogDetails(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`https://inback.herokuapp.com/api/1/blog/list/${id}/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getUserBlogList(user) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.blog.user_blog_list}${user}/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getLikeBlog(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.blog.blog_list}like/${id}/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}

export async function getLikerList(id) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.blog.blog_list}${id}/get-likers/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}
