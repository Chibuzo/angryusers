import React from "react";
import Page from "./Page";
import Form from "./ClaimAccountForm";
import bg from "../../../src/images/claim.jpg";

const Redeem = () => {
    const bg_style = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: '50% 0'
    }

    const content_style_cls = 'claim-acc';
    return(
        <Page title="Claim your Brand Name" bgStyle={bg_style} contentStyle={content_style_cls}>
            <div className="alert alert-info">Search for your business name or submit it to claim it. You can edit your business name after verificatioin</div>
            
            <Form />
        </Page>
    );
}

export default Redeem;