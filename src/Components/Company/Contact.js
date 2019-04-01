import React from "react";
import Page from "./Page";
import Form from "./ContactForm";
import bg from "../../../src/images/bg_.jpg";

const Contact = () => {
    const bg_style = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: '50% 0'
    }

    const content_style = {
        marginTop: '120px'
    }
    return (
        <Page title="Claim your Brand Name . AngryUsers" bgStyle={bg_style} contentStyle={content_style}>
            <br />
            <Form />
        </Page>
    );
}

export default Contact;