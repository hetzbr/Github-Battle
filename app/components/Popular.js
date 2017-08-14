import React, { Component } from 'react';
require('./Popular.css');
const PropTypes = require('prop-types');

function SelectLanguage (props) {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map( (lang) => {
                return (
                    <li
                        className={lang === props.selectedLanguage ? 'selectedRed': null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}


SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}


class Popular extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(() => {
            return {
                selectedLanguage: lang
            }
        });
    }

    render () {
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                 />
            </div>
        )
    }
}

module.exports = Popular;