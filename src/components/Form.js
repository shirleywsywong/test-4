import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            file: {},
            fileName: '',
            fileType: '',
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const selectedFile = document.getElementById('file').files[0];
        
        console.log(selectedFile);
        if (selectedFile == undefined) {
            alert(`Please upload a CSV file.`);
            this.render();
        }
        
        //check for valid file type
        let fileName = selectedFile.name;
        let fileType = fileName.substr(fileName.length - 4);
        if (fileType != '.csv') {
            alert(`Invalid file type. Please upload a CSV file.`)
        }
    }

    render() {
        return (
            <form action="" onSubmit={this.onFormSubmit}>
                <div>
                    <label htmlFor="file">Please upload a CSV file</label>
                </div>
                <div>
                    <input 
                        type="file" 
                        name="file" 
                        id="file" 
                        accept=".csv"/>
                </div>
                <button>Upload</button>
            </form>
        );
    }
}

export default Form; 