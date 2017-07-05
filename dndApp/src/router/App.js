import React, { Component } from 'react';
import {Router, Route, Link, hashHistory,IndexRedirect,Redirect } from 'react-router';

import {Provider} from 'react-redux';
import store from '../store/Store';
import Indexdiv from '../components/index';
import character from '../components/base/Character';
import init from '../utli/Init';
import BasicData from '../components/base/BasicData';
import Backpack from '../components/base/Backpack';
import Language from '../components/base/language/Language';
import Skill from '../components/base/Skill';
import Magic from '../components/base/magic/Magic';

const storeInstance = store();
if(!localStorage.initFlag){
	init();

}

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
						<IndexRedirect to="/character/BasicData"/>
						<Route name="character" path="character" component={character}>
							<Route name="BasicData" path="BasicData" component={BasicData}></Route>
							<Route name="Backpack" path="Backpack" component={Backpack}></Route>
							<Route name="Language" path="Language" component={Language}></Route>
							<Route name="Skill" path="Skill" component={Skill}></Route>
							<Route name="Magic" path="Magic" component={Magic}></Route>
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
	replace(nextState.location.pathname, '/character/BasicData');
}