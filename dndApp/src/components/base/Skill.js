/**
 * Created by Chen Haowen on 2017/6/27.
 */
'use strict';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../actions/Character';
import skillData from '../../asset/SkillData';
import coEffectData from '../../asset/CoEffectData';
import Stepper from '../common/Stepper_ant';
import {getAttrAdjustValue} from '../../utli/Common';



class Skill extends Component {
    constructor() {
        super();
        this.state = {
            skillList:[],
            role:[],
            specialSkillList:[]
        }
    }

    componentDidMount() {
        this.props.actions.fetchCharacter();
    }

    componentWillReceiveProps(nextProps) {
        let {dnd} = nextProps.character;

        let role = JSON.parse(dnd.role);
        let skillList = JSON.parse(dnd.skillList);
        let specialSkillList = JSON.parse(dnd.specialSkillList);

        this.setState({role,skillList,specialSkillList});
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

    onChangeSkillList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.skillList);
        actions.updateCharacter('skillList',v);
    }
    onChangeSkillItem(i,key,value){
        let skillList = this.state.skillList;
        skillList[i][key] = value;
        this.state.skillList = skillList;
        this.setState({skillList});
        this.onChangeSkillList();
    }

    onChangeSpecialSkillList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.specialSkillList);
        actions.updateCharacter('specialSkillList',v);
    }
    onChangeSpecialSkillItem(i,key,value){
        let specialSkillList = this.state.specialSkillList;
        specialSkillList[i][key] = value;
        this.state.specialSkillList = specialSkillList;
        this.setState({specialSkillList});
        this.onChangeSpecialSkillList();
    }
    onAddSpecialSkill(){
        let k = {"name":"无","amount":0,"weight":0};
        let specialSkillList = this.state.specialSkillList;
        specialSkillList.push(k);
        this.state.specialSkillList = specialSkillList;
        this.setState({specialSkillList});
        this.onChangeSpecialSkillList();
    }
    onDeleteSpecialSkill(i){
        let specialSkillList = this.state.specialSkillList;
        specialSkillList.splice(i,1);
        this.state.specialSkillList = specialSkillList;
        this.setState({specialSkillList});
        this.onChangeSpecialSkillList();
    }


    render() {
        let {dnd} = this.props.character;
        let actions = this.props.actions;


        //render skillList
        let renderSkillList = this.state.skillList.map((k,i)=>{
            let da = skillData[i];
            return(
              <div key={i}>
                  <div className="littleInterval"></div>
                  <Row type="flex" align="middle">

                      <Col span={1}>
                          {(()=>{
                              let flag = false;
                              this.state.role.forEach((kk,ii)=>{
                                 if(kk.grade>0 && da.role[kk.role-1]){
                                     flag = true;
                                 }
                              });
                              if(flag){
                                  return(
                                      <Icon type="like-o" className="text"/>
                                  );
                              }
                          })()}
                      </Col>
                      <Col span={5}><p className="label" style={(da.notTrained||k.skillGrade>0)?{textAlign:'left',fontWeight:'bold'}:{textAlign:'left',color:'rgba(0,0,0,0.5)'}}>{da.name+(da.armorTest?" (-"+da.armorTest+") ":'')+(da.notTrained?" ■ ":"")}</p></Col>
                      <Col span={4}>
                          <p className="label" style={{textAlign:'center'}}>{da.attr?getAttrAdjustValue(dnd,da.attr):0}</p>
                      </Col>
                      <Col span={5}>
                          <Stepper value={k.skillGrade}
                                   onChange={(v)=>{this.onChangeSkillItem(i,'skillGrade',v)}}></Stepper>
                      </Col>
                      <Col span={5}>
                          <Stepper value={k.otherAdjust}
                                   onChange={(v)=>{this.onChangeSkillItem(i,'otherAdjust',v)}}></Stepper>
                      </Col>
                      <Col span={4}>
                          <p className="label" style={{textAlign:'center'}}>{(da.notTrained||k.skillGrade>0)?((da.attr?getAttrAdjustValue(dnd,da.attr):0 )+k.skillGrade+k.otherAdjust):0   }</p>
                      </Col>
                  </Row>
              </div>
            );
        });
        //render specialSkill
        let rendeSpecialSkill = this.state.specialSkillList.map((k,i)=>{

            return(
              <div key={i}>
                  <div className="littleInterval"></div>
                  <Row type="flex" align="middle">
                      <Col span={2}>
                          {(()=>{
                              if(i == 0){
                                  return(
                                      <a className="text" onClick={()=>{this.onAddSpecialSkill()}}><Icon type="plus" /></a>
                                  );
                              } else{
                                  return(
                                      <a className="text" onClick={()=>{this.onDeleteSpecialSkill(i)}}><Icon type="minus" /></a>
                                  )
                              }
                          })()}
                      </Col>
                      <Col span={6}><Input size="large"  className="input"
                                           value={k.name}
                                           onChange={(e)=>{this.onChangeSpecialSkillItem(i,'name',e.target.value)}}
                      /></Col>
                      <Col span={16}><Input size="large" placeholder="描述" className="input"
                                           value={k.description}
                                           onChange={(e)=>{this.onChangeSpecialSkillItem(i,'description',e.target.value)}}
                      /></Col>
                  </Row>

              </div>
            );
        });

        return (
            <div className="contentWrapper">
                <Row type="flex" align="middle">
                    <Col span={2} />
                    <Col span={6} >
                        <p className="label" style={{textAlign:'center'}}>特殊能力</p>
                    </Col>
                    <Col span={2} >
                        <p className="label">描述</p>
                    </Col>
                </Row>
                {rendeSpecialSkill}
                <div className="littleInterval"></div>
                <Row type="flex" align="middle">
                    <Col span={2} >
                        <p className="label">技能</p>
                    </Col>
                    <Col span={8} >
                        <p className="label">当前最高技能级数</p>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={1} >
                        <p className="label">本职</p>
                    </Col>
                    <Col span={5} >
                        <p className="label" style={{textAlign:'center'}}>技能名称</p>
                        <p className="label" style={{textAlign:'center'}}>( ■ : 需受训 )</p>
                    </Col>
                    <Col span={4} >
                        <p className="label" style={{textAlign:'center'}}>属性调整值</p>
                    </Col>
                    <Col span={5} >
                        <p className="label" style={{textAlign:'center'}}>技能级数</p>
                    </Col>
                    <Col span={5} >
                        <p className="label" style={{textAlign:'center'}}>其他调整值</p>
                    </Col>
                    <Col span={4} >
                        <p className="label" style={{textAlign:'center'}}>最终值</p>
                    </Col>
                </Row>
                <div className="littleInterval"></div>
                {renderSkillList}
                <div className="littleInterval"></div>
                <Row type="flex" align="middle">
                    <Col span={5} >
                        <p className="label" style={{textAlign:'center'}}><strong>共效技能</strong></p>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={5} >
                        <p className="label" style={{textAlign:'center'}}>等级>5</p>
                    </Col>
                    <Col span={19} >
                        <p className="label" style={{textAlign:'left'}}>获得+2加值</p>
                    </Col>
                </Row>
                {(()=>{
                    let temp = coEffectData.map((k,i)=>{
                        return (<div key={i} >
                           <div className="littleInterval"></div>
                           <Row type="flex" align="middle">
                               <Col span={5} >
                                   <p className="label" style={{textAlign:'center'}}>{k[0]}</p>
                               </Col>
                               <Col span={19} >
                                   <p className="label" style={{textAlign:'left'}}>{k[1]}</p>
                               </Col>
                           </Row>
                       </div>)
                    });
                    return temp;
                })()}


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

export default connect(mapStateToProps, mapDispatchToProps)(Skill)
