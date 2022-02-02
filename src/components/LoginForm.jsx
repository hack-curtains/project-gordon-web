import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = ({ login, signUp, handleClose, changedLoggedIn, clearUser }) => {
  const [details, setDetails] = useState({name: '', email: '', password: ''});
  const [newUser, setNewUser] = useState(false);
  // const [validLogin, setValidLogin] = useState(true);

  // const checkUserInput = (details) => {
  //   console.log('this is being fired', details)

  //   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   console.log(' test :', re.test(details.email))
  //   if (re.test(details.email) === false) {
  //     setValidLogin(false);
  //   }
  //   if (re.test(details.email) === true) {
  //     setValidLogin(true);

  //   }
  //   // console.log('new valid login:', validLogin)
  //   // return validLogin;

  // }


  const submitLogin = e => {
    e.preventDefault();

    login(details);
    handleClose();
    changedLoggedIn();


  }

  const submitSignUp = e => {
    e.preventDefault();
      signUp(details);
      handleClose();
      changedLoggedIn();

  }



  return (
    <>
      {newUser === false ? (<>
        <form className="signinform" onSubmit={submitLogin}>
          <div className="form-inner">
            <h2>Login</h2>

            <div className="form-group">
              <label htmlFor="email">Email:* </label><br></br>
              <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:* </label><br></br>
              <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div><br></br>
            <input type="submit" className="loginsubmit" value="Login" />
          </div>
        </form>
      <div>
      <br></br>
        <button onClick={e => setNewUser(true)} className="signinbutton" >Sign Up</button>
      </div></>) : (<>
        <form  className="signinform" onSubmit={submitSignUp}>
          <div className="form-inner">
            <h2>Sign Up</h2>

            <div className="form-group">
              <label htmlFor="name">Name:* </label><br></br>
              <input type="name" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:* </label><br></br>
              <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:* </label><br></br>
              <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <br></br>
            <input type="submit" className="signupsubmit" value="Sign Up" />
          </div>
        </form>
      </>)}
    </>
  )
}

export default LoginForm;