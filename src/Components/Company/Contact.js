import React from "react";
import Page from "./Page";
import Form from "./ContactForm";
import bg from "../../../src/images/contact.jpg";

const Contact = () => {
    const bg_style = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: '50% 0'
    }

    const content_style_cls = 'contact-page';
        
    return (
        <Page title="Contact Us" bgStyle={bg_style} contentStyle={content_style_cls}>
            <Form />
        </Page>
    );
}

export default Contact;