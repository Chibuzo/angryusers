import React from "react";

const SideBarWidget = () => {
    return(
        <div className="sidebarblock">
            <h3>Categories</h3>
            <div className="divline"></div>
            <div className="blocktxt">
                <ul className="cats">
                    <li><a href="">Trading for Money <span class="badge pull-right">20</span></a></li>
                    <li><a href="">Vault Keys Giveway <span class="badge pull-right">10</span></a></li>
                    <li><a href="">Misc Guns Locations <span class="badge pull-right">50</span></a></li>
                    <li><a href="">Looking for Players <span class="badge pull-right">36</span></a></li>
                    <li><a href="">Stupid Bugs &amp; Solves <span class="badge pull-right">41</span></a></li>
                    <li><a href="">Video &amp; Audio Drivers <span class="badge pull-right">11</span></a></li>
                    <li><a href="">2K Official Forums <span class="badge pull-right">5</span></a></li>
                </ul>
            </div>
        </div>
    );
}

export default SideBarWidget;