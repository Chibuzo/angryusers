import React, { Component } from "react";
import {Link} from "react-router-dom";

import UserInfo from "./UserInfoThumb";

class ComplaintIntro extends Component {
    render() {
        return(
            <div className="post">
                <div className="wrap-ut pull-left">
                    <UserInfo />

                    <div className="posttext pull-left">
                        <h2><Link to="/complaint">10 Kids Unaware of Their Halloween Costume</Link></h2>
                        <p>It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative.</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="postinfo pull-left">
                    <div className="comments">
                        <div className="commentbg">
                            560
                            <div className="mark"></div>
                        </div>
            
                    </div>
                    <div className="views"><i className="fa fa-eye"></i> 1,568</div>
                    <div className="time"><i className="fa fa-clock-o"></i> 24 min</div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default ComplaintIntro;