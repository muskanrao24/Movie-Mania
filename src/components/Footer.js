import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../images/logo.jpeg"

export const Footer = () => {
    return (
        <footer className="footer_component">
            <div className="row">
                <div className="col">
                    <img src={logo} className="logo" /><br />
                    Movie Maniac is an online database of information related to films, television series, home videos, video games, and streaming content online - including cast, production crew and personal biographies, plot summaries, trivia and ratings.
                </div>
                <div className="col">
                    <h3 >Office <div className="underline">
                        <span></span>
                    </div></h3>
                    <p>Indian Institute of Information Technology, Lucknow</p>
                    <p>Chak Ganjaria</p>
                    <p>C. G. city</p>
                    <p>Uttar Pradesh</p>
                    <p>226002</p>
                    <p className="email-id">MovieManiac@outlook.com</p>
                    <h4>+91 75900 98026</h4>
                </div>
                <div className="col">
                    <h3>Links <div className="underline">
                        <span></span></div></h3>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>
                        Newsletter <div className="underline">
                            <span></span></div>
                    </h3>
                    <form>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <input type="email" placeholder="Enter Your email id" required />
                        <button type="submit"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </form>
                    <div className="social-icons">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </div>

                </div>
            </div>
            <hr />
            <p className="copyright">&#169; Movie Maniac 2022 - All Rights Reserved</p>
        </footer>
    )
}
