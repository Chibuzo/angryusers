import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import ComplaintPage from "./Components/ComplaintPage";

import About from "./Components/Pages/About";
import WhyAngryusers from "./Components/Pages/WhyAngryusers";
import ContactPage from "./Components/Pages/ContactPage";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import TermsOfUse from "./Components/Pages/TermsOfUse";
import Disclaimer from "./Components/Pages/Disclaimer";

//import BlogWrapper from "./Components/Blog/BlogWrapper";
import BlogHome from "./Components/Blog/Home";
import NewPost from "./Components/Blog/NewPost";
import ManageEntries from "./Components/Blog/ManageEntries";
import PostPage from './Components/Blog/PostPage';

import CompanyHome from "./Components/Company/Index";
import CompanyRedeem from "./Components/Company/Redeem";
import CompanySignIn from "./Components/Company/SignIn";
import CompanyContact from "./Components/Company/Contact";

class App extends Component {

    render() {
        return (
            <Router>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/complaint/:id/:title" component={ComplaintPage} />

                    <Route path="/about" component={About} />
                    <Route path="/whyangryusers" component={WhyAngryusers} />
                    <Route path="/contact" component={ContactPage} />

                    <Route path="/privacypolicy" component={PrivacyPolicy} />
                    <Route path="/termsofuse" component={TermsOfUse} />
                    <Route path="/disclaimer" component={Disclaimer} />

                    <Route exact path="/blog" component={BlogHome} />
                    <Route path="/blog/newentry" component={NewPost} />
                    <Route path="/blog/manage" component={ManageEntries} />
                    <Route path="/blog/edit/:id" component={NewPost} />
                    <Route path="/blog/category/:category" component={BlogHome} />
                    <Route path="/blog/:id/:title" component={PostPage} />

                    <Route exact path="/company" component={CompanyHome} />
                    <Route path="/company/claim-account" component={CompanyRedeem} />
                    <Route path="/company/signin" component={CompanySignIn} />
                    <Route path="/company/contact" component={CompanyContact} />
                </Switch>
            </Router>
        );
    }
}

export default App;
