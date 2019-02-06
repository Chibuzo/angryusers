import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import Footer from "../Footer";

const formatDate = require('../../Helpers/PostUtilities').formatDate;

class ManageEntries extends Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogPosts').then(res => {
            return res.json();
        }).then(res => {
            let posts = res.map(p => {
                return(
                    <tr key={p.Id}>
                        <td>{formatDate(p.CreatedAt)}</td>
                        <td><Link to={'/blog/' + p.Id + '/' + p.Title.split(' ').join('-')}>{p.Title}</Link></td>
                        <td>{p.Category.CategoryTitle}</td>
                        <td>0</td>
                        <td><Link to={'/blog/edit/' + p.Id}>Edit</Link> . <Link to="./manage" onClick={this.deletePost.bind(this, p.Id)}>Del</Link></td>
                    </tr>    
                );
            });
            this.setState({ posts: posts });
        });
    }

    deletePost = (val) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            console.log(this.state.posts)
            // fetch(process.env.REACT_APP_API_URL + 'BlogPosts/' + val, {
            //     method: 'DELETE',
            //     //mode: 'no-cors',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }).then(res => {
            //     let posts = [...this.state.posts];
            //     let index = posts.map((p) => p. ).indexOf(val);
            //     if(index !== -1) {
            //         posts.splice(index, 1);
            //         this.setState({ posts: posts });
            //     }
            // });
        }
    }

    render() {
        return(
            <div>
                <SearchBar />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Link to="/blog/newentry" className="btn btn-primary pull-right"><i className="fa fa-plus"></i> New Post</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <article className="au-post" style={{ paddingTop: '15px', overflow: 'auto' }}>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Date Posted</th>
                                                <th>Title</th>
                                                <th>Category</th>
                                                <th>Views</th>
                                                <th>Opt</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.posts}
                                        </tbody>
                                    </table>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>   

                <Footer />             
            </div>
        );
    }
}

export default ManageEntries;