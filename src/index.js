import React, { Component } from 'react';
import { render } from 'react-dom';
import Jet from './components/Jet';
import Clock from './components/Clock';
import Conunter from './components/Reduce';


class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Jet style = {{ color: 'blue' }} type='none' />
        <h1 style = {{ color: 'red'}}> Hello </h1>
        <Clock/>
        <Conunter/>
      </React.Fragment>
    )
  }
}


render(<App/>, document.querySelector('#root'))