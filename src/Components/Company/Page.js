import React, { Component } from "react";
import Nav from "./Navigation";
import Footer from "../Footer";

class Page extends Component {

    componentDidMount() {
        document.title = this.props.title + ' . AngryUsers';
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="hero-wrap js-fullheight" style={{ height: '100vh' }} data-stellar-background-ratio="0.5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className={"row " + this.props.contentStyle}>
                                    <div className="col-md-10 offset-md-1">
                                        <h2 style={{ fontFamily: 'Lato' }}>{this.props.title}</h2>
                                        <br />
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 hidden-xs" style={{ backgroundRepeat: 'no-repeat', height: '100vh', ...this.props.bgStyle }}></div>
                        </div>
                    </div>
                </div>    

                <Footer />
            </div>    
        );
    }
}   

export default Page;