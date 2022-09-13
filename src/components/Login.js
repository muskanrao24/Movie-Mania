import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Facebook } from './Facebook';
export const Login = () => {
  const navigate = useNavigate();

  function erase() {
    let email = document.getElementById("form3Example8")
    let pwd = document.getElementById("form3Example9")

    email.value = null;
    pwd.value = null;
  }

  const submit = async (e) => {
    e.preventDefault();

    let email = document.getElementById("form3Example8").value;
    let password = document.getElementById("form3Example9").value;

    const url_encoded_body = `email=${email}&password=${password}`;

    const response = await fetch("http://localhost:5000/login", {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: url_encoded_body // body data type must match "Content-Type" header
    });
    const data = await response.text();

    
    if (response.status === 400) {  // show alert if response is a bad request
      alert(`Error!\n${data}`);
    }
    else if (response.status === 200) {   // store email in local storage if signup is successful

      localStorage.setItem("email", email);
      alert(`Success!\n${data}`);
      navigate('/home');

    }
  }

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-flex justify-content-center align-items-center" style={{
                  background: "url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80), linear-gradient(rgba(255, 82, 82, 0.5), rgba(255,234,43,0.5))",
                  backgroundSize: "cover",
                  flexDirection: "column"
                }}>

                  <Facebook />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">

                    <form>

                      <h3 className="mb-5 text-uppercase "
                        style={{ color: "rgba(43, 70, 226, 0.699)", fontWeight: "bold" }}>
                        LOGIN to Movie-Maniac</h3>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" name="email" />
                        <label className="form-label" htmlFor="form3Example8">Email Address</label>
                      </div>


                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example9"
                          className="form-control form-control-lg" name="password" />
                        <label className="form-label" htmlFor="form3Example9">Password</label>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg" onClick={erase}>Reset all</button>
                        <input type="submit" className="btn btn-warning btn-lg ms-2" value="Login" onClick={submit} />
                      </div>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}