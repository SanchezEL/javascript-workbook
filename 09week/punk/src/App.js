import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Punk from './components/Punk';
import LikeButton from './components/LikeButton';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // inputValue: ' ',
      // list: [],
      // // text: ''
    }
  
  }
  
  
 
  render() {
    return (
      <div className="App">
        <Punk/>
      </div>
    );
  }
}

export default App;
