import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form action="post">
                <div><label htmlFor="file">Please upload a CSV file</label></div>
                <div><input type="file" name="file" id="file" accept=".csv"/></div>
                <button>Upload</button>
            </form>
        );
    }
}

export default Form; 