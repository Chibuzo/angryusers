import React from "react";
import Page from "./Page"

const WhyAngryusers = () => {
    return (
        <Page>
            <div className="row">
                <div className="col-md-8">
                    <h2>Why AngryUsers</h2>

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

export default WhyAngryusers;    