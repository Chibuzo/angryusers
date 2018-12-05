import React from "react";
import {Link} from "react-router-dom";

const PostIntro = () => {
    return(
        <article className="blog-intro">
            <div className="post">
                <div className="wrap-ut pull-left">
                    <h2><Link to="/blog/14/this-is-an-it">Blog Title</Link></h2>
                    <p>This is about a fucking service rendered last week here on earth</p>
                </div>
            </div>        
        </article>
    );
}

export default PostIntro;