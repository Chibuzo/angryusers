import React, {Component} from "react";

import UserInfo from "./UserInfoThumb";

class FullComplaint extends Component {
    render() {
        return(
            <div className="post">
                <div className="topwrap">
                    <UserInfo />

                    <div className="posttext pull-left">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.complaint}</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="postinfobot">
            
                    <div className="likeblock pull-left">
                        <a href="" className="up"><i className="fa fa-thumbs-o-up"></i>25</a>
                        <a href="" className="down"><i className="fa fa-thumbs-o-down"></i>3</a>
                    </div>
            
                    <div className="prev pull-left">
                        <a href=""><i className="fa fa-reply"></i></a>
                    </div>
            
                    <div className="posted pull-left"><i className="fa fa-clock-o"></i> Posted on : 20 Nov @ 9:30am</div>
            
                    <div className="next pull-right">
                        <a href=""><i className="fa fa-share"></i></a>
                
                        <a href=""><i className="fa fa-flag"></i></a>
                    </div>
            
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default FullComplaint;