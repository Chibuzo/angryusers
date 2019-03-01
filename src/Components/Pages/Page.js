import React, { Component } from "react";
import SearchBar from "../SearchBar";
import Footer from "../Footer";

class Page extends Component {

    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        return (
            <div className="container-fluid">
                <SearchBar nav={true} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <article className="au-post">
                                    { this.props.children }
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}   

export default Page;