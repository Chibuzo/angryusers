import React from "react";

const RecentPostsWidget = () => {
    return(
        <div className="sidebarblock">
            <h3>Recent Entries</h3>
            <div className="divline"></div>
            <div className="blocktxt">
                <ul className="cats">
                    <li><a href="">Trading for Money is a Bad Omen</a></li>
                    <li><a href="">Vault Keys Giveway </a></li>
                    <li><a href="">Misc Guns Locations</a></li>
                    <li><a href="">Looking for Players </a></li>
                    <li><a href="">Stupid Bugs &amp; Solves </a></li>
                    <li><a href="">Video &amp; Audio Drivers, kings and Lion heart</a></li>
                    <li><a href="">2K Official Forums</a></li>
                </ul>
            </div>
        </div>
    );
}

export default RecentPostsWidget;