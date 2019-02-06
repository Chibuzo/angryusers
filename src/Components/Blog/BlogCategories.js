import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBarWidget from "../SideBarWidget";

class Categories extends Component {
    state = { category_list: [] };

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'BlogCategories/getCategories').then(res => {
            return res.json();
        }).then(res => {
            let cats = res || [];
            let categories = cats.map(cat => {
                return(
                    <li><Link to={"/blog/category/" + cat.category}>{cat.category} <span className="badge pull-right">{cat.count}</span></Link></li>
                );
            });

            this.setState({ category_list: categories });
        }).catch(err => {
            console.error(err);
        });
    }
    
    render() {
        return(
            <SideBarWidget title="Categories">
                {this.state.category_list}
            </SideBarWidget>
        );
    }
}

export default Categories;