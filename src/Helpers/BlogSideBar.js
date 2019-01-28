module.exports = {
    getCatgories: () => {
        return new Promise((resolve, reject) => {
            fetch(process.env.REACT_APP_API_URL + 'BlogCategories/getCategories').then(res => {
                return res.json();
            }).then(res => {
                let cats = res || [];
                let categories = '';
                cats.forEach(cat => {
                    categories += `<li><a href="/blog/category/${cat.category}">${cat.category} <span class="badge pull-right">${cat.count}</span></a></li>`;
                });
                return resolve(categories);
            }).catch(err => {
                return reject(err);
            });
        });
    },

    getRecentPosts: function() {
        return new Promise((resolve, reject) => {
            fetch(process.env.REACT_APP_API_URL + 'BlogPosts/FetchRecent').then(res => {
                return res.json();
            }).then(res => {
                let posts = res.recentPosts || [];
                let recent = '';
                posts.forEach(p => {
                    recent += `<li><a href="/blog/${p.id}/${p.title.split(' ').join('-')}">${p.title}</a></li>`;
                });
                return resolve(recent);
            }).catch(err => {
                return reject(err);
            });
        });
    }
}