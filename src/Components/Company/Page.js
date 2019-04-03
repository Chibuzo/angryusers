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
                <div className="hero-wrap js-fullheight" style={{ backgroundRepeat: 'no-repeat', height: '100vh', ...this.props.bgStyle }} data-stellar-background-ratio="0.5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row" style={this.props.contentStyle}>
                                    <div className="col-md-10 offset-md-1">
                                        <h1>{this.props.title}</h1>
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    

                <Footer />
            </div>    
        );
    }
}   

export default Page;