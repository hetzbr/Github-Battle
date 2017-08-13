import React, { Component } from 'react';
require('./Popular.css');

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
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
            <ul className='languages'>
                {languages.map( (lang) => {
                    return (
                        <li
                            className={lang === this.state.selectedLanguage ? 'selectedRed': null}
                            onClick={this.updateLanguage.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

module.exports = Popular;