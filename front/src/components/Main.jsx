import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import RouteHook from 'react-route-hook';

import store from '../store/index'

import SearchBarContainer from '../containers/SearchBarContainer';
import DisplayContainer from '../containers/DisplayContainer';
import SingleDisplayContainer from '../containers/SingleDisplayContainer';
import UsersContainer from '../containers/UsersContainer'

import {fetchOne} from '../store/actions/moviesAndShows';
import {fetchUsers, checkUser} from '../store/actions/users';


const onSingleDisplayEnter = (props)=>{
    store.dispatch(fetchOne(props.match.params.id))
  }

const onUsersEnter = () => {
  store.dispatch(fetchUsers())
}
export default () => {

  useEffect(() => {
    store.dispatch(checkUser())
  });

  return(
    <div id='main' className='container-fluid'>
        <Route path='/' component={SearchBarContainer} />
        <Route path='/' exact component={DisplayContainer}/>
        <RouteHook path='/users' exact component={UsersContainer} onEnter={onUsersEnter}/>
        <RouteHook path='/display/:id' exact component={SingleDisplayContainer} onEnter={onSingleDisplayEnter}/>
    </div>)
};