import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { useAppState } from "../context/AppProvider";
import "./Login.css";

function Login() {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  const signIn = (e) => {
    // e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const { additionalUserInfo, credential, user } = result;

        window.sessionStorage.setItem("user", JSON.stringify(result));
        dispatch({
          type: "AUTH_USER",
          payload: result,
        });
        navigate('/')
      })
      .catch((error) => {
        alert(error.mesage);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-afym5u/Slack_Mark_Web.png"
          alt=""
        />
        <h1>Welcome to the Slack Clone Please Sign In</h1>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
