import React, { Component } from "react";


import Banner from "../Banner";
import SearchBar from "../SearchBar";
import PostIntro from "./PostIntro";
import RecentPostsWidget from "./RecentPostsWidget"
import SideBarWidget from "../SideBarWidget";
import Footer from "../Footer";

class Blog extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Banner />
                <SearchBar />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <PostIntro />
                                <PostIntro />
                                <PostIntro />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <RecentPostsWidget />
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

export default Blog;