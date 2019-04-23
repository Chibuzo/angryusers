import React, { Component } from "react";

const tags = ["Tech", "Ecommerce", "Banks", "Telecomunication", "Aviattion", "Education", "Transportation", "Health", "Hospital", "Civil Service", "Fin Tect", "Internet Services"];

const style = {
    tag_wrapper: {
        background: '#f1f1f1',
        height: '45px',
        borderRadius: '2px',
        margin: '2px 0',
        //padding: '10px 15px'
    },

    input_style: {
        height: '34px',
        border: 'none',
        background: 'none'
    },

    tag_style: 'padding: 4px 8px; background: #fff; margin: 3px; border: #ddd solid thin'
}

class Tag extends Component {

    styleTag = e => {
        if (e.keyCode === 32) {
            const tag = e.target.value.trim();
            document.getElementById("tag-content").innerHTML += `<span style='${style.tag_style}'>${tag}</span>`;
            e.target.value = '';
            document.getElementById("tags").value += tag + ",";
        }
    }

    render() {
        return(
            <React.Fragment>
                <div style={style.tag_wrapper}><span id="tag-content"></span><input name="tag" type="text" style={style.input_style} onKeyUp={this.styleTag} /></div>
                <input type="hidden" {...this.props.inputProps} id="tags" value="" />
            </React.Fragment>
        );
    }
}

export default Tag;