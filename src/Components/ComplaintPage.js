import React, {Component} from "react";

import Banner from "./Banner";
import SearchBar from "./SearchBar";
import Complaint from "./FullComplaint";
import CommentBox from "./CommentForm";
import SideBarWidget from "./SideBarWidget";
import Footer from "./Footer";

class ComplaintPage extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Banner />
                <SearchBar />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <Complaint title="To Many kids out of the things we don't forget" complaint="Super rich kids with nothing but fake friends" />
                                <CommentBox />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <SideBarWidget />
                                <SideBarWidget />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default ComplaintPage