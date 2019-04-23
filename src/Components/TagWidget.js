import React, { Component } from "react";
// import Tag from "./Tag";
// import { Link } from "react-router-dom";
// import SideBarWidget from "./SideBarWidget";

class TagWidget extends Component {
    state = { selecteg_tags: [], tags: '' };

    async componentDidMount() {
        try {
            const req = await fetch(process.env.REACT_APP_API_URL + 'complaintTags/');
            const tags = await req.json();
            this.setState({
                tags: tags.map(tag => <><span className='tag-display' onClick={((e) => this.filterComplaint(e, tag.TagTitle))} key={tag.Id}>{tag.TagTitle}&nbsp;</span><span> </span></>)
            });
        } catch (err) {
            console.log(err)
        };
    }

    filterComplaint = (e, tag) => {
        this.props.filterComplaint(tag);
    }

    render() {
        return (
            <div className="sidebarblock">
                <h3>Complaint Tags</h3>
                <div className="blocktxt">{this.state.tags}</div>
            </div>
        );
    }
}

export default TagWidget;