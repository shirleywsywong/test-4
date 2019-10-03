import React, {Component} from 'react';

class Output extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    //each time a new prop comes in, run the separate values function
    componentDidUpdate(prevProps, prevState) {
        this.separateVal();
    }
    
    //split the csv into individual array 
    separateVal = () => {

        let CSVarrays = this.props.rawCSV.split('\r\n');
        
        let dataArrays = CSVarrays.map(function(val) {
            return val.split(',')
        })
        console.log(dataArrays); 

        // this.setState({
        //     CSVarrays: CSVarrays,
        // })
    }

    render() {
        return(
            <section>
                <p>
                    {this.props.rawCSV}
                </p>
            </section>
        )
    }
}

export default Output;