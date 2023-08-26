import React, { useState } from "react";
import { URL } from "../../Utils/Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [userEmail, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const login = async () => {
    // console.warn(userEmail, Password);

    var data = JSON.stringify({
      userEmail: userEmail,
      Password: Password,
    });

    var config = {
      method: "post",
      url: `${URL}/autenticate/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === 200) {
          // alert("logged successful");
          // toast.success("Login Successful");

          localStorage.setItem("token", response.data.token);
          localStorage.setItem(
            "userName",
            JSON.stringify(response.data.results[0].user_name)
          );

          navigate("/Main");
        } else if (response.status === 404) {
          //   toast.success('error Notification !', {
          //     position: toast.POSITION.TOP_RIGHT
          // });

          alert("please enter correct details");
        } else {
          alert("Internal server error!!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ backgroundColor: "#698db2" }}>
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title" style={{ fontFamily: "initial" }}>
              Signup Into Account
            </h3>

            <div className="form-group mt-4">
              <label style={{ fontFamily: "initial", fontSize: 18 }}>
                Email Address :
              </label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label style={{ fontFamily: "initial", fontSize: 18 }}>
                Password :
              </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2 mt-3 ">
              <center>
                <button
                  type="submit"
                  onClick={login}
                  style={{
                    backgroundColor: "#698db2",
                    color: "#fff",
                    textTransform: "initial",
                    fontSize: 17,
                    fontFamily: "initial",
                    width: 290,
                  }}
                  className="btn btn-sm "
                >
                  Login
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
