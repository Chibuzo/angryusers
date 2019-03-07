import React, { Component } from "react";
import Editor from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import S3FileUpload from 'react-s3';

class BlogEntry extends Component {
    constructor(props) {
        super(props);

        this.state = { post: { article: '' }, category: '', categories: '', postPhotos: [], post_btn: { text: 'Publish Post', icon: 'fa-upload', disabled: '' }, edit: { title: '', createdAt: '', id: 0 }};
    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogCategories').then(res => {
            return res.json();
        }).then(res => {
            let categories = res || [];
            let category_opts = [];
            category_opts = categories.map(cat => {
                return(
                    <option value={cat.Id} key={cat.Id}>{cat.CategoryTitle}</option>
                )
            });
            this.setState({ categories: category_opts });
        });

        if (this.props.param.id) {
            fetch(process.env.REACT_APP_API_URL + 'BlogPosts/' + this.props.param.id).then(function (response) {
                return response.json();
            }).then(post => {
                this.setState({
                    edit: {
                        title: post.Title,
                        createdAt: post.CreatedAt,
                        id: this.props.param.id
                    },
                    post: { article: post.Article },
                    category: post.Category.Id
                });
            });
        }
    }

    updateEditor = (text) => {
        this.setState({ post: { article: text }});
    }

    savePost = (e) => {
        e.preventDefault();

        // consider authentication

        // change post button state
        this.setState({ post_btn: { text: 'Publishing...', icon: 'fa-redo fa-spin', disabled: 'disabled' } });
        
        const post = {
            Title: e.target.elements.title.value,
            Article: this.state.post.article,
            CategoryId: e.target.elements.category.value
        };
        let uri = '';
        let method = 'POST';
        if (e.target.elements.id.value > 0) {
            post.Id = e.target.elements.id.value;
            post.CreatedAt = this.state.edit.createdAt;
            uri = '/' + e.target.elements.id.value;
            method = 'PUT';
        }
        fetch(process.env.REACT_APP_API_URL + 'BlogPosts' + uri, {
            method: method,
            mode: 'cors',
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
        }).catch(err => {
            console.log(err)
        })
    }

    getSelectedFiles = (e) => {
        this.setState({ postPhotos: e.target.files });
    }

    uploadPhotos = async BlogId => {
        const config = {
            bucketName: 'angryusers-blog',
            dirName: 'blog_photos',
            region: 'us-east-2',
            accessKeyId: process.env.REACT_APP_AWS_IAM_ACCESS_KEY,
            secretAccessKey: process.env.REACT_APP_AWS_IAM_SECRET,
        }

        let files = [];

        for (const file of this.state.postPhotos) {
            const ext = file.name.split('.').pop();
            Object.defineProperty(file, 'name', {
                writable: true,
                value: 'b_' + new Date().getTime() + '.' + ext
            });
            try {
                const res = await S3FileUpload.uploadFile(file, config);
                files.push({
                    PhotoSrc: res.location,
                    BlogPostId: BlogId
                });
            } catch (err) {
                console.log(err)
            }
        }

        // save the location of uploaded files
        fetch(process.env.REACT_APP_API_URL + 'BlogPhotos/SaveUploadedFiles', {
            method: 'POST',
            body: JSON.stringify(files),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok === true) {
            }
        }).catch(err => {
            console.log(err);
        });
        // let formData = new FormData();
        // formData.append("PostId", PostId);
        // let n = 1;
        // for (const file of this.state.postPhotos) {
        //     formData.append("photos" + n, file);
        //     n++;
        // }
        // fetch(process.env.REACT_APP_API_URL + 'BlogPhotos/uploadPhotos', {
        //     method: 'POST',
        //     body: formData
        // }).then(res => {
        //     if (res.ok === true) {
        //         console.log('Done')
        //     }
        // }).catch(err => {
        //     console.log(err);
        // });
    }

    updateTitle = (e) => {
        this.setState({ edit: {title: e.target.title.value }});
    }

    updateCategory = (e) => {
        this.setState({ category: e.target.value });
    }


    render() {
        return(
            <div className='post make-post'>
                <form className="form newtopic" method="post" onSubmit={this.savePost}>
                    <div className="topwrap">
                        <div className="posttext" style={{ paddingLeft: '30px' }}>
                            <h2 style={{ fontWeight: 'bold' }}>New Blog Post</h2>
                            <div>
                                <select name="category" className="form-control" value={this.state.category} onChange={this.updateCategory} required>
                                    <option value="">Choose Category</option>
                                    {this.state.categories}
                                </select>
                            </div>    

                            <div><input type="text" name="title" placeholder="Title for the post..." className="form-control" value={this.state.edit.title} onChange={this.updateTitle} required /></div>

                            <div><Editor value={this.state.post.article} onChange={this.updateEditor} /></div>
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
                                <input type="hidden" name="id" value={this.state.edit.id} />

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