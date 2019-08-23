import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Index from "./pages/Layout";
import Login from "./pages/Login";
import LoadableComponent from './utils/LoadableComponent';

const Home = LoadableComponent(() => import('./pages/Home'));

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          {/*<Route path="/" component={Index}/>*/}
          <Route path="/" render={() =>
            <Index>
              <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/home/nav1/option1' component={Login}/>
                <Route exact path='/home/nav1/option2' component={Login}/>
                <Redirect exact from='/' to='/home'/>
              </Switch>
            </Index>
          }/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
