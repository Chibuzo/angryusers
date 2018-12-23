import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import ComplaintPage from "./Components/ComplaintPage";

import About from "./Components/About";
import HowItWorks from "./Components/HowItWorks";
import Blog from "./Components/Blog/Home";
import BlogEntry from "./Components/Blog/BlogEntry";
import ManageEntries from "./Components/Blog/ManageEntries";
import ContactPage from "./Components/ContactPage";
import PostPage from './Components/Blog/PostPage';

class App extends Component {
    render() {
        return (
            <Router>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/complaint/:id" component={ComplaintPage} />

                    <Route path="/about" component={About} />
                    <Route path="/how-it-works" component={HowItWorks} />
                    <Route path="/contact" component={ContactPage} />

                    <Route path="/blog" component={Blog} />
                    <Route path="/blog/newentry" component={BlogEntry} />
                    <Route path="/blog/manage" component={ManageEntries} />
                    <Route path="/blog/edit/:id" component={BlogEntry} />
                    <Route path="/blog/:id/:title" component={PostPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
