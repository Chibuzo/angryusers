import React, { Component } from "react";
import {Link} from "react-router-dom";

const PostUtilities = require('../../Helpers/PostUtilities');

class PostIntro extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { posts: {} };
    // }


    render() {
        return(
            <article className="blog-intro">
                <div className="blog-post">
                    <div className="wrap-ut pull-left">
                        <h2><Link to={'/blog/' + this.props.uri}>{this.props.title}</Link></h2>
                        <div style={{ marginTop: '15px', marginBottom: '14px'}}>{this.props.category} | {PostUtilities.formatDateSince(this.props.datePosted)} ago</div>
                        {/* <div dangerouslySetInnerHTML={{ __html: PostUtilities.postIntro(this.props.article, 250) }}></div> */}
                        <div>{ PostUtilities.postIntro(this.props.article.replace(/<(?:.|\n)*?>/gm, ''), 220) }</div>
                        <p style={{ marginTop: '17px', marginBottom: '20px' }}><Link to={'/blog/' + this.props.uri} className='btn btn-default'>Read this post</Link></p>
                    </div>
                </div>        
            </article>
        );
    }
}

export default PostIntro;