import React, { Component } from "react";
import SearchBar from "../SearchBar";
import RecentPosts from "./RecentPosts";
import Categories from "./BlogCategories";
import Footer from "../Footer";

const formatDate = require('../../Helpers/PostUtilities').formatDateSince


class PostPage extends Component {
    constructor(props) {
        super(props);

        this.state = { post: {}, recent_posts: [], categories: [] };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogPosts/' + this.props.match.params.id).then(function (response) {
            return response.json();
        }).then(post => {
            document.title = post.Title + ' . AngryUsers';
            this.setState({
                post: {
                    title: post.Title,
                    category: post.Category.CategoryTitle,
                    article: post.Article,
                    postdate: formatDate(post.CreatedAt),
                    photo: post.Photos.length > 0 ? post.Photos[0].PhotoSrc : null
                }
            });
        });
    }

    render() {
        const post = this.state.post;

        return(
            <div className="container-fluid">
                <SearchBar nav={true} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <article className="au-post" style={{ paddingTop: '15px' }}>
                                    <h2>{ post.title }</h2>
                                    <div>Category: { post.category } | { post.postdate } ago</div><br />
                                    <div>
                                        { post.photo && <img src={ post.photo } alt={ post.title } style={{ width: '100%', marginBottom: '30px' }} />}
                                        <div dangerouslySetInnerHTML={{ __html: post.article }}></div>
                                    </div>
                                </article>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <RecentPosts />
                                <Categories />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default PostPage;