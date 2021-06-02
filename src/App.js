import React, {Component} from 'react';
import './App.css';
import Die from './components/Die/Die';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Die face="five" />
        <Die face="three" />
        <Die face="two" />
        <Die face="four" />
      </div>
    )
  }
}

export default App;
