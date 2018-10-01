import React, { Component } from 'react';
import './Home.css';

class Results extends Component {
    render() {
        return (
        <div>
            <p>Your search returned: </p>
            <ul>
                {this.props.result}
            </ul>
            {/* <img src={this.props.result} alt="react results render"/> */}
        </div>
        );
    }
}

export default Results;
