import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBarWidget from "../SideBarWidget";

class RecentPosts extends Component {
    state = { posts: [] };

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogPosts/FetchRecent').then(res => {
            return res.json();
        }).then(res => {
            let posts = res.recentPosts || [];
            let recent = posts.map(p => {
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