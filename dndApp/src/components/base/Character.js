import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../actions/Character';
import CharacterSider from './Sider';


const SubMenu = Menu.SubMenu;


class CharacterIndex extends Component{
  constructor() {
    super();
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render(){
    return(
      <div className="wrapper" >
          <CharacterSider actions={this.props.actions}>
              {this.props.children}
          </CharacterSider>
      </div>
      )
  } 


}
function mapStateToProps(state) {
  const {character} = state;
  return { character }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CharacterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterIndex)
