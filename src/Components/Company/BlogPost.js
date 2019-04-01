import React from "react";

const BlogPost = (props) => {
    return(
        <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="blog-entry justify-content-end">
                <a href={props.url} className="block-20" style={{ backgroundImage: `url(${props.image})` }}>
                </a>
                <div className="text p-4 float-right d-block">
                    <div className="d-flex align-items-center pt-2 mb-4">
                        <div className="one">
                            <span className="day">{props.datePosted.getDay()}</span>
                        </div>
                        <div className="two">
                            <span className="yr">{props.datePosted.getFullYear()}</span>
                            <span className="mos">{new Intl.DateTimeFormat("en-US", { month: "long" }).format(props.datePosted)}</span>
                        </div>
                    </div>
                    <h3 className="heading mt-2"><a href={props.url}>{props.title}</a></h3>
                    <p>{props.article}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;