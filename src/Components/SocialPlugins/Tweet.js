import React from "react";
import { Link } from "react-router-dom";

const Tweet = (props) => {
    return(
        <Link className="twitter-share-button" 
            data-via="angry_users" 
            data-url={props.url} 
            data-hashtags="angryUsers,customerService,customerHelp,angryCustomer"
            to="https://twitter.com/intent/tweet">
            Tweet
        </Link>
    );
}

export default Tweet;