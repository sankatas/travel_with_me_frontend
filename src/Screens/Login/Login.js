import React, { useState } from "react";
import { URL } from "../../Utils/Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import home1 from '../../Assets/home1.jpg';
import "./Login.css";
import Header from '../Header/Header';

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

          navigate("/home");
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
    <div className="login-main black-bg">
      <Header />
      <div >
        <img className="header-image" src={home1} alt="" />
        <div className="Auth-form-container">
          <div className="Auth-form">
            <div className="Auth-form-content">

                <div className="form-group mt-4">
                  <label style={{ fontFamily: "initial", fontSize: 18 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    // placeholder="Enter Email.."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label style={{ fontFamily: "initial", fontSize: 18 }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    // placeholder="Enter Password.."
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              <div className="d-grid gap-2 mt-3 custom-button">
               
                  <button
                    type="submit"
                    onClick={login}
                    className="btn btn-sm "
                  >
                    Login
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
