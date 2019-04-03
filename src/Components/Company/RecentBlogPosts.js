import React, { Component } from "react";
import BlogPost from "./BlogPost";
const PostUtilities = require('../../Helpers/PostUtilities');

class RecentBlogPosts extends Component {
    state = { posts: [] };

    async componentDidMount() {
        try {
            const res = await fetch(process.env.REACT_APP_API_URL + 'BlogCategories/getPosts/Customer%20Tips');
            const json = await res.json();
            const blog = await json[0].posts || json;
            let blogs = [];
            // this hack must be removed asap
            for (let i = 0; i < blog.length; i++) {
                if (i > 2) break;
                blogs.push(blog[i]);
            }
            let posts = await blogs.map(post => {
                return (
                    <BlogPost
                        title={post.Title}
                        article={PostUtilities.postIntro(post.Article.replace(/<(?:.|\n)*?>/gm, ''), 120)}
                        url={'/blog/' + post.Id + '/' + post.Title.split(' ').join('-')}
                        datePosted={new Date(post.CreatedAt)}
                        image={post.Photos.length > 0 ? post.Photos[0].PhotoSrc : null}
                        key={post.Id}
                    />
                );
            });
            this.setState({ posts: posts });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const posts = this.state.posts;

        return(
            <div className="row d-flex">
                {posts}
            </div>
        );
    }
}

export default RecentBlogPosts;