import React, {Component} from 'react';
import Papa from 'papaparse';

class Output extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    // each time a new prop comes in, run the separate values function
    componentDidUpdate(prevProps, prevState) {

        if (this.props.rawCSV !== prevProps.rawCSV) {
            this.separateVal();
        }

    }
    
    //split the csv into individual array 
    separateVal = () => {

        //get only the headings
        let CSVheadingArr = Papa.parse(this.props.rawCSV)
        let CSVheading = CSVheadingArr.data[0]
        console.log(CSVheading)

        //put the values in an object with the headings as key
        let CSVObj = Papa.parse(this.props.rawCSV, {header: true})
        let dataArr = CSVObj.data
        console.log(dataArr);

        this.setState({
            heading: CSVheading,
            data: dataArr
        })

        
    }

    renderingVal = () => {

        //display data in a grid
        //heading row with headings
        //put each value of the object into a grid element
        
        // return(
        //     <div className="output-grid">
        //         {CSVheading.map((heading) => {
        //             return <div className="heading">{heading}</div>
        //         })}
        //     </div>
        // )
    }

    render() {
        return(
            <section>
                {/* {this.separateVal()} */}
            </section>
        )
    }
}

export default Output;

// componentDidUpdate() {
//     setStatefn();
// }

// setStatefn = () => {
//     this.setState({
//         data: this.props.data
//     })
// }