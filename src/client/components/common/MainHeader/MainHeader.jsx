import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainHeader extends Component {
  render() {
    return (
      <header className="main-header">
        <h1>react-head-start</h1>
        <nav className="main-header__nav">
          <Link to="/"> Home </Link>
          <Link to="/users"> Users </Link>
        </nav>
      </header>
    );
  }
}
