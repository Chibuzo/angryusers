class User {
    constructor(user) {
        this.setUser(user);
    }

    saveUser(user) {
        localStorage.setItem('userData', JSON.stringify(user));
        this.setUser(user);
    }

    setUser(user) {
        this.Id = user.Id;
        this.Fullname = user.fullname;
        this.Email = user.email;
        this.Photo_url = user.photo || 'https://angryusers.com/images/avatar.jpg';
        this.status = 'Active';
    }

    getData() {
        if (localStorage.getItem('userData') !== null) {
            let user = JSON.parse(localStorage.getItem('userData'));
            this.setUser(user);
            //return user;
        } 
    }

    static getUserData() {
        let user = {};
        if (localStorage.getItem('userData') !== null) {
            user = JSON.parse(localStorage.getItem('userData'));
        }
        return user;
    }

    static isLoggedIn() {
        let user = User.getUserData();
        return Object.keys(user).length > 0 ? true : false;
    }

    static logout() {
        localStorage.removeItem('userData');
    }
};

export default User;