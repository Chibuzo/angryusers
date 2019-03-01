import React from "react";
import SearchBar from "../SearchBar";
import Footer from "../Footer";

const Page = (props) => {
    return (
        <div className="container-fluid">
            <SearchBar nav={true} />

            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <article className="au-post">
                                { props.children }
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}   

export default Page;