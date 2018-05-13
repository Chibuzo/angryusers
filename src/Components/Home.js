import React, { Component } from "react";

import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ComplaintIntro from "./ComplaintIntro";
import SideBarWidget from "./SideBarWidget";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Banner />
                <SearchBar />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <ComplaintIntro />
                                <ComplaintIntro />
                                <ComplaintIntro />
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

export default Home;