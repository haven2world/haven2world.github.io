/**
 * Created by Chen Haowen on 2017/6/27.
 */
'use strict';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../actions/Character';
import roleData from '../../asset/role';

const Option = Select.Option;

class BaseData extends Component {
    constructor() {
        super();
        this.state = {
            role:[],
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        let {dnd} = nextProps.character;
        console.log(nextProps.character)
        let role = JSON.parse(dnd.role);

        this.setState({role});
    }
    componentWillUnmount() {
    }

    onChangeText(key,e){
        let actions = this.props.actions;
        actions.updateCharacter(key,e.target.value);
    }
    onChangeNum(key,v){
        let actions = this.props.actions;
        actions.updateCharacter(key,v);
    }
    onChangeRoleGrade(i,v){
        let role = this.state.role;
        role[i].grade = v;
        this.state.role = role;
        this.setState({role});
        this.onChangeRole();
    }
    onChangeRoleClass(i,v){
        let role = this.state.role;
        role[i].role = v;
        this.state.role = role;
        this.setState({role});
        this.onChangeRole();
    }

    onChangeRole(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.role);
        actions.updateCharacter('role',v);
    }

    render() {
        let {dnd} = this.props.character;
        let actions = this.props.actions;

        //render role
        let renderRole;
        let roleOptions = roleData.map((k,i)=>{
           return(
               <Option key={i} value={i.toString()}>
                   {i==0?"未选择":k}
               </Option>
           )
        });
        if(this.state.role instanceof Array && this.state.role.length>0){
            renderRole = this.state.role.map((k,i)=>{
                if(i==0){
                    return(
                        <Row key={i} type="flex" align="middle">
                            <Col span={4} >
                                <p className="label">职业 </p>
                            </Col>
                            <Col span={2}>
                                <a className="text" onClick={()=>{}}><Icon type="plus" /></a>
                            </Col>
                            <Col span={6} >
                                <Select className="input" defaultValue={k.role.toString()} style={{width:'100%'}}>
                                    {roleOptions}
                                </Select>
                            </Col>
                            <Col span={4} >
                                <InputNumber  className="input"
                                              min={1} max={20}
                                              value={k.grade}
                                              onChange={(v)=>{this.onChangeRoleGrade(i,v)}}

                                />
                            </Col>
                        </Row>
                    )
                }else{
                    return(
                        <Row key={i} type="flex" align="middle">
                            <Col span={4} ></Col>
                            <Col span={2}></Col>
                            <Col span={6} >
                                <Select className="input" defaultValue={k.role.toString()} >
                                    {roleOptions}
                                </Select>
                            </Col>
                            <Col span={4} >
                                <InputNumber  className="input"
                                              min={1} max={20}
                                              value={k.grade}
                                              onChange={(v)=>{this.onChangeRoleGrade(i,v)}}

                                />
                            </Col>
                        </Row>
                    )
                }
            })
        }else{
            renderRole = (
                <Row type="flex" align="middle">
                    <Col span={4} >
                        <p className="label">职业 </p>
                    </Col>
                    <Col span={2}>
                        <a className="text" onClick={()=>{}}><Icon type="plus" /></a>
                    </Col>
                </Row>
            );
        }


        return (
            <div className="contentWrapper">
                <Row type="flex" align="middle">
                    <Col span={2} >
                        <p className="label">姓名</p>
                    </Col>
                    <Col span={8} >
                        <Input size="large" placeholder="Enter your Name" className="input"
                               value={dnd.name}
                               onChange={(e)=>{this.onChangeText('name',e)}}
                               prefix={<Icon type="user" />}
                        />
                    </Col>
                    <Col span={1} >
                    </Col>
                    <Col span={2} >
                        <p className="label">年龄</p>
                    </Col>
                    <Col span={4} >
                        <Input size="large" placeholder="Age" className="input"
                               value={dnd.age}
                               onChange={(e)=>{this.onChangeText('age',e)}}
                        />
                    </Col>
                    <Col span={1} >
                    </Col>
                    <Col span={2} >
                        <p className="label">速度</p>
                    </Col>
                    <Col span={4} >
                        <Input size="large" placeholder="Speed" className="input"
                               value={dnd.speed}
                               onChange={(e)=>{this.onChangeText('speed',e)}}
                        />
                    </Col>
                </Row>
                <div className="littleInterval"></div>
                <Row type="flex" align="start">
                    <Col span={12}>
                        {renderRole}
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>

                <div className="littleInterval"></div>
                <Row type="flex" align="middle">
                    <Col span={2} >
                        <p className="label">职业</p>
                    </Col>
                    <Col span={2} >
                        <p className="text">法师</p>
                    </Col>
                    <Col span={2} >
                        <InputNumber  className="input"
                                      min={1} max={20}
                                      value={dnd.str}
                                      onChange={(v)=>{this.onChangeNum('str',v)}}

                        />
                    </Col>
                </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseData)
