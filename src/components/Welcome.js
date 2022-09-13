import React, { useState, useEffect } from 'react'

export const Welcome = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [memberSince, setMemberSince] = useState("");

  const convertTimeToSuitableUnit = (time) => {
    if (time < 1000) {
      return `${time} ms`;
    } else {
      time = Math.floor(time / 1000);   // time in seconds now
      if (time < 60) {
        return `${time} seconds`;
      } else {
        time = Math.floor(time / 60);   // time in minutes now
        if (time < 60) {
          return `${time} miunte(s)`;
        } else {
          time = Math.floor(time / 60);   // time in hours now
          if (time < 24) {
            return `${time} hour(s)`;
          } else {
            time = Math.floor(time / 24);   // time in days now
            return `${time} day(s)`;
          }
        }
      }
    }
  }

  const fetchUser = async () => {
    if (localStorage.email) {
      const response = await fetch("http://localhost:5000/fetchUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${localStorage.email}`
      });
      const data = await response.json();

      setFirstName(data.firstName);
      setEmail(data.email);
      setMemberSince(convertTimeToSuitableUnit(new Date() - new Date(data.timestamp)));
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])
  
    
  return (
    <div
      className="container my-3"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "1rem",
        color: "#fff"
      }}
    >
      {localStorage.email && (
        <div className='d-flex'>
          <img src='https://pbs.twimg.com/profile_images/1485273631177412612/Hrs4GXxs_400x400.jpg' width={100} height={100} style={{borderRadius:"50%"}}/>
          <div className="mx-3">
          <h1>Welcome back, {firstName}</h1>
          <h6>{email}</h6>
          <h6>Member since {memberSince}</h6>
          </div>
        </div>
      )}
    </div>
  )
}
