import React, { Component } from "react";

import SearchBar from "../SearchBar";
import PostIntro from "./PostIntro";
import RecentPosts from "./RecentPosts";
import Categories from "./BlogCategories";
import Footer from "../Footer";


const fetchEntries = async category => {
    let url = category ? 'BlogCategories/getPosts/' : 'BlogPosts';
    const _category = category || '';
    url += _category.split('-').join(' ');
    const res = await fetch(process.env.REACT_APP_API_URL + url);
    const json = await res.json();
    const blog = await json[0].posts || json;

    let posts = await blog.map(post => {
        return (
            <PostIntro
                id={post.Id}
                title={post.Title}
                category={post.Category ? post.Category.CategoryTitle : json[0].category}
                uri={post.Id + '/' + post.Title.split(' ').join('-')}
                datePosted={post.CreatedAt}
                key={post.Id}
            />
        );
    });
    return posts;
}

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = { posts: [], current_category: '' }; 
    }

    async componentDidMount() {
        document.title = 'AngryUsers - Recent Blog Entries';
        const posts = await fetchEntries(this.props.match.params.category);
        this.setState({ posts: posts, current_category: this.props.match.params.category });
    }

    async componentDidUpdate() {
        if (this.props.match.params.category && this.props.match.params.category !== this.state.current_category) {
            const posts = await fetchEntries(this.props.match.params.category);
            this.setState({ posts: posts, current_category: this.props.match.params.category });
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <SearchBar nav={true} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <article className="au-post" style={{ paddingTop: '15px', overflow: 'auto' }}>
                                    {this.state.posts}  
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

export default Blog;