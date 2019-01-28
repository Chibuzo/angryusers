import React, { Component } from "react";
import {Link} from "react-router-dom";

const formatDate = require('../../Helpers/PostUtilities').formatDateSince

class PostIntro extends Component {
    constructor(props) {
        super(props);

        this.state = { posts: {} };
    }


    render() {
        return(
            <article className="blog-intro">
                <div className="blog-post">
                    <div className="wrap-ut pull-left">
                        <h2><Link to={'/blog/' + this.props.uri}>{this.props.title}</Link></h2>
                        <div style={{ marginTop: '15px', marginBottom: '14px'}}>{this.props.category} | {formatDate(this.props.datePosted)} ago</div>
                        <p>This is about a fucking service rendered last week here on earth.Acquiring and retaining new customers is tough enough—a leaky conversion funnel will only make things worse. Check out how to build and maintain a cycle from awareness to conversion in this article by Olivia Ross.</p>
                        <p style={{ marginTop: '17px', marginBottom: '20px' }}><a href='' class='btn btn-default'>Read this post</a></p>
                    </div>
                </div>        
            </article>
        );
    }
}

export default PostIntro;