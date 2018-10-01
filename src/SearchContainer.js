import React, { Component } from 'react';
import axios from 'axios'
import Search from './Search';
import Results from './Results';
import './Home.css';

class SearchContainer extends Component {
    constructor(){
        super()
        this.state = {
            query: '',
            imgSrc: ''
        }
    }

    

    handleSubmit = (event) => {
        console.log("Form submitted: ");
        console.log(this.state.query);
        event.preventDefault();
        let baseURL = 'http://api.giphy.com/v1/gifs/search?q='
        let apiKey= '&api_key=VP2TmTbL8GKWr7aihE5OoohCPJ4hLr3a&limit=5'
        let targetURL = baseURL+this.state.query+apiKey
            axios.get(targetURL)
                .then( response => response.data.data)
                .then((images) => { 
                    images.map((image, idx) => {
                        idx=idx 
                        image=images[idx].embed_url
                        this.setState({imgSrc: image})
                        console.log(this.state.imgSrc)
                        return <li href={this.state.imgSrc}></li>
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
    }
    
    handleQuery = (event) => {
        this.setState({
            query: event.target.value
        });
        console.log(`Last characters typed: ${this.state.query}`);
    }

    
    render() {
        return (
        <div>
            <Search 
            query={this.handleQuery}
            submit={this.handleSubmit} />
            <Results result={this.state.imgSrc}/>
        </div>
        );
    }
}

export default SearchContainer;
