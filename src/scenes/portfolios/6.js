import React from "react";
import { Container } from "react-grid-system";
import { FaCode } from "react-icons/fa";

// Components
import Headline from "../../components/common/Headline";

function Portfolio6() {
    return (
        <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/6-1.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Hello Nutri: e-commerce App" divider_2={true} />
                        <div className="el-page-content">
                            <p>Hello Nutri is a food delivery service app in where you can buy food online get it delivered at your doorstep.</p>
                            <p>The ecommerce website features intuitive user interface, rich product catalogs with filters, necessary functionality for clients and employees, as well as integration with the Customer’s corporate systems and the whole system connectivity.</p>
                            <div className="el-blockquote">
                                <div className="el-blockquote-icon">
                                    <FaCode></FaCode>
                                </div>
                                <p>reactjs, javascript, redux, nodejs, expressjs, mongodb,html, css</p>
                                <span className="el-blockquote-author">--Web / Mobile App</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Portfolio6;
