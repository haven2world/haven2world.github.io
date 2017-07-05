/**
 * Created by Chen Haowen on 2017/6/27.
 */
'use strict';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch,notification  } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../actions/Character';
import roleData from '../../asset/RoleData';
import Stepper from '../common/Stepper_ant';
import {getAttrAdjustValue} from '../../utli/Common';

const Option = Select.Option;

class BaseData extends Component {
    constructor() {
        super();
        this.state = {
            role:[],
            xpModal:false,
            getXp:0,
            weaponList:[],
        }
    }

    componentDidMount() {
        this.props.actions.fetchCharacter();
    }

    componentWillReceiveProps(nextProps) {
        let {dnd} = nextProps.character;

        let role = JSON.parse(dnd.role);
        let weaponList = JSON.parse(dnd.weaponList);

        this.setState({role,weaponList});
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
        role.splice(i,1);
        this.state.role = role;
        this.setState({role});
        this.onChangeRole();
    }
    onChangeRole(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.role);
        actions.updateCharacter('role',v);
    }
    onChangeWeaponList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.weaponList);
        actions.updateCharacter('weaponList',v);
    }
    onChangeWeaponItem(i,key,value){
        let weaponList = this.state.weaponList;
        weaponList[i][key] = value;
        this.state.weaponList = weaponList;
        this.setState({weaponList});
        this.onChangeWeaponList();
    }
    onAddWeapon(){
        let k = {"name":"木棒","attackBonus":0,"damage":"1d4-1d6","crit":"20 *2","range":10,"feature":"无","arrows":0,"weight":1};
        let weaponList = this.state.weaponList;
        weaponList.push(k);
        this.state.weaponList = weaponList;
        this.setState({weaponList});
        this.onChangeWeaponList();
    }
    onDeleteWeapon(i){
        let weaponList = this.state.weaponList;
        weaponList.splice(i,1);
        this.state.weaponList = weaponList;
        this.setState({weaponList});
        this.onChangeWeaponList();
    }
    getAttrFinal(key,value){

        return value;
    }
    handleUpGrade(){
        notification['warning']({
            message: '功能正在开发中',
            description: '升级流程正在开发中，现在请手动调整升级后的属性变化',
        });
    }
    handleGetXp(){
        this.setState({xpModal:true});
    }
    renderXpModal(){
        let {dnd} = this.props.character;
        let handleOk = ()=>{
            this.onChangeNum('xp',parseInt( dnd.xp) + parseInt(this.state.getXp));
            this.setState({getXp:0,xpModal:false});
        };
        let handleCancel = ()=>{
            this.setState({getXp:0,xpModal:false});
        };

        return(
          <Modal
              title="获得经验"
              visible={this.state.xpModal}
              onOk={handleOk}
              onCancel={handleCancel}>
              <InputNumber className="input" value={this.state.getXp} onChange={(v)=>{this.setState({getXp:v});this.state.getXp=v;}} />
          </Modal>
        );
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
        //render weaponList
        let renderWeaponList = this.state.weaponList.map((k,i)=>{
            return(
              <div key={i}>
                  <div className="littleInterval"></div>
                  <Row type="flex" align="middle">
                          <Col span={1}>
                              {(()=>{
                                 if(i == 0){
                                     return(
                                         <a className="text" onClick={()=>{this.onAddWeapon()}}><Icon type="plus" /></a>
                                     );
                                 } else{
                                     return(
                                         <a className="text" onClick={()=>{this.onDeleteWeapon(i)}}><Icon type="minus" /></a>
                                     )
                                 }
                              })()}
                          </Col>
                      <Col span={7}>
                          <Input size="large" placeholder="武器名" className="input"
                                 value={k.name}
                                 onChange={(e)=>{this.onChangeWeaponItem(i,'name',e.target.value)}}
                          />
                      </Col>
                      <Col span={4}><p className="label">攻击加值</p></Col>
                      <Col span={5}>
                          <Stepper value={k.attackBonus}
                                   onChange={(v)=>{this.onChangeWeaponItem(i,'attackBonus',v)}}></Stepper>
                      </Col>
                      <Col span={2}><p className="label">射程</p></Col>
                      <Col span={5}>
                          <Stepper value={k.range}
                                   onChange={(v)=>{this.onChangeWeaponItem(i,'range',v)}}></Stepper>
                      </Col>
                  </Row>
                  <div className="littleInterval"></div>
                  <Row type="flex" align="middle">
                      <Col span={4}><p className="label">重击倍数</p></Col>
                      <Col span={4}>
                          <Input size="large" className="input"
                                 value={k.crit}
                                 onChange={(e)=>{this.onChangeWeaponItem(i,'crit',e.target.value)}}
                          />
                      </Col>
                      <Col span={3}><p className="label">伤害</p></Col>
                      <Col span={4}>
                          <Input size="large" className="input"
                                 value={k.damage}
                                 onChange={(e)=>{this.onChangeWeaponItem(i,'damage',e.target.value)}}
                          />
                      </Col>
                      <Col span={2} ><p className="label">特性</p></Col>
                      <Col span={7}>
                          <Input size="large" placeholder="特性" className="input"
                                 value={k.feature}
                                 onChange={(e)=>{this.onChangeWeaponItem(i,'feature',e.target.value)}}
                          />
                      </Col>
                  </Row>
                  <div className="littleInterval"></div>
                  <Row type="flex" align="middle">
                      <Col span={2} ><p className="label">重量</p></Col>
                      <Col span={5} >
                          <Stepper value={k.weight}
                                   onChange={(v)=>{this.onChangeWeaponItem(i,'weight',v)}}></Stepper>
                      </Col>
                      <Col span={1}>
                          <Switch defaultChecked={k.arrowFlag} onChange={(v)=>{this.onChangeWeaponItem(i,'arrowFlag',v)}} />
                      </Col>
                      <Col span={2}><p className="label">弹药</p></Col>
                      {(()=>{
                         if(k.arrowFlag){
                             return(
                                 <Col span={13} >
                                     <Row type="flex" align="middle">
                                         <Col span={12}>
                                             <Stepper value={k.arrows}
                                                      onChange={(v)=>{this.onChangeWeaponItem(i,'arrows',v)}}></Stepper>
                                         </Col>
                                         <Col span={12}>
                                             <Button size="large" onClick={()=>{this.onChangeWeaponItem(i,'arrows',k.arrows+10)}} >购买10</Button>
                                             <Button size="large" onClick={()=>{this.onChangeWeaponItem(i,'arrows',k.arrows-1)}} >攻击</Button>
                                         </Col>
                                     </Row>
                                 </Col>
                             )
                         }
                      })()}
                  </Row>
                  <div className="littleInterval"></div>
              </div>
            );
        });

        return (
            <div className="contentWrapper">
                {this.renderXpModal()}
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
                            <Col span={5} >
                                <InputNumber value={dnd.xp} className="input"
                                         onChange={(v)=>{this.onChangeNum('xp',v)}}></InputNumber>
                            </Col>
                            <Col span={13}>
                                <Button.Group>
                                    <Button size="large" onClick={()=>{this.handleGetXp()}} >获得经验</Button>
                                    <Button size="large" onClick={()=>{this.handleUpGrade()}} >升级</Button>
                                </Button.Group>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row type="flex" align="middle">
                            <Col span={4} >
                                <p className="label">生命</p>
                            </Col>
                            <Col span={10} >
                                <Stepper value={dnd.hp}
                                             onChange={(v)=>{this.onChangeNum('hp',v)}}></Stepper>
                            </Col>
                            <Col span={8} >
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row type="flex" align="middle">
                            <Col span={4} >
                                <p className="label">AC</p>
                            </Col>
                            <Col span={4}>
                                <p className="label">防具</p>
                            </Col>
                            <Col span={9} >
                                <Stepper value={dnd.acArmor}
                                         onChange={(v)=>{this.onChangeNum('acArmor',v)}}></Stepper>
                            </Col>
                            <Col span={3} >
                                <p className="label">=></p>
                            </Col>
                            <Col span={4} >
                                <p className="label">{10 + getAttrAdjustValue(dnd.dex) + parseInt(dnd.acArmor)}</p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row type="flex" align="middle">
                            <Col span={8} >
                                <p className="label">强韧豁免</p>
                            </Col>
                            <Col span={10} >
                                <Stepper value={dnd.fortitude}
                                         onChange={(v)=>{this.onChangeNum('fortitude',v)}}></Stepper>
                            </Col>
                            <Col span={6} >
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row type="flex" align="middle">
                            <Col span={8} >
                                <p className="label">反射豁免</p>
                            </Col>
                            <Col span={10} >
                                <Stepper value={dnd.reflex}
                                         onChange={(v)=>{this.onChangeNum('reflex',v)}}></Stepper>
                            </Col>
                            <Col span={6} >
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row type="flex" align="middle">
                            <Col span={8} >
                                <p className="label">意志豁免</p>
                            </Col>
                            <Col span={10} >
                                <Stepper value={dnd.will}
                                         onChange={(v)=>{this.onChangeNum('will',v)}}></Stepper>
                            </Col>
                            <Col span={6} >
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="littleInterval"></div>
                <Row type="flex" align="middle">
                    <Col span={2} >
                        <p className="label"><strong>武器</strong></p>
                    </Col>
                    <Col span={6} >
                        <p className="label">基本攻击加值</p>
                    </Col>
                    <Col span={5} >
                        <Stepper value={dnd.basicAttackBonus}
                                 onChange={(v)=>{this.onChangeNum('basicAttackBonus',v)}}></Stepper>
                    </Col>
                </Row>
                {renderWeaponList}


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
