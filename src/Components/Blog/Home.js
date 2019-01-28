import React, { Component } from "react";

import SearchBar from "../SearchBar";
import PostIntro from "./PostIntro";
import RecentPostWidget from "./RecentPostsWidget"
import Footer from "../Footer";

const blogfns = require('../../Helpers/BlogSideBar');

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    componentDidMount() {
        let url = this.props.match.params.category ? 'BlogCategories/getPosts/' : 'BlogPosts';
        const category = this.props.match.params.category || '';
        url += category;
        fetch(process.env.REACT_APP_API_URL + url).then(res => {
            return res.json();
        }).then(res => {
            const blog = res[0].posts || res;
            let posts = blog.map(post => {
                return (
                    <PostIntro
                        id={post.Id}
                        title={post.Title}
                        category={post.Category ? post.Category.CategoryTitle : res[0].category}
                        uri={post.Id + '/' + post.Title.split(' ').join('-')}
                        datePosted={post.CreatedAt}
                        Key={post.Id}
                    />
                );
            });
            this.setState({ posts: posts });
        });

        // load sidebar link
        blogfns.getRecentPosts().then(recents => {
            this.setState({ recent_posts: recents });
        }).catch(err => {

        });

        blogfns.getCatgories().then(categories => {
            this.setState({ categories: categories });
        }).catch(err => {

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
                                <article className="au-post" style={{ paddingTop: '15px', overflow: 'auto' }}>
                                    {this.state.posts}  
                                </article>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <RecentPostWidget title="Recent Posts" list={this.state.recent_posts} />
                                <RecentPostWidget title="Categories" list={this.state.categories} />
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