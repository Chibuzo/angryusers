import React, { Component } from "react";

class StatWidget extends Component {

    render() {
        return(
            <div className="sidebarblock">
                <div className="">
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#legit" data-toggle="tab">User Experience</a></li>
                        <li><a href="#customer_care" data-toggle="tab">Reliability</a></li>
                    </ul>
                    <div className="tab-content" style={{ padding: '10px 20px' }}>
                        <div className="tab-pane active in fade" id="legit">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5>GIG Logistics Ltd</h5>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane in fade" id="customer_care">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5>Wakanow Travels Ltd</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default StatWidget;