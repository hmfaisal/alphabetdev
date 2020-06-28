import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio3() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/3-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Emo News" divider_2={true} />
                        <div className="el-page-content">
                            <p>A news service app by your emotion. </p>
                            <p>This news app fetches latest news according to your mood. If you feel like see only happy news which is circulated wordwide this app only show you the happy news.</p>
                            <p>Just set your mood and the app will show you all the latest news according to you mood. You can see the world news in variety of language and country.</p>
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

export default Portfolio3;
