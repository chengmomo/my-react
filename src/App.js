import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Index from "./pages/Layout";
import Login from "./pages/Login";
import LoadableComponent from './utils/LoadableComponent';
import {isAuthenticated} from './utils/Session'

const Home = LoadableComponent(() => import('./pages/Home'));
const TableDemo = LoadableComponent(() => import('./pages/AntCom/TableDemo'));
const FormDemo = LoadableComponent(() => import('./pages/AntCom/FormDemo'));
const PageDemo = LoadableComponent(() => import('./pages/AntCom/PageDemo'));
const HighChartsDemo = LoadableComponent(() => import('./pages/Charts/HighChartsDemo'));

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        {/*<Route path="/" component={Index}/>*/}
        <Route path="/" render={() =>
          <Index>
            <Switch>
              {/*<Route exact path='/home' component={Home}/>*/}
              <Route exact path='/home'
                     render={() => !!isAuthenticated() ? <Home/> : <Redirect to={{pathname: '/login'}}/>}/>
              <Route exact path='/home/ant/form' component={FormDemo}/>
              <Route exact path='/home/ant/table' component={TableDemo}/>
              <Route exact path='/home/ant/page' component={PageDemo}/>
              <Route exact path='/home/components/submenu/highcharts' component={HighChartsDemo}/>
              <Redirect exact from='/' to='/home'/>
            </Switch>
          </Index>
        }/>
      </Switch>
    </div>
  );
}

export default App;
