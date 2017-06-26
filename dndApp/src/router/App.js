import React, { Component } from 'react';
import {Router, Route, Link, hashHistory,IndexRedirect,Redirect } from 'react-router';

import Indexdiv from '../components/index'
import personalInformation from '../components/hospital/hospital'




export default class App extends Component {
	constructor(){
		super()

	}
  render() {



		return (
			<div className="router">
			  <Router history={hashHistory}>
			  <Route name="Index" breadcrumbName="Index" path="/" component={Indexdiv}  >
					<Route name="personalInformation" breadcrumbName="personalInformation" path="personalInformation" component={personalInformation}></Route>
			  </Route>
			  </Router>
			</div>
		);
  }
}

