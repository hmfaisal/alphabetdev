import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio1() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/1-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Pokeppo : flying game" divider_2={true} />
                        <div className="el-page-content">
                            <p>Fly the game character as far as you can without hitting a pipe. The aim of PokePpo is to navigate the game character through the pipes. You score one point for each set of pipes successfully passed.</p>
                            <p>Embark on an adventurous journey. The more points you scored game difficulty level will be more and new character you will unlocked. With the help of different game characters you will collect point and ultimately become the coin master. The game path is fully unpredictable.</p>
                            <p>The best challenging game of 2019. The more you advance the more different shaped characters you will unlocked and the pipe will be moving. The whole path will be totally different when you enter the game again after exit. So you can not predict beforehand. Your best hope is your luck and your friend game characters. Play the Best Adventure Game and fly as much as you can to become the ultimate coin master.</p>
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

export default Portfolio1;
