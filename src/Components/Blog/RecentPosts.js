import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBarWidget from "../SideBarWidget";
import useRecentPosts from "../../Hooks/useRecentPosts";

//const imageThumbnail = require('image-thumbnail');

const RecentPosts = () => {
    const { fetchRecentPosts, posts } = useRecentPosts();

    useEffect(() => {
        fetchRecentPosts();
    }, []);


    return (
        <SideBarWidget title="Recent Posts">
            {posts.map(p => {
                // try {
                //     const thumbnail = await imageThumbnail({ uri: p.Photo[0].PhotoSrc });
                //     console.log(thumbnail)
                // } catch (err) {

                // }
                return (
                    <li key={p.id}><Link to={"/blog/" + p.id + "/" + p.title.split(' ').join('-')}>{p.title}</Link></li>
                );
            })}
        </SideBarWidget>
    );
}

export default RecentPosts;