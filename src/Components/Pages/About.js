import React from "react";
import Page from "./Page"

const About = () => {
    return(
        <Page>
            <div className="row">
                <div className="col-md-8">
                    <h2>About AngryUsers</h2>

                    <p>
                    AngryUsers is a platform inspired by anger and frustration resulting from failed promises and agreements made by corporate organisations to deliver a product or service as advertised. 
                    </p>

                    <p>
                        AngryUsers as a platform encourages users/customers/clients to share with the public those breach of agreements, disappointments and failure to deliver as agreed or promised by 
                        organisations, especially when the defaulting organisation has become unresponsive or too slow in addressing the issue.
                    </p>  

                    <p>
                        AngryUsers is run by a group of individuals who are concerned about the way certain organisations treat their workers/clients/users/customer, and have decided to use the 
                        power of public awareness and social media to highlight these challenges and create an environment that will move the organisations to swing into necessary action to put things right.
                    </p>  

                    <p>AngryUsers also points out to clients/customer where there rights start, where it ends, and how not to be an ass.</p>

                    <h3>Our Core Beliefs:</h3>
                    <ul>
                        <li>An unsatisfied customer seeking attention must be attended to in timely manner</li>
                        <li>Organisations must not keep advertising a product/service while some existing clients/customers are currently having issues with same product(s)/service(s). We expect them to prioritise 
                            fixing known issues with their product/services to seeking to gain new customers
                        </li>
                        <li>Public organisations must not keep wasting people’s time by requiring a prospective client/customer to go through some tedious sign up processes before 
                            revealing those vital terms of their business which they feel could make some people turn away on discovery
                        </li>
                        <li>We believe that organisations must treat their workers right, otherwise, nobody will work for them eventually</li>
                    </ul>
                </div>

                <div className="col-md-3 text-center pull-right" style={{ fontStyle: 'italic', fontWeight: '100', fontSize: '16px' }}>
                    <br /><br />
                    <h3>Mission</h3>
                    <p>To bring organisations to admit, apologize (where necessary), take necessary actions and make immediate amends whenever they fall short of expectation, or fail a worker/client/customer/user.</p>
               
                    <br /><br />
                    <h3>Vision</h3>
                    <p>To build a lasting corporate culture that will persuade and can assist organisations to respond and treat their clients/customers dissatisfaction as priority.</p>
                </div>
            </div>    
        </Page>
    );
}

export default About;