import React,{Component} from 'react';

import { Layout, Menu, Icon, Breadcrumb ,Card ,Modal,Button,Row,Col,Input} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import init from '../../utli/Init';
import exportData from '../../utli/ExportData';
import importData from '../../utli/ImportData';
const { Header, Content, Footer, Sider } = Layout;
const confirm = Modal.confirm;

export default class CharacterSider extends Component{
    constructor(){
    super();
        this.state={
            exportVisible: false,
            importVisible:false,
            importValue:''
        }
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
    handleExport(){
        this.setState({exportVisible:true})
    }
    handleImport(){
        this.setState({importVisible:true})
    }
    handleExportOk = (e) => {
        console.log(e);
        this.setState({
            exportVisible: false,
        });
    }
    handleExportCancel = (e) => {
        console.log(e);
        this.setState({
            exportVisible: false,
        });
    }
    handleImportOk = (e) => {
        console.log(e);
        importData(this.state.importValue);
        const {actions} = this.props;
        actions.fetchCharacter();
        this.setState({
            importVisible: false,
        });
    }
    handleImportCancel = (e) => {
        console.log(e);
        this.setState({
            importVisible: false,
        });
    }
    onChangeImport(e){
        this.setState({importValue:e.target.value});
    }
    renderExportModal(){
        return(
            <Modal
                title="导出数据"
                visible={this.state.exportVisible}
                onOk={this.handleExportOk}
                onCancel={this.handleExportCancel}
            >
                <p className="text">完整复制以下字符串：(移动端可长按复制全部)</p>
                <div className="littleInterval"></div>
                <Input value={exportData()} />
            </Modal>
        )
    }
    renderImportModal(){
        return(
            <Modal
                title="导出数据"
                visible={this.state.importVisible}
                onOk={this.handleImportOk}
                onCancel={this.handleImportCancel}
            >
                <p className="text">完整粘贴导出的字符串：</p>
                <div className="littleInterval"></div>
                <Input defaultValue="" onChange={(e)=>{this.onChangeImport(e)}} />
            </Modal>
        )
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
                {this.renderExportModal()}
                {this.renderImportModal()}
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
                    <Row type = 'flex' justify="center">
                        <Button onClick={()=>{this.handleExport()}} size="large" style={{margin:'1rem'}}>
                            <Icon type="upload" className="text"  />
                            <span className="text">导出</span>
                        </Button>
                    </Row>
                    <Row type = 'flex' justify="center">
                        <Button onClick={()=>{this.handleImport()}} size="large" style={{margin:'1rem'}}>
                            <Icon type="download" className="text"  />
                            <span className="text">导入</span>
                        </Button>
                    </Row>



                </Sider>

                {this.props.children}

            </Layout>
          )
  }


}