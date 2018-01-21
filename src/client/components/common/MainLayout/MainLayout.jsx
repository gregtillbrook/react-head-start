//Meant as top level layout for pages - i.e. sites tend to have the same (or a few) layout(s) 
//of header/navigation/footer around each pages content layouts provide a good way to compose 
//pages in a clear declarative way
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainHeader from '../MainHeader/MainHeader';
import MainFooter from '../MainFooter/MainFooter';

export default class MainLayout extends Component {

  static propTypes = {
    children: PropTypes.any
  };

  render() {
    //React.Fragment so we can return an array of components (i.e. to avoid another wrapper div)
    return (
      <React.Fragment>
        <MainHeader />
        <main className="main-layout">
          {this.props.children}
        </main>
        <MainFooter />
      </React.Fragment>
    );
  }
}
