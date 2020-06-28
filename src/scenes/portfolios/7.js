import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio7() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/7-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Med CMS: Admin Panel" divider_2={true} />
                        <div className="el-page-content">
                            <p>An admin panel for medical record</p>
                            <p>MED CMS is a management system that supports the creation and modification.</p>
                            <p>This app has a tons of features including : Admin user login,  Different admin access by group,  Super admin access,  system management, database management, Add or Edit new support,  newsletter creation and bulk send, cron jobs.</p>
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

export default Portfolio7;
