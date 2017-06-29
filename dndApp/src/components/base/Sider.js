import React,{Component} from 'react';

import { Layout, Menu, Icon, Breadcrumb ,Card ,Modal,Button,Row,Col} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import init from '../../utli/Init';
const { Header, Content, Footer, Sider } = Layout;
const confirm = Modal.confirm;

export default class CharacterSider extends Component{
    constructor(){
    super();

    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }
    handleClearCharacter(){
        const {actions} = this.props;
        confirm({
            title: '重置为默认属性',
            content: '初始化人物会丢失当前所有修改，要继续吗？',
            onOk() {
                localStorage.initFlag = false;
                init();
                actions.fetchCharacter();
            },
            onCancel() {},
        });

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
                            <Link>
                                <Icon type="user" className="text" />
                                <span className="nav-text text">nav 1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link>
                                <Icon type="video-camera" className="text"  />
                                <span className="nav-text text">nav 2</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link>
                                <Icon type="upload" className="text"  />
                                <span className="nav-text text">nav 3</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link>
                                <Icon type="user" className="text"  />
                                <span className="nav-text text">nav 4</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Row type = 'flex' justify="center">
                        <Button onClick={()=>{this.handleClearCharacter()}} size="large" style={{margin:'1rem'}}>
                            <Icon type="user-delete" className="text"  />
                            <span className="text">初始化人物</span>
                        </Button>
                    </Row>



                </Sider>

                {this.props.children}

            </Layout>
          )
  }


}