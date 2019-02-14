import React from "react";

const SideBarWidget = (props) => {
    return(
        <div className="sidebarblock">
            <h3>{props.title}</h3>
            <div className="blocktxt">
                <ul className="cats">
                    {props.children}
                </ul>
            </div>
        </div>
    );
}

export default SideBarWidget;