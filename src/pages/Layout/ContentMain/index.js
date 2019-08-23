import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom'

import Login from '../../Login/index';

class ContentMain extends React.Component {
  render() {
    return (
      <div style={{padding: '5px 20px'}}>
        <Switch>
          <Route exact path='/home' component={Login}/>
          <Route exact path='/home/nav1/option1' component={Login}/>
          <Route exact path='/home/nav1/option2' component={Login}/>
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

const styles = {}
export default ContentMain
