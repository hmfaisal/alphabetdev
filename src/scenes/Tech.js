import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Headline from "../components/common/Headline";

const stacks = [
    {
        title: "React js",
        subtitle: "Responsive web design is an approach to web design that makes web pages render well on a variety of  screen sizes.",
        image: "/assets/images/demo/feature-1.png",
    },
    {
        title: "Angular js",
        subtitle: "Our theme is SEO friendly that aligns with your digital marketing strategies to bring more organic traffic to your website.",
        image: "/assets/images/demo/feature-5.png",
    },
    {
        title: "Node js",
        subtitle: "Moreover, your website speed is very important for your SEO. If your website loads fast, your ranking will be higher.",
        image: "/assets/images/demo/feature-2.png",
    },
    {
        title: "Javascript",
        subtitle: "A vast collection of Google fonts are integrated with the theme. You can use any of them that goes with your branding.",
        image: "/assets/images/demo/feature-6.png",
    },
    {
        title: "React Native",
        subtitle: "Responsive web design is an approach to web design that makes web pages render well on a variety of  screen sizes.",
        image: "/assets/images/demo/feature-1.png",
    },
    {
        title: "Redux",
        subtitle: "Nuxt is a bold theme that organizing content to follow natural eyes, striking balance between beautiful and visual hierarchy.",
        image: "/assets/images/demo/feature-3.png",
    },
    {
        title: "Express js",
        subtitle: "Purchase our theme only once and get lifetime updates. We keep updating our products to stay up to date with latest trends.",
        image: "/assets/images/demo/feature-4.png",
    },
    {
        title: "PHP",
        subtitle: "A mobile optimized site is a far more advanced website. Mobile optimized means that the site will reformat itself for a list of devices.",
        image: "/assets/images/demo/feature-7.png",
    },
    {
        title: "CSS",
        subtitle: "This theme comes with high quality icons from React Icons. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-8.png",
    },
    {
        title: "Mongodb",
        subtitle: "This theme comes with high quality icons from Themify. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-9.png",
    },
    {
        title: "MySQL",
        subtitle: "This theme comes with high quality icons from Themify. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-10.png",
    },
    {
        title: "PostgreSQL",
        subtitle: "This theme comes with high quality icons from Themify. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-11.png",
    },
    {
        title: "Bootstrap",
        subtitle: "This theme comes with high quality icons from Themify. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-12.png",
    },
    {
        title: "Graphql",
        subtitle: "This theme comes with high quality icons from Themify. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-13.png",
    },
    {
        title: "HTML",
        subtitle: "This theme comes with high quality icons from Themify. All the icons are font based and ready to match the quality of any HQ screen.",
        image: "/assets/images/demo/feature-14.png",
    },
];

function Tech() {
    return (
        <section className="theme-preview-features section section-portfolio section-portfolio-1 bg-gradient-side overlay-color">
            <span className="bg-color bg-dark-60"></span>
            <div className="display-spacing">
                <Container className="container">
                    <Headline title="Latest Tech We are using" divider_1={true} position="center" />
                    <Row>
                        {stacks.map((item, index) => (
                            <Col key={index} xs={12} md={12} lg={6} xl={4}>
                                <div className="item">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <h4>{item.title}</h4>
                                        
                                    </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Tech;
