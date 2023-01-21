import axios from "axios";
const API_URL = "http://localhost:45000/api/v1/auth";
const loginAuth = (username, Password) => {
  return new Promise((resolve, reject) => {
    const req = {
      username: username,
      password: Password,
    };
    const jsonReq = JSON.stringify(req);
    axios
      .post(API_URL + "/login", jsonReq, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.success) {
          const gotData = res.data.data;
          localStorage.setItem("token", gotData.token);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { loginAuth };
