import React, { Component } from 'react';
import {Router, Route, Link, hashHistory,IndexRedirect,Redirect } from 'react-router';

import {Provider} from 'react-redux';
import store from '../store/Store';
import Indexdiv from '../components/index'
import character from '../components/base/Character'

const storeInstance = store();

export default class App extends Component {
	constructor(){
		super()

	}
  render() {



		return (
			<Provider store={storeInstance}>
				<div className="router">
				  <Router history={hashHistory}>
				  <Route name="Index" breadcrumbName="Index" path="/" component={Indexdiv}  >
				  		<IndexRedirect to="/character"/>
						<Route name="character" breadcrumbName="character" path="character" component={character}></Route>

						<Route path="*" onEnter={errorToHome} />
				  </Route>
				  </Router>
				</div>
			</Provider>	
		);
  }
}

function errorToHome (nextState, replace) {
	replace(nextState.location.pathname, '/character');
}