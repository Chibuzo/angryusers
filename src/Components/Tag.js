import React, { Component } from 'react';
import Tags from 'react-tag-autocomplete';
import "../css/tag.css";

class Tag extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            tags: [
               
            ],
            suggestions: []
        };
    }

    async componentDidMount() {
        try {
            const req = await fetch(process.env.REACT_APP_API_URL + 'complaintTags/');
            const tags = await req.json();
            this.setState({ 
                suggestions: tags.map(tag => { 
                    return { id: tag.Id, name: tag.TagTitle };
                }) 
            });
        } catch (err) {
            console.log(err)
        };
    }

    handleDelete = i => {
        const tags = this.state.tags.slice(0);
        tags.splice(i, 1);
        this.setState({ tags });
    }

    handleAddition = tag => this.setState({ tags: [...this.state.tags, tag] });

    render() { 
        const { tags, suggestions } = this.state;
        const tagStr = tags.map(tag => tag.name).join(', ');

        return ( 
            <React.Fragment>
                <Tags
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    autofocus={false}
                    autoresize={false}
                    allowBackspace={false}
                    placeholder="Add related tags to your complaint..." />

                <input type="hidden" name="tags" value={tagStr} />
            </React.Fragment>  
        );
    }
}
 
export default Tag;