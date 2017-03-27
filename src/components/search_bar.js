/**
 * Created by fgomboe on 26/03/17.
 */

import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return <input onChange={event => console.log(event.target.value)}/>
    }
}

export default SearchBar;