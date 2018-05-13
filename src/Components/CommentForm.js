import React, {Component} from "react"

import UserInfo from "./UserInfoThumb";
import avatar4 from "../images/avatar4.jpg";

class CommentForm extends Component {
    render() {
        return(
            <div className="post">
                <form className="form" method="post">
                    <div className="topwrap">
                        <UserInfo />

                        <div className="posttext pull-left">
                            <div className="textwraper">
                                <div className="postreply">Post a Reply</div>
                                <textarea name="reply" id="reply" placeholder="Type your message here"></textarea>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="postinfobot">
                
                        <div className="notechbox pull-left">
                            <input type="checkbox" name="note" id="note" className="form-control" />
                        </div>
                
                        <div className="pull-left">
                            <label for="note"> Email me when some one post a reply</label>
                        </div>
                
                        <div className="pull-right postreply">
                            <div className="pull-left smile"><a href=""><i className="fa fa-smile-o"></i></a></div>
                            <div className="pull-left"><button type="submit" className="btn btn-primary">Post Comment</button></div>
                            <div className="clearfix"></div>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;