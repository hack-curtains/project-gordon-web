import React, { useState, useEffect } from "react";
import axios from "axios";
import profile90 from "../../dist/resources/ProfileView/icons8-user-90.png";

const ProfileView = ({
  captureNavigation,
  openLogin,
  changedLoggedIn,
  userObj,
  loggedIn,
  clearUser,
}) => {
  const [user, setUser] = useState({
    name: "Winston Pantelakos",
    email: "winstonspantelakos@gmail.com",
  });
  const [showSignIn, setShowSignIn] = useState(!loggedIn);

  return (
    <div className="profileview">
      <div className="profileviewimage">
        <img src={profile90}></img>
      </div>
      {loggedIn === true ? (
        <>
          <div className="profilename">
            <strong>Name: </strong>
            {userObj.name}
          </div>
          <div className="profileemail">
            <strong>Email: </strong>
            {userObj.email}
          </div>
          <button
            className="bigButton blue"
            name="favorites"
            onClick={(e) => captureNavigation("favorites")}
          >
            Favorites
          </button>
        </>
      ) : (
        <div className="profileComment">
          Please click the button below to log in or create a profile.
        </div>
      )}

      {loggedIn === true ? (
        <button
          onClick={(e) => {
            setShowSignIn(true);
            setUser({ name: "", email: "" });
            changedLoggedIn();
            clearUser();
          }}
          className="bigButton red"
        >
          Sign Out
        </button>
      ) : (
        <button onClick={(e) => openLogin()} className="bigButton blue">
          Sign In
        </button>
      )}
    </div>
  );
};

export default ProfileView;

// {/* <div className="profileuser">{user.name}</div> */}
