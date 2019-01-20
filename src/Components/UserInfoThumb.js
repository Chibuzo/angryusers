import React from "react";

const UserInfoThumb = (props) => {
    return(
        <div className="userinfo col-md-2 hidden-sm hidden-xs">
            <div className="avatar">
                <img src={props.user.Photo_url} alt={props.user.fullname} title={props.user.Fullname} />
                <div className=""></div>
            </div>

            {/* <div className="icons">
                <img src={icon1} alt="" /><img src={icon4} alt="" />
            </div> */}
        </div>
    );
}

export default UserInfoThumb;