import React from 'react';

import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import BackTop from '../backTop'

const SubMenu = Menu.SubMenu;


export default class Analysis extends React.Component{
  constructor() {
    super();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render(){
    return(
      <div className="analysis" >
        <p>123</p>
      </div>
      )
  } 


}