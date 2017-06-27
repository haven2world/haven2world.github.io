import React,{Component} from 'react';

import { Layout, Menu, Icon, Breadcrumb ,Card ,Modal,} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
const { Header, Content, Footer, Sider } = Layout;


export default class CharacterSider extends Component{
  constructor(){
    super();

  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }
  render(){

    return(
        <Layout >
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                style={{minHeight:'100%'}}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>

            {this.props.children}

        </Layout>
      )
  }


}