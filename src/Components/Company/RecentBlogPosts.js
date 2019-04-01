import React, { Component } from "react";
import BlogPost from "./BlogPost";
const PostUtilities = require('../../Helpers/PostUtilities');

class RecentBlogPosts extends Component {
    state = { posts: [] };

    async componentDidMount() {
        try {
            const res = await fetch(process.env.REACT_APP_API_URL + 'BlogPosts');
            const json = await res.json();
            const blog = await json[0].posts || json;
            let posts = await blog.map(post => {
                return (
                    <BlogPost
                        title={post.Title}
                        article={PostUtilities.postIntro(post.Article.replace(/<(?:.|\n)*?>/gm, ''), 120)}
                        url={post.Id + '/' + post.Title.split(' ').join('-')}
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