import React from "react";
import { Link } from "react-router-dom";

const FbShare = (props) => {
    return(
        <div className="fb-share-button" data-href={props.url} data-layout="button" data-size="small" data-mobile-iframe="true">
            <Link target="_blank" to={"https://www.facebook.com/sharer/sharer.php?u=" + escape(props.url) + "&amp;src=sdkpreparse"} className="fb-xfbml-parse-ignore">Share</Link>
        </div>
    );
}

export default FbShare;