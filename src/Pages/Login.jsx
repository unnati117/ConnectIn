import React from "react";
import LoginComponent from "../components/LoginComponent";
import { LoginAPI } from "../api/AuthAPI";
// LoginAPI is a function so we can import it
const Login = () => {
  return <LoginComponent />;
};

export default Login;
