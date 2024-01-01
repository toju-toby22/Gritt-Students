import React from 'react'
import "../Styling/footerbox.css"
import { FaTwitter } from "react-icons/fa6"
const Footer = () => {
  return (
    <div>
      <footer>
            {/* <div class="footer-line"></div> */}
            <div class="footer-wrapper">
                <section class="footer-top">
                    <div class="footer-headline">
                        <h2>Subscribe to our newsletter</h2>
                        <p>
                            Stay up to date with our news and articles
                        </p>
                    </div>
                    <div class="footer-subscribe">
                        <input type="email" spellcheck="false" placeholder="Your Email"/>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </section>
                <div class="footer-columns">
                    
                        <h2>
                           GRITTY STUDENTS
                        </h2>
                    {/* <section>
                        <h3>Product</h3>
                        <ul>
                            <li>
                                <a href="#" title="API">API</a>
                            </li>
                            <li>
                                <a href="#" title="Pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="#" title="Documentation">Documentation</a>
                            </li>
                            <li>
                                <a href="#" title="Release Notes">Release Notes</a>
                            </li>
                            <li>
                                <a href="#" title="Status">Status</a>
                            </li>
                        </ul>
                    </section> */}
                   
                </div>
                {/* <div class="footer-bottom">
                    <div class='social-links'>
                        <ul>
                            <li>
                                <a href="#" title="Instagram">
                                    <img src="assets/instagram.svg" alt='Instagram'>                       
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Linkedin">
                                    <img src="assets/linkedin.svg" alt='Linkedin'>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Twitter">
                                    <img src="assets/twitter.svg" alt='Twitter'>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Youtube">
                                    <img src="assets/youtube.svg" alt='YouTube'>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="GitHub">
                                    <img src="assets/github.svg" alt='GitHub'>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <small>© Atheros Intelligence Ltd. <span id="year"></span>, All rights reserved</small>
                </div> */}
            </div>
        </footer>
    </div>
  )
}

export default Footer