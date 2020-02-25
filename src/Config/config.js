const api = `https://softbike.herokuapp.com/api/1/`;

const config = {
  apiUrl: {
    me: `${api}me/`,
    login: `${api}oauth/token/`,
    user: `${api}blog/user/`,
    blog: `${api}blog/`,
    profile: `${api}profilee/`,
    userlist: `${api}profile/`,
    adminblog: `${api}blog/`,
    status: `${api}user-status/`,
    newsletter: `${api}newsletter/`,
    register: `${api}user/register/`,
    resume: `${api}data/resume/`,
    resumeuser: `${api}data/resume/user/`,
    langauge: "https://www.mocky.io/v2/5e4eed892f00006c0016ac21"
  }
};

export default config;
