import React, {Component} from 'react';
import Form from './components/Form';
import Output from './components/Output';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rawCSV: '',
    }
  }

  formSubmit = (fileContentCSV) => {
    this.setState({
      rawCSV: fileContentCSV
    });
  }
  render() {
    
    return (
      
      <div>
        <Form formSubmit={this.formSubmit}/>
        <Output rawCSV={this.state.rawCSV}/>
      </div>
    );
  } 
}

export default App;
