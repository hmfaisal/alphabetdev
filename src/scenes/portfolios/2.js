import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio2() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/2-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="ICC WC Cricket 2019" divider_2={true} />
                        <div className="el-page-content">
                            <p>App for the ICC Cricket WC 2019! </p>
                            <p>Don't miss a moment of the action of ICC cricket news, tweets, video highlights, live, highlights, news, tweets stream, live, highlights, news, tweets scores, making this your one-stop destination for one-day cricket’s premier event.</p>
                            
                            <div className="el-blockquote">
                                <div className="el-blockquote-icon">
                                    <FaCode></FaCode>
                                </div>
                                <p>react-native, redux, javascript, html, css</p>
                                <span className="el-blockquote-author">--Android App</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Portfolio2;
