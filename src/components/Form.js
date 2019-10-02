import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            file: {},
            fileContentCSV: '',
        }
    }

    //once form submits, set the file into state
    onFormSubmit = (e) => {
        e.preventDefault();
        const selectedFile = document.getElementById('file').files[0];
        console.log(selectedFile);

        this.setState({
            file: selectedFile,
        });

    }

    //each time a new file in loaded, check for valid file type
    componentDidUpdate(prevProps, prevState) {
        const { file } = this.state;

        if (file !== prevState.file) {
            this.checkFile();
        }
    }
    
    //check if user uploaded a file, and valid file type
    checkFile = () => {

        //if user did not upload a file
        if (this.state.file === undefined) {
            alert(`Please upload a CSV file.`);
        } else {

            //check if user uploaded a csv file
            let fileName = this.state.file.name;
            let fileType = fileName.substr(fileName.length - 4);
            console.log(`check file type`)
            if (fileType !== '.csv') {
                alert(`Invalid file type. Please upload a CSV file.`)
            } else {

                //open the file
                this.readFile();
            }
        }
    }

    //open the file with the FileReader object
    readFile = () => {
        const reader = new FileReader();
        reader.onload = function(event) {
            let contents = event.target.result;
            this.setState({fileContentCSV: contents});
        };

        // reader.onerror = function(event) {
        //     console.error("File could not be read! Code " + event.target.error.code);
        // };

        reader.readAsText(this.state.file);
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