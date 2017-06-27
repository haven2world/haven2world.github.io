import React, { Component } from 'react';
import {Router, Route, Link, hashHistory,IndexRedirect,Redirect } from 'react-router';

import {Provider} from 'react-redux';
import store from '../store/Store';
import Indexdiv from '../components/index';
import character from '../components/base/Character';
import init from '../utli/Init';
import BaseData from '../components/base/BaseData';

const storeInstance = store();
init();

export default class App extends Component {
	constructor(){
		super()

	}
  render() {


  		
		return (
			<Provider store={storeInstance}>
				<div className="router">
				  <Router history={hashHistory}>
				  <Route name="Index" path="/" component={Indexdiv}  >
				  		<IndexRedirect to="/character/baseData"/>
						<Route name="character" path="character" component={character}>
                            <Route name="baseData" path="baseData" component={BaseData}></Route>
                        </Route>

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