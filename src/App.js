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

import Blog from "./Components/Blog/Home";
import NewPost from "./Components/Blog/NewPost";
import ManageEntries from "./Components/Blog/ManageEntries";
import PostPage from './Components/Blog/PostPage';

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

                    <Route exact path="/blog" component={Blog} />
                    <Route path="/blog/newentry" component={NewPost} />
                    <Route path="/blog/manage" component={ManageEntries} />
                    <Route path="/blog/edit/:id" component={NewPost} />
                    <Route path="/blog/category/:category" component={Blog} />
                    <Route path="/blog/:id/:title" component={PostPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
