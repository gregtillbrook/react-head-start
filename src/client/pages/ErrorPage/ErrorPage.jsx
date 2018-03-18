//Simple error page 
import React, { Component } from 'react';
import { MainLayout, Helmet } from '../../components/';


export default class ErrorPage extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet>
          <title>My site: Error</title>
        </Helmet>

        <h2>Error: page not found</h2>
      </MainLayout>
    );
  }
}
