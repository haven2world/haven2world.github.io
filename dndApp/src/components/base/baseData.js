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
import Stepper from '../common/Stepper';
import {getAttrAdjustValue} from '../../utli/Common';

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
    onAddRole(){
        let role = this.state.role;
        let k = {
            role:0,
            grade:0
        };
        role.push(k);
        this.state.role = role;
        this.setState({role});
        this.onChangeRole();
    }
    onDeleteRole(i){
        let role = this.state.role;
        role.splice(i,1)
        this.state.role = role;
        this.setState({role});
        this.onChangeRole();
    }
    onChangeRole(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.role);
        actions.updateCharacter('role',v);
    }
    getAttrFinal(key,value){

        return value;
    }
    handleUpGrade(){
        this.onChangeNum('xp',0);
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
                        <div key={i}>
                            <Row  type="flex" align="middle">
                                <Col span={4} >
                                    <p className="label">职业 </p>
                                </Col>
                                <Col span={2}>
                                    <a className="text" onClick={()=>{this.onAddRole()}}><Icon type="plus" /></a>
                                </Col>
                                <Col span={6} >
                                    <Select className="input" defaultValue={k.role.toString()} style={{width:'90%'}}
                                            onSelect={(v,o)=>{this.onChangeRoleClass(i,parseInt(v))}}>
                                        {roleOptions}
                                    </Select>
                                </Col>
                                <Col span={10} >
                                    <Stepper value={k.grade}
                                             onChange={(v)=>{this.onChangeRoleGrade(i,v)}}></Stepper>
                                </Col>
                            </Row>
                        </div>
                    )
                }else{
                    return(
                        <div key={i}>
                            <div className="littleInterval"></div>
                            <Row  type="flex" align="middle">
                                <Col span={4} ></Col>
                                <Col span={2}>
                                    <a className="text" onClick={()=>{this.onDeleteRole(i)}} ><Icon type="minus" /></a>
                                </Col>
                                <Col span={6} >
                                    <Select className="input" defaultValue={k.role.toString()} style={{width:'90%'}}
                                            onSelect={(v,o)=>{this.onChangeRoleClass(i,parseInt(v))}}>
                                        {roleOptions}
                                    </Select>
                                </Col>
                                <Col span={10} >
                                    <Stepper value={k.grade}
                                             onChange={(v)=>{this.onChangeRoleGrade(i,v)}}></Stepper>
                                </Col>

                            </Row>
                        </div>
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
                        <a className="text" onClick={()=>{this.onAddRole()}}><Icon type="plus" /></a>
                    </Col>
                </Row>
            );
        }

        //render attribute
        let renderAttr = (
          <div>
              <Row type="flex" align="middle">
                  <Col span={4} >
                      <p className="label">属性</p>
                  </Col>
                  <Col span={8} >
                      <p className="label" style={{textAlign:'center'}}>属性值</p>
                  </Col>
                  <Col span={6} >
                      <p className="label">最终值</p>
                  </Col>
                  <Col span={6} >
                      <p className="label">调整值</p>
                  </Col>
              </Row>
              <div className="littleInterval"></div>
              {(()=>{
                 let attrArr = [{key:'str',name:'力量'},
                     {key:'dex',name:'敏捷'},
                     {key:'con',name:'体质'},
                     {key:'int',name:'智力'},
                     {key:'wis',name:'感知'},
                     {key:'cha',name:'魅力'}];
                  let temp = attrArr.map((k,i)=>{
                     return(
                         <div key={i}>
                             <Row  type="flex" align="middle">
                                 <Col span={4} >
                                     <p className="label">{k.name}</p>
                                 </Col>
                                 <Col span={10} >
                                     <Stepper value={dnd[k.key]}
                                              onChange={(v)=>{this.onChangeNum(k.key,v)}}></Stepper>
                                 </Col>
                                 <Col span={4} >
                                     <p className="label">{this.getAttrFinal(k.key,dnd[k.key])}</p>
                                 </Col>
                                 <Col span={6} >
                                     <p className="label">{getAttrAdjustValue(dnd[k.key])}</p>
                                 </Col>
                             </Row>
                             <div className="littleInterval"></div>
                         </div>
                     )
                  });
                  return temp;
              })()}
          </div>
        );



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
                    <Col span={2} >
                    </Col>
                    <Col span={2} >
                        <p className="label">年龄</p>
                    </Col>
                    <Col span={3} >
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
                    <Col span={3} >
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
                        <Row type="flex" align="middle">
                            <Col span={4} >
                                <p className="label">阵营</p>
                            </Col>
                            <Col span={6} >
                                <Input size="large" className="input"
                                       value={dnd.faction}
                                       onChange={(e)=>{this.onChangeText('faction',e)}}
                                />
                            </Col>
                            <Col span={2} >
                            </Col>
                            <Col span={4} >
                                <p className="label">信仰</p>
                            </Col>
                            <Col span={6} >
                                <Input size="large" className="input"
                                       value={dnd.faith}
                                       onChange={(e)=>{this.onChangeText('faith',e)}}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="littleInterval"></div>
                <Row type="flex" align="start">
                    <Col span={12}>
                        {renderAttr}
                    </Col>
                    <Col span={12}>
                        <Row type="flex" align="middle">
                            <Col span={4} >
                                <p className="label">经验</p>
                            </Col>
                            <Col span={10} >
                                <Stepper value={dnd.xp}
                                         onChange={(v)=>{this.onChangeNum('xp',v)}}></Stepper>
                            </Col>
                            <Col span={8} >
                                <Button size="large" onClick={()=>{this.handleUpGrade()}} >升级</Button>
                            </Col>
                        </Row>
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
