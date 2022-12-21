import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Yash";
  render() {
    return (
      <div>
        Hello my first class based Component {this.c}
      </div>
    )
  }
}




