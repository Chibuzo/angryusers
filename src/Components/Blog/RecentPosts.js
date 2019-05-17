import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBarWidget from "../SideBarWidget";

const imageThumbnail = require('image-thumbnail');

class RecentPosts extends Component {
    state = { posts: [] };

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogPosts/FetchRecent').then(res => {
            return res.json();
        }).then(res => {
            let posts = res.recentPosts || [];
            console.log(posts)
            let recent = posts.map(async p => {
                try {
                    const thumbnail = await imageThumbnail({ uri: p.Photo[0].PhotoSrc });
                    console.log(thumbnail)
                } catch (err) {

                }
                return (
                    <li key={p.id}><Link to={"/blog/" + p.id + "/" + p.title.split(' ').join('-')}>{p.title}</Link></li>
                );
            });

            this.setState({ posts: recent });
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <SideBarWidget title="Recent Posts">
                {this.state.posts}
            </SideBarWidget>
        );
    }
}

export default RecentPosts;