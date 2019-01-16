import React from "react";

import avatar from "../images/avatar.jpg";
import icon1 from "../images/icon1.jpg";
import icon4 from "../images/icon4.jpg";

const UserInfoThumb = () => {
    return(
        <div className="userinfo pull-left">
            <div className="avatar">
                <img src={avatar} alt="" />
                <div className="">Chibuzo</div>
            </div>

            <div className="icons">
                <img src={icon1} alt="" /><img src={icon4} alt="" />
            </div>
        </div>
    );
}

export default UserInfoThumb;