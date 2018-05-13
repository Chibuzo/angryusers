import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import ComplaintPage from "./Components/ComplaintPage";

class App extends Component {
    render() {
        return (
            <Router>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/complaint" component={ComplaintPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;
