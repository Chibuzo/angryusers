import React from "react";
import SearchBar from "../SearchBar";

const TermsOfUse = () => {
    return (
        <div className="container-fluid">
            <SearchBar />

            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <article>
                                <h2>Terms of Use</h2>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TermsOfUse;