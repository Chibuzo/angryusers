import React from "react";
import Page from "./Page";
import MissionStatement from "./Mission";
import VisionStatement from "./Vision";

const WhyAngryusers = () => {
    return (
        <Page title="Why AngryUsers">
            <div className="row">
                <div className="col-md-8">
                    <h2>Why AngryUsers</h2>

                    <p>AngryUsers is a platform that doesn’t frown at angry bouts. In fact, we encourage people to speak up about any disappointing experience they have had or are 
                        currently having with any organisation. No language is too strong here.</p>

                    <p>You may be wondering what would be the need to share bad experiences on AngryUsers, or to what end. Well, there are some good reasons why you may want to 
                        share some bad experiences publicly. Some of them are:</p> 

                    <ul>
                        <li>AngryUsers strives to push as far as possible, any complaint posted on it, so that both the defaulting organisation, their clients/customers and prospects 
                            would see it. If the complaint doesn’t speak well of the organisation and they actually care about their brand image, they would most certainly do something 
                            about it. Hence, the angry user/customer gets result eventually</li>
                        <li>We are aware some organisations have customer support unit, but we also know that for some organisations, reaching them on phone or getting a reply via email 
                            could be frustrating. In such case, the angry user/customer isn’t heard yet and hence the complaint or issue would not be registered or resolved at all or it would 
                            linger longer than necessary. AngryUsers’ platform would in this case be a good alternative to lodge the complaint</li>  
                        <li>Some organisations are so bad you want them out of service, but who knows why? They are just waiting to mess up the next ignorant prospect. Be your brother’s 
                            keeper, warn them on AngryUsers, they’ll get the message</li> 
                        <li>Maybe you are just looking for a public place to vent your corporate anger or disappointment, AngryUsers is the place.</li>         
                    </ul>

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 text-center pull-right" style={{ fontStyle: 'italic', fontWeight: '100', fontSize: '16px' }}>
                    <br /><br />
                    <MissionStatement />

                    <br /><br />
                    <VisionStatement />
                </div>
            </div>
        </Page>
    );
}

export default WhyAngryusers;    