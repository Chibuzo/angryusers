import React from "react";
import Page from "./Page"
import MissionStatement from "./Mission";
import VisionStatement from "./Vision";

const About = () => {
    return(
        <Page title="AngryUsers - About AngryUsers">
            <div className="row">
                <div className="col-md-8">
                    <h2>About AngryUsers</h2>

                    <p>
                        AngryUsers is a platform inspired and designed as a response to the anger and frustration experienced by users and customers of different brands and organizations. 
                        This usually stems from failed promises and agreements made by corporate organisations to deliver a product or service as advertised.
                    </p>

                    <p>
                        AngryUsers as a platform gives users/customers/clients a voice to share their negative experiences as regarding these breaches of agreements, disappointments 
                        and service failures on the part of the brands and corporate organizations. This becomes much more necessary, especially when the defaulting organisation has 
                        become unresponsive or too slow in addressing the issue.
                    </p>  

                    <p>
                        AngryUsers is run and supported by a group of concerned individuals united by their passion and commitment to holding companies and brand accountable; and have 
                        decided to use the influence of public awareness and social media to highlight these issues while creating an environment that will move the organizations to 
                        quickly take the necessary action to put things right.
                    </p>  

                    <p>AngryUsers also educates the users on their rights, responsibilities, obligations and limits.</p>

                    <h3>Our Core Beliefs:</h3>
                    <ul>
                        <li>An unsatisfied customer with a reasonable complaint must have their issues resolved as quickly as possible</li>
                        <li>Companies and organizations must take responsibility in ensuring that the advertised brand promise meets the integrity test at all times – the product or 
                            service does what the advertisement/commercial says it would do
                        </li>
                        <li>Both public and private organizations must be transparent with their Terms and Conditions, especially the downsides of the product/service</li>
                        {/* <li>Organizations must treat their workers with respect, fairness, equity and dignity.</li> */}
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

export default About;