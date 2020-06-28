import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio8() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/8-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Act as gift : Web / mobile app" divider_2={true} />
                        <div className="el-page-content">
                            <p>A climate activities to do app</p>
                            <p>Everyone has the ability to do something to address our climate challenge, but we can all still do more</p>
                            <p>The app let you do a small climate friendly activities for your loved ones on his / her special day as your special gift by simply creating a list of climate activities . As soon as you have completed a task just checked that out. Your loved ones will be notified for every task you have completed. Make your loved ones special day a really special one 
</p>
                            <div className="el-blockquote">
                                <div className="el-blockquote-icon">
                                    <FaCode></FaCode>
                                </div>
                                <p>react-native, redux, react-native-web, javascript, html, css, redux-thunk, flex</p>
                                <span className="el-blockquote-author">--Android / Web App</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Portfolio8;
