import React from "react";

import bannerImg from '../images/slide.jpg';


const Banner = () => {
    return(
        <div className="tp-banner-container">
            <div className="tp-banner" >
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="1500">
                        <img src={bannerImg}  alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" style={{ width: '100%' }} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;