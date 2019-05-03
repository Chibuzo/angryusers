import React from "react";

const UserInfoThumb = (props) => {
    return(
        <div className="userinfo col-md-12 col-xs-12">
            <div className="">
                <div className="col-md-1 col-xs-2"><img src={props.user.Photo_url || 'https://s3.amazonaws.com/angryusers-images/angry.jpg'} alt={props.user.Fullname} title={props.user.Fullname} /></div>
                <div className="col-md-10 col-xs-10"><div className="name">{props.user.Fullname}</div><small>{props.date}</small></div>
            </div>

            {/* <div className="icons">
                <img src={icon1} alt="" /><img src={icon4} alt="" />
            </div> */}
        </div>
    );
}

export default UserInfoThumb;