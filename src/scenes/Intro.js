import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Lottie from 'react-lottie';
import animationData1 from '../assets/lottie/problem.json';
import animationData2 from '../assets/lottie/development.json';
import animationData3 from '../assets/lottie/complete.json';

function Intro() {
    const sliderSettings = {
        dots: true,
        arrows: false,
        autoplay: true
    }

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
      };

      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
      };

      const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
      };

    return (
        <section className="section section-hero section-hero-1 display-fit-screen">
            <div className="hero-content">
                <Slider className="el-slider" {...sliderSettings}>
                    <div className="slide">
                        <div className="image overlay-image" >
                            <Lottie options={defaultOptions1}/>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image overlay-image" >
                            <Lottie options={defaultOptions2}/>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image overlay-image" >
                            <Lottie options={defaultOptions3}/>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="hero-sidebar overlay-color">
                <span className="bg-color bg-primary"></span>
                <div className="display-center">
                    <div className="content">
                        <h1>we make your online presence</h1>
                        <p>No matter you need to craft the idea for a completely new product or evaluate the quality of an already existing one - we're here to help you..</p>
                        <Link to={`/service`}>
                            <button className="button button-md button-light text-primary">
                                <span className="wave"></span>
                                <span className="text">Our Service</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hero-sidebar-links">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/Alphabetdev-113654283734802">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/alphabetdev">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/alphabet.dev/">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                    <p>Follow Us</p>
                </div>
            </div>
        </section>
    );
}

export default Intro;
