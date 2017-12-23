import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import {Helmet} from './components/';


export default class App extends Component {

  static propTypes = {
    route: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="app-wrapper">

        <Helmet>
          {/* Set site wide header info here and specific overrides in pages */}
          <title>My site title</title>
          <meta name="description" content="site desc here" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="mobile-web-app-capable" content="yes"/>          
        </Helmet>

        {renderRoutes(this.props.route.routes)}
        
      </div>
    );
  }

}
