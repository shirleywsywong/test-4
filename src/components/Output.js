import React, {Component} from 'react';

class Output extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // componentDidMount() {
    //     this.localRawCSV(); 
    // }

    //store the rawCSV into local state
    localRawCSV = () => {
        console.log(`localrawcsv ran`)
        this.setState({
            rawCSV: this.props.rawCSV,
        })
        this.separateVal();
    }
    
    //split the csv into individual array @ (\r\ 1st), (, 2nd)
    separateVal = () => {
        // const { rawCSV } = this.state;
        console.log(`separateval ran`)
        let CSVarrays = this.state.rawCSV.split('\r\n');

        this.setState({
            CSVarrays: CSVarrays,
        })
        console.log(CSVarrays);
    }

    render() {
        return(
            <section>
                <p>
                    {this.state.CSVarrays}
                </p>
            </section>
        )
    }
}

export default Output;