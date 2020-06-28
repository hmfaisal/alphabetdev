import React from "react";
import Slider from "react-slick";

// Components
import Icon from "../components/common/Icon";

const service = [
    {
        title: "Ideation",
        subtitle: "Give your product idea a shape. Plan and evaluate the essential features of your product",
        link: "/service-details",
        icon: "ti-light-bulb",
    },
    {
        title: "Product Design",
        subtitle: "Craft delightful user experiences for your digital products through beautiful interfaces.",
        link: "/service-details",
        icon: "ti-paint-bucket",
    },
    {
        title: "Web Development",
        subtitle: "Create beautiful, fast and secure web applications tailored exclusively for your business goals.",
        link: "/service-details",
        icon: "ti-desktop",
    },
    {
        title: "Mobile Development",
        subtitle: "Build well-designed and optimized custom mobile applications with a delightful UX for Android.",
        link: "/service-details",
        icon: "ti-mobile",
    },
    {
        title: "Support",
        subtitle: " We will secure its continuous quality and support incremental improvements.",
        link: "/service-details",
        icon: "ti-shield",
    },
    {
        title: "Digital Marketing",
        subtitle: "We love designing marketing strategies that can help you meet your business strategies.",
        link: "/service-details",
        icon: "ti-announcement",
    },
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <section className="section section-service section-service-1 display-fit-screen">
            <div className="display-full-screen">
                <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/service/1.jpg)`, backgroundSize:'cover', boxShadow:'inset 0 0 0 2000px rgba(70, 72, 102, 0.3)'  }}>
                    <Slider className="el-slider" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div className="item box" key={index}>
                                <div className="inner">
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
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Service;
