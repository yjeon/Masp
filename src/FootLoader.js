import React, { Component } from 'react';
import './style.css';

/*
 * This class is to deal with all the functionality that has to do with the footer section.
 */
class FootLoader extends Component {
  render() {
    return (
        <div className="footer-items-container">
        <p className="footer">icon by<a href="http://www.flaticon.com/authors/madebyoliver" className="footer-links">Madebyoliver</a> from <a href="http://www.flaticon.com" className="footer-links">www.flaticon.com</a></p>
        </div>
    )
  }
}

export default FootLoader;
