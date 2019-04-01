import React from "react";
import Page from "./Page";
import Form from "./ClaimAccountForm";
import bg from "../../../src/images/bg_1.jpg";

const Redeem = () => {
    const bg_style = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: '50% 0'
    }

    const content_style = {
        marginTop: '190px'
    }
    return(
        <Page title="Claim your Brand Name . AngryUsers" bgStyle={bg_style} contentStyle={content_style}>
            <div className="alert alert-info">You can edit your organization's name after verificatioin</div>
            <br />
            <Form />
        </Page>
    );
}

export default Redeem;