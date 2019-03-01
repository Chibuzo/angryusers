import React from "react";

import bannerImg from '../images/slide.jpg';


const Banner = () => {
    return(
        <div className="tp-banner-container">
            <div className="tp-banner" >
                {/* <h1>Angry, Frustrated, Riped off or Disappointed<br /> by an Organisation?</h1> */}
                <img src={bannerImg}  alt="AngryUsers background" />
            </div>
        </div>
    );
}

export default Banner;