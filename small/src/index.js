import 'babel-polyfill'; //support IE
import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './RouteMap';
import { HashRouter,BrowserRouter } from 'react-router-dom';

class Routers extends React.Component {

  render() {
      return (
          <HashRouter basename='/'>
            <RouteMap />
          </HashRouter>
      )
  }

  }

  ReactDOM.render(
    <HashRouter>
      <Routers/>
    </HashRouter>,
    document.getElementById('root')
  );
