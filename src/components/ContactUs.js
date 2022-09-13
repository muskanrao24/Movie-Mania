import React from 'react'
import emailjs from 'emailjs-com'

import insta_svg from "../images/social_media/instagram.svg"
import fb_svg from "../images/social_media/facebook.svg"
import github_svg from "../images/social_media/github.svg"
import linkedin_svg from "../images/social_media/linkedin.svg"

export const ContactUs = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1z0h88b', 'template_poch1az', e.target, 'Kx0Pz2aYJqYp2JQ9B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (

    <div className="contact_us">
      <div className="container">
        <div className="main_1">
          <div className="first_1">
            <h2 className="heading">CONTACT US</h2>
          </div>
        </div>
        <div className="main_2">
          <form action="" className="form" onSubmit={sendEmail}>
            <div className="data">
              <input type="text" id="myName" placeholder="Name" name='name' />
              <label htmlFor="myFirstName">Name</label>
            </div>
            <br />
            <br />
            <div className="data">
              <input type="email" id="myEmail" placeholder="Email" name='email' />
              <label htmlFor="myEmail">E-mail</label>
            </div>
            <br />
            <div className="data">
              <input type="password" id="myPassword" placeholder="Password" name='password' />
              <label htmlFor="myEmail">Password</label>
            </div>
            <br />
            <div className="data">
              <textarea id="myText" cols="30" rows="10" placeholder="Message" name="message"></textarea>
              <label htmlFor="myText">MESSAGE</label>
            </div>

            <input type="submit" />

          </form>
        </div>

        <div className="footer">

          <div className="social">
            <a target="_blank" href="https://www.instagram.com/iiitlucknow"><img src={insta_svg} alt="" height="45px" width="45px" /> </a>
          </div>
          <div className="social">
            <a target="_blank" href="https://www.facebook.com/iiitlucknow/"> <img src={fb_svg} alt="" height="45px" width="45px" /> </a>
          </div>
          <div>
            <h3 className="hrefpic" >Movie Maniac</h3>
          </div>
          <div className="social">
            <a target="_blank" href="https://github.com/ReelVerse/Movie-Maniac"> <img src={github_svg} alt="" height="45px" width="45px" /></a>
          </div>
          <div className="social">
            <a target="_blank" href="https://www.linkedin.com/school/iiitl"> <img src={linkedin_svg} alt="" height="45px" width="45px" />
            </a>
          </div>


        </div>
      </div>
    </div>
  )
}
