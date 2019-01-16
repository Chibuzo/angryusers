let User = (function() {
    let id, fullname, email, photo, status;

    let saveUser = function(user) {
        localStorage.setItem('userData', JSON.stringify(user));
        setUser(user);
    }

    let setUser = function(user) {
        this.id = user.id;
        this.fullname = user.fullname;
        this.email = user.email;
        this.photo = user.photo;
        this.status = 'Active';
    }

    let retireveUser = function() {
        if (localStorage.getItem('userData') !== null) {
            let user = JSON.parse(localStorage.getItem('userData'));
            setUser(user);
        }
    }

    retireveUser();

    return {
        saveUser: saveUser,
        id: id,
        fullname: fullname,
        email: email,
        photo: photo,
        status: status
    }
})();

export default User;