import React from "react";

const RecentPostsWidget = (props) => {
    return(
        <div className="sidebarblock">
            <h3>{props.title}</h3>
            <div className="divline"></div>
            <div className="blocktxt">
                <ul className="cats" dangerouslySetInnerHTML={{ __html: props.list }}>
                    
                </ul>
            </div>
        </div>
    );
}

export default RecentPostsWidget;