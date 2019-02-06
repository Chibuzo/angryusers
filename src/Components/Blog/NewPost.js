import React, { Component } from "react";
import SearchBar from "../SearchBar";
import PostForm from "./PostForm";
import RecentPosts from "./RecentPosts";
import Footer from "../Footer";

class NewPost extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className="container-fluid">
                <SearchBar />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <PostForm history={this.props.history} param={this.props.match.params} />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <RecentPosts />
                            </div>
                        </div>
                    </div> 
                </section>

                <Footer />
            </div>
        );
    }
}

export default NewPost;