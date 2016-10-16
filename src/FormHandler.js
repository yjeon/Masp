import React, { Component } from 'react';
import './style.css';

class FormHandler extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    
    return (
    )
  }
}

export default FormHandler;
