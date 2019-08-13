import React from 'react'
import { Route,Redirect,Switch } from "react-router-dom";
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Store from './pages/Store';
import GoodCategory from './pages/GoodCategory';
import Search from './pages/Search';
import News from './pages/News';

class RouteMap extends React.Component {

    render() {

      return (
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/productDetail" component={ProductDetail}/>
            <Route path="/store" component={Store}/>
            <Route path="/goodCategory" component={GoodCategory}/>
            <Route path="/search" component={Search}/>
            <Route path="/news" component={News}/>
            <Redirect to="/"/>
          </Switch>
        </main>
      )
    }
}

export default RouteMap
