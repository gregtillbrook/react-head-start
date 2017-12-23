import React, { Component } from 'react';
import {MainLayout} from '../../components/';


export default class ErrorPage extends Component {
  render() {
    return (
      <MainLayout>
        <h2>Error: page not found</h2>
      </MainLayout>
    );
  }
}
