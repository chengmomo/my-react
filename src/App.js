import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Index from "./pages/Layout";
import Login from "./pages/Login";
import LoadableComponent from './utils/LoadableComponent';
import {isAuthenticated} from './utils/Session'

const Home = LoadableComponent(() => import('./pages/Home'));
const TableDemo = LoadableComponent(() => import('./pages/AntCom/TableDemo'));
const FormDemo = LoadableComponent(() => import('./pages/AntCom/FormDemo'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
                {/*<Route exact path='/home/ant/form' component={FormDemo}/>*/}
                <Redirect exact from='/' to='/home'/>
              </Switch>
            </Index>
          }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
