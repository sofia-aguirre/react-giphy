import React, { Component } from 'react';
import './Home.css';

class Search extends Component {

    render() {
        return (
        <div>
            <p>The Ultimate Giphy Search</p>
            <form onSubmit={this.props.submit}>
                <input type='text' onChange={this.props.query} placeholder="search for gifs"  />
                <input type='submit' value='Gooo' />
            </form>
        </div>
        );
    }
}

export default Search;
