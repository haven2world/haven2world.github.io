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
        let loctions = window.location.href.split('#')[1].split('?')[0].split('/');
        let selected = '1';
        if(loctions[1].toLowerCase() == 'character'){
            switch (loctions[2].toLowerCase()){
                case 'basicdata':
                    selected = '1';
                    break;
                case 'skill':
                    selected = '2';
                    break;
                case 'magic':
                    selected = '3';
                    break;
                case 'backpack':
                    selected = '4';
                    break;
                case 'language':
                    selected = '6';
                    break;
            }
        }
        return(
            <Layout >
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" selectedKeys={[selected]}>
                        <Menu.Item key="1">
                            <Link to="/character/basicData">
                                <Icon type="user" className="text" />
                                <span className="nav-text text">基础信息</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/character/Skill">
                                <Icon type="star-o" className="text"  />
                                <span className="nav-text text">技能</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/character/Magic">
                                <Icon type="dingding" className="text"  />
                                <span className="nav-text text">法术</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/character/Backpack">
                                <Icon type="skin" className="text"  />
                                <span className="nav-text text">装备 背包</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/character/Language">
                                <Icon type="gift" className="text"  />
                                <span className="nav-text text">专长 语言</span>
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