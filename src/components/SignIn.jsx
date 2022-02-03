import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./LoginForm.jsx";

const signInURL = "http://ec2-3-225-116-189.compute-1.amazonaws.com:3000";

const SignIn = ({
  captureUser,
  handleClose,
  login,
  signUp,
  changedLoggedIn,
}) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const Logout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  // const Logout = () => {

  //   let logoutObj = {};
  //   axios.put('/users/logout', logoutObj)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error('user logout error:', error);
  //     })
  // }
  return (
    <div className="signinview">
      <div className="signindiv">
        {user.email === "" ? (
          <LoginForm
            login={login}
            changedLoggedIn={changedLoggedIn}
            handleClose={handleClose}
            signUp={signUp}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SignIn;
