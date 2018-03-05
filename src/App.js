import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JqxDropDownList from './jqwidgets-react/react_jqxdropdownlist.js';
import { empGetRequest } from './actions/employee';

class App extends Component {

  constructor(props) {
    super(props);
  }

  handleEmpGet() {
    //empGetRequest()
    empGetRequest().then( (response) => {
      // 가져온 데이터를 source 에 넣는다.
      console.log('get from request:');
      console.log(response);
      // this.setState({
      //   result: response
      // })
    });
  }

  render() {
    let source =
   [
       "Affogato",
       "Americano",
       "Bicerin",
       "Breve",
       "Café Crema",
       "Caffé Latte",
       "Espresso"
   ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <JqxDropDownList width={200} height={50} source={source} />
          <button type="button" onClick={this.handleEmpGet}>조회</button>

      </div>
    );
  }
}

export default App;
