import { loginAuth } from "../../services/utils";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Navigate(`/`);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    loginAuth(username, password)
      .then((res) => {
        console.log(res);
        if (res.success) {
          console.log("Login Success");
          Navigate("/");
        }
      })
      .catch((err) => {
        const errMsg = err.response.data.message;
        setErrorShow(true);
        setErrorMsg(errMsg);
      });
  };

  return (
    <div className="App">
      <div className="App-header">
        <div>
          {errorShow ? (
            <div class="alert alert-danger input-group-text" role="alert">
              {errorMsg}
            </div>
          ) : (
            ""
          )}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Username
                </span>
              </div>
              <input
                type="text"
                class="form-control username"
                placeholder="Enter Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2">
                  Password
                </span>
              </div>
              <input
                type="password"
                class="form-control password"
                placeholder="Enter Password"
                aria-describedby="basic-addon2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
