import React from "react";
import BlogHome from "./Home";

const BlogWrapper = props => {
    return(
        <BlogHome location={props.location} params={props.match.params} />
    );
}

export default BlogWrapper;