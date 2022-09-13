import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";

export const Facebook = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

    
  const responseFacebook = response => {
    // console.log(response);

    setIsLoggedIn(true);
    setUserID(response.userID);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);

    console.log("Redirecting in 2 seconds");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const componentClicked = () => console.log("clicked");

  let fbContent = (isLoggedIn) ? (
    <div
      style={{
        width: "400px",
        margin: "auto",
        background: "#f4f4f4",
        padding: "20px"
      }}
    >
      <img src={picture} alt={name} />
      <h2>Welcome {name}</h2>
      Email: {email}
    </div>
  ) : (
    <FacebookLogin
      appId="386658159994023"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  )

  return (
    <div>{fbContent}</div>
  )
}
