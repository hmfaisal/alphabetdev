import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaTwitter, FaGithub, FaVimeo } from "react-icons/fa";

// Components
import Icon from "../components/common/Icon";
import Headline from "../components/common/Headline";

import * as emailjs from 'emailjs-com'



function Contact() {

    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
         let template_params = {
            "userName": data.name,
            "userEmail": data.email,
            "emailDetails": data.message
         }
         let service_id = 'default_service';
         let template_id = 'support_alphabetdev';
         let user_id = 'user_BJs8qVbxdN403pCOM49gZ';
         emailjs.send(service_id,template_id,template_params,user_id)
            .then((response) => {
                //console.log('SUCCESS!', response.status, response.text);
                resetForm();
            }, (err) => {
                //console.log('FAILED...', err);
                resetForm();
        });
         
     }

     const resetForm = () =>{
        setData({...data,name:'',email:'',message:''})
     }

    const handleChange = ( e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value ? e.target.value : false
        })
    };

    return (
        <section className="section section-contact section-contact-1 display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/contact/4.jpg)` }}>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="/#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaVimeo />
                            </a>
                        </li>
                    </ul>
                    <p>Follow Us:</p>
                </div>
            </div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container className="container">
                        <Headline title="Get In Touch" divider_2={true} subtitle="Once you drop your inquiry, it is reviewed by our sales team and they get back to you within 24 hours, for discussing further on your requirements." />
                        <form className="form form-1" >
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="text" name="name" onChange={(event) => {handleChange(event)}} value={data.name} placeholder="Your Name" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="email" name="email" onChange={(event) => {handleChange(event)}} value={data.email} placeholder="Your Email" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <div className="form-item">
                                        <textarea name="message" onChange={(event) => {handleChange(event)}} value={data.message} placeholder="Your Message" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <button type="button" className="button button-block button-primary" onClick={() => {handleSubmit()}}>
                                        Send Message
                                    </button>
                                </Col>
                            </Row>
                        </form>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="PHONE" subtitle="+880 1756-434304">
                                    <span className="ti-mobile"></span>
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="EMAIL" subtitle="support@alphabetdev.com">
                                    <span className="ti-email"></span>
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <Icon title="ADDRESS" subtitle="Dhanmondi, Dhaka, Bangladesh">
                                    <span className="ti-direction"></span>
                                </Icon>
                                <Icon title="BRANCH" subtitle="Berlin, Germany">
                                    <span className="ti-direction"></span>
                                </Icon>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;
