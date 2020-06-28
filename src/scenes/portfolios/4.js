import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio4() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/4-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Cyomed: Medical Web App" divider_2={true} />
                        <div className="el-page-content">
                            <p>Cyomed is with you 24/7 web application that gives you security and connects you to your doctors whenever you need it.</p>
                            <p>This app has a tons of features including : Online prescriptions. Video-chat with doctors. Online appointment. Api integration, i.e: withings, runtastic, fitbit, jawbone, quardio. user login. Electronic medical record. Medical Records Management. Drug analysis. Cron jobs.</p>
                            <div className="el-blockquote">
                                <div className="el-blockquote-icon">
                                    <FaCode></FaCode>
                                </div>
                                <p>PHP, MySQL, javascript, jquery, ajax, bootstrap, codeigniter, html, css</p>
                                <span className="el-blockquote-author">--Web App</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Portfolio4;
