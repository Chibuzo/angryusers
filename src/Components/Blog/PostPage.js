import React, { Component } from "react";
import SearchBar from "../SearchBar";
import RecentPosts from "./RecentPosts";
import Categories from "./BlogCategories";
import Footer from "../Footer";


class PostPage extends Component {
    constructor(props) {
        super(props);

        this.state = { post: {}, recent_posts: [], categories: [] };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogPosts/' + this.props.match.params.id).then(function (response) {
            return response.json();
        }).then(post => {
            this.setState({
                post: {
                    title: post.Title,
                    category: post.Category.CategoryTitle,
                    article: post.Article,
                    photo: post.Photos.length > 0 ? post.Photos[0].PhotoName : null
                }
            });
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <SearchBar />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <article className="au-post" style={{ paddingTop: '15px' }}>
                                    <h2>{this.state.post.title}</h2>
                                    <div>Category: {this.state.post.category}</div><br /><br />
                                    <div>
                                        {this.state.post.photo && <img src={'//localhost:52704/BlogPhotos/' + this.state.post.photo} alt={this.state.post.title} style={{ width: '100%', marginBottom: '30px' }} />}
                                        <p dangerouslySetInnerHTML={{ __html: this.state.post.article }}></p>
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