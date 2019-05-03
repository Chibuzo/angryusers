module.exports = {
    formatDateSince: function(date) {
        let seconds = Math.floor((new Date() - new Date(date)) / 1000);

        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    },

    formatDate: function(date) {
        const _date = new Date(date);
        //const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
        return _date.getDate() + "/" + (_date.getMonth() + 1) + "/" + _date.getFullYear();
        //return new Date(date).toLocaleDateString("en-US", options);
    },

    postIntro: function(post, no_of_letters = 500) {
        if (post.length <= no_of_letters) return post;
        const intro = post.substr(0, no_of_letters - 1);
        return intro.substr(0, intro.lastIndexOf(' ')) + '...';
    },

    postOnFb: function(msg, link) {
        const uri = `?message=${msg}&link=${link}&access_token=${process.env.REACT_APP_FB_PAGE_ACCESS_TOKEN}`;
        fetch("https://graph.facebook.com/285499085314042/feed" + uri, {
            method: 'POST'
        }).then(res => {
        }).catch(err => {
            console.log(err);
        });
    },

    PostOnTwitter: function() {

    }
}