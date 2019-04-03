import React, { Component } from "react";
import Nav from "./Navigation";
import Blog from "./RecentBlogPosts";
import ContactForm from "./ContactForm";
import Footer from "../Footer";

import "../../../src/css/open-iconic-bootstrap.min.css";
import "../../../src/css/animate.css";
import "../../../src/css/flaticon.css";
//import "../../../src/css/icomoon.css";
import "../../../src/css/style.css";

import bg from "../../../src/images/bg_.jpg";
import about from "../../../src/images/about.jpg";

class Index extends Component {

    render() {
        return(
            <div>           
                <Nav />

                <div className="hero-wrap js-fullheight" style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundPosition: '50% 1%'}} data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" style={{ height: '711px'}}>
                            <div className="col-xl-10 ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: &#39;70%&#39; }" style={{ transform: 'translateZ(0px) translateY(0%)' }}>
                                <h1 className="mb-4" data-scrollax="properties: { translateY: &#39;30%&#39;, opacity: 1.6 }" style={{ opacity: '1', transform: 'translateZ(0px) translateY(0%)' }}> Developer <br /><span>Conference 2019</span></h1>
                                <p className="mb-4" data-scrollax="properties: { translateY: &#39;30%&#39;, opacity: 1.6 }" style={{ opacity: 1, transform: 'translateZ(0px) translateY(0%)' }}>Use Angry Customers to your advantage</p>
                            </div>
                        </div>
                    </div>
                </div>   

                <section className="ftco-section services-section bg-light">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                                <div className="media block-6 services d-block text-center">
                                    <div className="icon"><span className="flaticon-hotel"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Knowledge Base</h3>
                                        <p>Respond to your customer complaints and build a public knowledge base for your brand</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                                <div className="media block-6 services d-block text-center">
                                    <div className="icon"><span className="flaticon-placeholder"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">CRM</h3>
                                        <p>Attend to your angry customers using our Issue Tracking software  on sign up.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                                <div className="media block-6 services d-block text-center">
                                    <div className="icon"><span className="flaticon-world"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Performance</h3>
                                        <p>Show off your customer service Performance and earn more public trust</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                                <div className="media block-6 services d-block text-center">
                                    <div className="icon"><span className="flaticon-cooking"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading mb-3">Auto Recommendation</h3>
                                        <p>Health brand ranking can would get you featured where your competitors are not meeting up</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-counter img" id="section-counter">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-6 d-flex">
                                <div className="img d-flex align-self-stretch" style={{ backgroundImage: `url(${about})` }}></div>
                            </div>
                            <div className="col-md-6 pl-md-5 py-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                                        <span className="subheading">Fun Facts</span>
                                        <h2 className="mb-4"><span>Fun</span> Facts</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center py-4 bg-light mb-4">
                                            <div className="text">
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <span className="flaticon-guest"></span>
                                                </div>
                                                <strong className="number" data-number="30">30</strong>
                                                <span>Speakers</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center py-4 bg-light mb-4">
                                            <div className="text">
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <span className="flaticon-handshake"></span>
                                                </div>
                                                <strong className="number" data-number="200">200</strong>
                                                <span>Sponsor</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center py-4 bg-light mb-4">
                                            <div className="text">
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <span className="flaticon-chair"></span>
                                                </div>
                                                <strong className="number" data-number="2500">2,500</strong>
                                                <span>Total Seats</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                        <div className="block-18 text-center py-4 bg-light mb-4">
                                            <div className="text">
                                                <div className="icon d-flex justify-content-center align-items-center">
                                                    <span className="flaticon-idea"></span>
                                                </div>
                                                <strong className="number" data-number="40">40</strong>
                                                <span>Topics</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                {/* <section className="ftco-section testimony-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                                <span className="subheading">Testimonial</span>
                                <h2 className="mb-4"><span>Happy</span> Clients</h2>
                            </div>
                        </div>
                        <div className="row ftco-animate fadeInUp ftco-animated">
                            <div className="col-md-12">
                                <div className="carousel-testimony owl-carousel ftco-owl owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={{ transition: 'all 0s ease 0s', width: '4180px', transform: 'translate3d(-760px, 0px, 0px)' }}>
                                            <div className="owl-item cloned" style={{ width: '350px', marginRight: '30px' }}>
                                                <div className="item">
                                                    <div className="testimony-wrap text-center py-4 pb-5">
                                                        <div className="user-img mb-4" style={{ backgroundImage: `url(${background})` }}>
                                                            <span className="quote d-flex align-items-center justify-content-center">
                                                                <i className="icon-quote-left"></i>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                            <p className="name">Roger Scott</p>
                                                            <span className="position">UI Designer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                </div>
                            </div>
                        </div>    
                    </div>
                </section>    */}

                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                                <span className="subheading">Our Blog</span>
                                <h2><span>Recent</span> Blog</h2>
                            </div>
                        </div>

                        <Blog />

                    </div>
                </section>

                <section className="ftco-section-parallax">
                    <div className="parallax-img d-flex align-items-center">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-7 text-center heading-section heading-section-white ftco-animate fadeInUp ftco-animated">
                                    <h2>Subcribe to our Newsletter</h2>
                                    <p>Stay up to date with the latest news, events and customer related trends</p>
                                    <div className="row d-flex justify-content-center mt-4 mb-4">
                                        <div className="col-md-8">
                                            <form action="https://colorlib.com/preview/theme/eventalk/index.html#" className="subscribe-form">
                                                <div className="form-group d-flex">
                                                    <input type="text" className="form-control input-lg" placeholder="Enter email address" />
                                                    <input type="submit" value="Subscribe" className="submit btn btn-primary" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="ftco-section testimony-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3">
                            <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
                                <span className="subheading">Reach Out</span>
                                <h2 className="mb-4"><span>Contact</span> Us</h2>
                            </div>
                        </div>
                        <div className="row ftco-animate fadeInUp ftco-animated">
                            <div className="col-md-8 offset-md-2">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />            
            </div>
        );
    }
}

export default Index;