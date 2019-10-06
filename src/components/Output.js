import React, {Component} from 'react';
import Papa from 'papaparse';

class Output extends Component {
    constructor() {
        super();
        this.state = {
            dataAV: false
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
            data: dataArr,
            dataAV: true
        })

        
    }

    renderingEmpty = () => {
        return (
            <div className="default">
                If your data has more than 1000 rows, please use Firefox.
            </div>
        )
    }

    renderingVal = () => {

        function renderdata(data) {

            //go through each object in the array
            return data.map((dataObj) => {

                //grab the value of each key
                let dataVal = [];
                
                for (let key in dataObj) {
                    dataVal.push(<div className="grid-item">{dataObj[key]}</div>)
                }
                console.log(dataVal)
                return dataVal;
            })

        }

        
        return(
            <div className="output">
                {this.state.heading.map((heading) => {
                    return <div className="heading" key={heading}>{heading}</div>
                })}
                {renderdata(this.state.data)}
            </div>
        )
    }

    render() {
        return(
            <section className="display-area">
                {this.state.dataAV ? this.renderingVal() : this.renderingEmpty()}
            </section>
        )
    }
}

export default Output;
