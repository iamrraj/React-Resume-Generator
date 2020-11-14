const api = `https://inback.herokuapp.com/api/1/`;
//const api = `http://localhost:8000/api/1/` ? `http://localhost:8000/api/1/` :  `https://inback.herokuapp.com/api/1/` ;

let authToken = localStorage.getItem("Token");
const config = {
  apiUrl: {
    me: `${api}me/`,
    login: `${api}oauth/token/dashboard/`, // oauth/token/`,
    profile: `${api}user/`,
    user: `${api}user/`,

    comment: `${api}post/comment/`,
    post: `${api}post/`,

    feed: `${api}post/feed/`,
    avatar: `${api}user/edit/user/avatar/`,
    edit: `${api}user/edit/me/`,
    like: `${api}post/like/`,
    updateProfile: `${api}user/edit/me/`,
    register: `${api}user/register/`,
    forgetPassword: `${api}user/api/sendForgottenPasswordEmail/`,
    changeForgottenPassword: `${api}user/api/changeForgottenPassword/`,
    passwordChnage: `${api}user/change/password/`,
    resume: `${api}data/resume/`,
    resumeuser: `${api}data/resume/user/`,
    langauge: "https://www.mocky.io/v2/5e4eed892f00006c0016ac21",
  },

  blog: {
    blog_list: `${api}blog/`,
    user_blog_list: `${api}user/blog/`,
  },

  head: {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
  },

  headPost: {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + authToken,
    },
  },

  headDelete: {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
  },
};

export default config;
