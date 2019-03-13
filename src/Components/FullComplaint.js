import React, { Component } from "react";

import UserInfo from "./UserInfoThumb";
import FbShare from "./SocialPlugins.js/FbShare";
import Tweet from "./SocialPlugins.js/Tweet";

import LightBox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

let images = [];
class FullComplaint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postImage: 0,
            photoIndex: 0,
            isOpen: false,
        }
    }

    componentDidMount() {
        window.FB && window.FB.XFBML.parse();
        window.twttr && window.twttr.widgets && window.twttr.widgets.load();

        if (this.props.files && this.props.files.length > 0) {
            images = this.props.files.map(file => file.Filename);
            this.setState({ postImage: this.props.files.length });
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return(
            <div className="post">
                <div className="topwrap">
                    <UserInfo user={this.props.user} />

                    <div className="posttext col-md-11">
                        { this.props.company && <h1>{this.props.company.CompanyName}</h1> }
                        <h2>{this.props.title}</h2>
                        <p>{this.props.complaint}</p>
                        <br />
                        { this.props.company && 
                            <div>
                                <FbShare url={this.props.url} />&nbsp;<Tweet url={this.props.url} />
                            </div> 
                        }
                        
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="postinfobot">
            
                    <div className="posted pull-left"><i className="fa fa-clock"></i> Posted on : {this.props.postdate}</div>
            
                    <div className="next pull-right">
                        {this.state.postImage > 0 && <button type="button" className="btn btn-default" onClick={() => this.setState({ isOpen: true })}><i className="fa fa-image"></i> View Files</button> }
                        
                        &nbsp; &nbsp;<span title="Share this content" className="hidden"><i className="fa fa-share fa-1x"></i></span>
                
                        <span title="Flag this content" className="hidden"><i className="fa fa-flag"></i></span>
                    </div>
            
                    <div className="clearfix"></div>
                </div>

                { isOpen && (
                    <LightBox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default FullComplaint;