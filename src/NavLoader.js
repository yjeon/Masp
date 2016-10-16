import React, { Component } from 'react';
import './style.css';
//import FormHandler from './FormHandler';

/*
 * This class generates the navbar
 */
class NavLoader extends Component {
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
    const text = this.state.clicked ? 'clicked' : 'not';
    return (
      <div onClick={this.handleClick}>
        <a className="navbar-logo-text" href="#">{this.props.text}</a>
      </div>
    )
  }
}

export default NavLoader;
