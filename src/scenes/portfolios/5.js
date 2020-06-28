import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio5() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/5-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="The Health Net: Medical Web App" divider_2={true} />
                        <div className="el-page-content">
                            <p>A medical record management application .</p>
                            <p>with IhrArzt24 you have competent and unbiased advice as well as long-missing support for all questions relating to your health. Whether second opinion, file maintenance or follow-up care, IhrArzt24 is always there for you </p>
                            <p>Take photos and upload them to your file for review. Leave your paper files at home on vacation. From now on you only need an internet connection and a suitable device (PC, laptop, smartphone, tablet) to access your file.</p>
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

export default Portfolio5;
