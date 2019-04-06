import React, { Component } from 'react';

export default class Jet extends Component {

  constructor(props) {
    super(props)
    this.userFlag = ((type) => {
      switch(type) {
        case 'none':
          return 'Easy Timer:' 
        default:
          return 'default'
      }
    })(props.type)
  }

  render() {
    return(
      <h2 {...this.props}> {this.userFlag} </h2>
    )
  }
}