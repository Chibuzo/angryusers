import React, { Component } from "react";
import Editor from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class BlogEntry extends Component {
    constructor(props) {
        super(props);

        this.state = { article: '', categories: '', postPhotos: [], post_btn: { text: 'Publish Post', icon: 'fa-upload', disabled: '' } };
    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogCategories').then(res => {
            return res.json();
        }).then(res => {
            let categories = res || [];
            let category_opts = '<option value="">Choose Category</option>';
            categories.forEach(function(c) { 
                category_opts += `<option value='${c.Id}'>${c.CategoryTitle}</option>`;
            });
            this.setState({ categories: category_opts });
        });
    }

    updateEditor = (text) => {
        this.setState({ article: text });
    }

    savePost = (e) => {
        e.preventDefault();

        // consider authentication

        // change post button state
        this.setState({ post_btn: { text: 'Publishing...', icon: 'fa-redo fa-spin', disabled: 'disabled' } });
        
        const post = {
            Title: e.target.elements.title.value,
            Article: this.state.article,
            CategoryId: e.target.elements.category.value
        };
        fetch(process.env.REACT_APP_API_URL + 'BlogPosts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        }).then(res => {
            return res.json();
        }).then(res => {
            if (res.Success === true) {
                this.state.postPhotos.length > 0 && this.uploadPhotos(res.Id);

                // redirect to new post
                this.props.history.push('/blog/' + res.Id + '/' + res.Title.split(' ').join('-'));
            }
            //this.setState({ post_btn: { text: 'Publish Post', icon: 'fa-upload', disabled: '' } });
        });
        // restore button state
    }

    getSelectedFiles = (e) => {
        this.setState({ postPhotos: e.target.files });
    }

    uploadPhotos = (PostId) => {
        console.log(PostId)
        let formData = new FormData();
        formData.append("PostId", PostId);
        let n = 1;
        for (const file of this.state.postPhotos) {
            formData.append("photos" + n, file);
            n++;
        }
        fetch(process.env.REACT_APP_API_URL + 'BlogPhotos/uploadPhotos', {
            method: 'POST',
            body: formData
        }).then(res => {
            if (res.ok === true) {
                console.log('Done')
            }
        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return(
            <div className='post make-post'>
                <form className="form newtopic" method="post" onSubmit={this.savePost}>
                    <div className="topwrap">
                        <div className="posttext" style={{ paddingLeft: '30px' }}>
                            <h2 style={{ fontWeight: 'bold' }}>New Blog Post</h2>
                            <div><select name="category" className="form-control" required dangerouslySetInnerHTML={{__html: this.state.categories}}></select></div>

                            <div><input type="text" name="title" placeholder="Title for the post..." className="form-control" required /></div>

                            <div><Editor value={this.state.article} onChange={this.updateEditor} /></div>
                            <div className="clearfix"></div>
                            <div>
                                <label>Attach Photos</label>
                                <input type="file" name="photos" onChange={this.getSelectedFiles} accept="image/*" multiple />
                            </div>
                            <div className="clearfix"></div>
                            <div className="postfobot">

                                <div className="notechbox hidden pull-left">
                                    <label> Disable comments
                                        <input type="checkbox" name="notify" className="form-control" />
                                    </label>
                                </div>

                                <div className="pull-right postreply">
                                    <div className="pull-left"><button type="submit" className="btn btn-primary" {...this.state.post_btn.disabled}><i className={"fa " + this.state.post_btn.icon}></i>&nbsp;&nbsp;{this.state.post_btn.text}</button></div>
                                    <div className="clearfix"></div>
                                </div>

                                <div className="clearfix"></div>
                            </div>
                        </div>    
                    </div>
                </form>
            </div>            
        );
    }
}

export default BlogEntry;