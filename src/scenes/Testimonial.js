import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";

// Components
import Icon from "../components/common/Icon";
import Headline from "../components/common/Headline";

const service = [
    {
        title: "M. Kaldasch",
        subtitle: "It was a real pleasure to work with them. As my company is located in Germany but they manage to help us to build our project from scratch to complate project. Recommended.",
        icon: "ti-heart",
    },
    {
        title: "S. Wehkamp",
        subtitle: "My company approached alphabetDEV via upwork because we are dealing with time constraints to develop parts of our product in-house. It was a real pleasure to work with this team.",
        icon: "ti-heart",
    },
    {
        title: "A. Khan",
        subtitle: "I have enjoyed working with dev Team and will be expanding our work to other phases now. I have found them very professional throughout the process",
        icon: "ti-heart",
    },
    {
        title: "F. Goebl",
        subtitle: "Work of alphabetDEV Team is a classic example of successfull IT-outsourcing. I have been fully satisfied with the professional level of work done.",
        link: "/service-details",
        icon: "ti-heart",
    },
];

function Testimonial() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-service section-service-5 display-fit-screen">
            <div className="display-spacing">
                <Container>
                    <Headline title="What our customers saying" divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="service-item">
                                    <div className="service-head">
                                        <Icon label={`0${index + 1}.`} title={item.title}>
                                            <span className={item.icon} />
                                        </Icon>
                                    </div>
                                    <div className="service-body">
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Testimonial;