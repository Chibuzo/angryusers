import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';

let companies = [];
const fetchCompanies = () => {
    fetch(process.env.REACT_APP_API_URL + 'companies').then(function (response) {
        return response.json();
    }).then(res => {
        companies = res.map(coy => {
            return { 'companyName': coy.CompanyName, 'id': coy.Id };
        });
    });
}

const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : companies.filter(coy =>
        coy.companyName.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.companyName;

// render suggestions.
const renderSuggestion = suggestion => (
    <div>
        {suggestion.companyName}
    </div>
);

let companyId = 0;

class CompanyAutosuggest extends Component {
    state = { suggestions: [] };

    componentDidMount() {
        fetchCompanies();
    }

    // Autosuggest will call this function every time you need to update suggestions.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
        companyId = suggestion.id;
        this.props.updateCompanyId(companyId);
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { suggestions } = this.state;
        const company_id = companyId;

        return(
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={this.props.inputProps}
                companyId={company_id}
            />
        );
    }
}

export default CompanyAutosuggest;