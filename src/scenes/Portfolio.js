import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Components
import Headline from "../components/common/Headline";

const portfolio = [
    {
        name: "All Works",
        items: [
            {
                title: "Pokeppo",
                link: "/portfolio-1",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/1.png",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                title: "ICC WC Cricket 2019",
                link: "/portfolio-2",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/2.png",
                thumbnail: "/assets/images/portfolio/2-1.jpg",
            },
            {
                title: "Emo News",
                link: "/portfolio-3",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/3.png",
                thumbnail: "/assets/images/portfolio/3-1.jpg",
            },
            {
                title: "Cyomed",
                link: "/portfolio-4",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/4.png",
                thumbnail: "/assets/images/portfolio/4-1.jpg",
            },
            {
                title: "IhrArzt24",
                link: "/portfolio-5",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/5.png",
                thumbnail: "/assets/images/portfolio/5-1.jpg",
            },
            {
                title: "Hello Nutri",
                link: "/portfolio-6",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/6.png",
                thumbnail: "/assets/images/portfolio/6-1.jpg",
            },
            {
                title: "Med CMS",
                link: "/portfolio-7",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/7.png",
                thumbnail: "/assets/images/portfolio/7-1.jpg",
            },
            {
                title: "Act As Gift",
                link: "/portfolio-8",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/8.png",
                thumbnail: "/assets/images/portfolio/8-1.jpg",
            },
        ],
    },
    {
        name: "Web Development",
        items: [
            {
                title: "Cyomed",
                link: "/portfolio-4",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/4.png",
                thumbnail: "/assets/images/portfolio/4-1.jpg",
            },
            {
                title: "The Health Net",
                link: "/portfolio-5",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/5.png",
                thumbnail: "/assets/images/portfolio/5-1.jpg",
            },
            {
                title: "Hello Nutri",
                link: "/portfolio-6",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/6.png",
                thumbnail: "/assets/images/portfolio/6-1.jpg",
            },
            {
                title: "Med CMS",
                link: "/portfolio-7",
                subtitle: "Web Development",
                image: "/assets/images/portfolio/7.png",
                thumbnail: "/assets/images/portfolio/7-1.jpg",
            }
        ],
    },
    {
        name: "Apps Development",
        items: [
            {
                title: "Pokeppo",
                link: "/portfolio-1",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/1.png",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                title: "ICC WC Cricket 2019",
                link: "/portfolio-2",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/2.png",
                thumbnail: "/assets/images/portfolio/2-1.jpg",
            },
            {
                title: "Emo News",
                link: "/portfolio-3",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/3.png",
                thumbnail: "/assets/images/portfolio/3-1.jpg",
            },
            {
                title: "Act As Gift",
                link: "/portfolio-8",
                subtitle: "Apps Development",
                image: "/assets/images/portfolio/8.png",
                thumbnail: "/assets/images/portfolio/8-1.jpg",
            },
        ],
    }
];

function Portfolio() {
    return (
        <section className="section section-portfolio section-portfolio-1 bg-gradient-side overlay-color">
            <span className="bg-color bg-dark-60"></span>
            <div className="display-spacing">
                <Container className="container">
                    <Headline title="Let's See Our Recent Works" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3}>
                                            <div className="portfolio-item">
                                                <Link to={`${item.link}`}>
                                                    <div className="portfolio-card">
                                                        <div className="image overlay-image" style={{ backgroundImage: `url(${item.image})` }} />
                                                        <div className="content">
                                                            <span>{item.title}</span>
                                                            <h3>{item.subtitle}</h3>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
            </div>
        </section>
    );
}

export default Portfolio;
