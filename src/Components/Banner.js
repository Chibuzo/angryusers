import React from "react";

import bannerImg from '../images/slide.jpg';


const Banner = () => {
    return(
        <div className="tp-banner-container">
            <div className="tp-banner" >
                <ul>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500">
                        <img src={bannerImg}  alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;