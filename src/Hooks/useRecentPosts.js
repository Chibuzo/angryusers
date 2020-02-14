import { useState } from 'react';
import APIRequest from '../Helpers/APIRequest';

const useRecentPosts = () => {
    const request = APIRequest();
    const [posts, setPosts] = useState([]);

    const fetchRecentPosts = async () => {
        try {
            const _posts = await request.fetchData('BlogPosts/FetchRecent');
            setPosts(_posts.recentPosts);
        } catch (err) {
            console.log(err);
        }
    }


    return {
        fetchRecentPosts,
        posts
    }
}

export default useRecentPosts;