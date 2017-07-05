/**
 * Created by Chen Haowen on 2017/6/27.
 */
'use strict';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Row,Col,Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch,Checkbox,Popover  } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../../actions/Character';
import magicData from '../../../asset/MagicData';
import roleData from '../../../asset/RoleData';
import Stepper from '../../common/Stepper_ant';
import {getAttrAdjustValue} from '../../../utli/Common';
import MagicBook from './MagicBook';
const Option = Select.Option;



class Magic extends Component {
    constructor() {

        super();
        let magicList = [null,null,[[{"id":0}],[],[],[],[],[],[]],{"magic":[[{"id":0,"ready":false}],[],[],[],[],[],[],[],[],[]],"field":[{"id":0,"magic":[{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false}]},{"id":1,"magic":[{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false}]}]},[[{"id":0}],[],[],[],[],[],[],[],[],[]],null,null,[[{"id":0,"ready":false}],[],[],[]],[[{"id":0,"ready":false}],[],[],[]],null,[[{"id":0,"ready":false}],[],[],[],[],[],[],[],[],[]]];
        this.state = {
            magicList,
            role:[],
            visible:false,
            magicBookProps:{
                role:null,
                grade:0
            }
        }
    }

    componentDidMount() {
        this.props.actions.fetchCharacter();
    }

    componentWillReceiveProps(nextProps) {
        let {dnd} = nextProps.character;

        let role = JSON.parse(dnd.role);
        let magicList = JSON.parse(dnd.magicList);

        this.setState({role,magicList});
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

    onChangeMagicList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.magicList);
        actions.updateCharacter('magicList',v);
    }
    onChangeMagicItem(role,grade,i,key,value){
        let magicList = this.state.magicList;

        if(role == '3'){
            magicList[role].magic[grade][i][key] = value;
        }else{
            magicList[role][grade][i][key] = value;
        }

        this.state.magicList = magicList;
        this.setState({magicList});
        this.onChangeMagicList();
    }
    onChangeFieldItem(no,key,value,index){
        let magicList = this.state.magicList;

        if(key == 'id'){
            magicList[3].field[no].id = value;
        }else if(key == 'magic'){
            magicList[3].field[no].magic[index].ready = value;
        }

        this.state.magicList = magicList;
        this.setState({magicList});
        this.onChangeMagicList();
    }
    onAddMagic(role,grade,id){
        let magicList = this.state.magicList;

        let temp = {id:id};
        if(role == '2'||role == '4'){
            temp.ready = false;
        }
        if(role == '3'){
            magicList[role].magic[grade].push(temp);
        }else{
            magicList[role][grade].push(temp);
        }

        this.state.magicList = magicList;
        this.setState({magicList});
        this.onChangeMagicList();
    }
    onAddMagicModal(role,grade){
        this.setState({magicBookProps:{role,grade},visible:true})
    }
    onAddMagicModalCallback(ids){
        ids.forEach((k,i)=>{
            this.onAddMagic(this.state.magicBookProps.role,this.state.magicBookProps.grade,k);
        })
    }
    onDeleteMagic(role,grade,i){
        let magicList = this.state.magicList;

        if(role == '3'){
            magicList[role].magic[grade].splice(i,1);
        }else{
            magicList[role][grade].splice(i,1);
        }

        this.state.magicList = magicList;
        this.setState({magicList});
        this.onChangeMagicList();
    }

    renderMagicPriest(){
        let data = magicData['3'].field;
        let self = this.state.magicList['3'].field;
        let fieldOptions = data.map((k,i)=>{
            return(
                <Option key={i} value={i.toString()}>
                    {k.fieldName}
                </Option>
            )
        });
        let temp = self.map((k,i)=>{
           return(
               <div key={i}>
                   <Row type="flex" align="middle">
                       <Col span={3}> <p className="label" style={{}}>领域：</p></Col>
                       <Col span={3}>
                           <Select className="input" value={k.id.toString()} style={{width:'90%'}}
                                   onSelect={(v,o)=>{this.onChangeFieldItem(i,'id',e.target.checked)}}>
                               {fieldOptions}
                           </Select>
                       </Col>
                       <Col span={12}> <p className="label" style={{textAlign:'left'}}>信仰：{data[k.id].god}</p></Col>
                   </Row>
                   <div className="littleInterval"></div>
                   <Row type="flex" align="middle">
                       <Col span={3}> <p className="label" style={{}}>加成：</p></Col>
                       <Col span={21}> <p className="label" style={{textAlign:'left'}}>{data[k.id].addition}</p></Col>
                   </Row>
                   <div className="littleInterval"></div>
                   {(()=>{
                      let temp = data[k.id].magic.map((kk,ii)=>{

                          return(
                          <div key={ii}>
                              <Row type="flex" align="middle">
                                  <Col span={12} >
                                      <Row type="flex" align="middle">
                                          <Col span={1} >
                                          </Col>
                                          <Col span={1} />
                                          <Col span={1} >
                                              <Checkbox checked={k.magic[ii].ready}
                                                  onChange={(e)=>{this.onChangeFieldItem(i,'magic',e.target.checked,ii)}}></Checkbox>
                                          </Col>
                                          <Col span={1} />
                                          <Col span={16}>
                                              <p className="label" style={{textAlign:'center'}}>{kk.name}</p>
                                          </Col>
                                          <Col span={4}><Popover content={(<div><p className="text">{kk.introduction}</p></div>)}   trigger="click">
                                              <Button size="large"><span className="text">简介</span></Button>
                                          </Popover></Col>
                                      </Row>
                                  </Col>
                              </Row>
                              <div className="littleInterval"></div>
                          </div>)
                      })
                       return temp;
                   })()}
                   <div className="littleInterval"></div>
                   <div className="littleInterval"></div>
               </div>
           )
        });
        return temp;
    }
    renderMagic4(role){
        let magicGrades = [
            '一级法术',
            '二级法术',
            '三级法术',
            '四级法术',
        ];
        let dataIndex = role=='11'?'10':role;

        let temp = magicGrades.map((k,i)=>{

            return(
                <div key={i}>
                    <Row type="flex" align="start">
                        <Col span={12} >
                            <Row type="flex" align="middle">
                                <Col span={4}/>
                                <Col span={16} >
                                    <p className="label" style={{textAlign:'center'}}><strong>{k}</strong></p>
                                </Col>
                                <Col span={4}>
                                    <Button size="large" type="primary" onClick={()=>{this.onAddMagicModal(role,i)}}><Icon className="text" type="file-add" /></Button>
                                </Col>
                            </Row>
                            <div className="littleInterval"></div>
                            {this.renderMagics(role=='3'?this.state.magicList[role].magic[i]:this.state.magicList[role][i],role=='3'?magicData[dataIndex].magic[i]:magicData[dataIndex][i],(!(role=='2'||role=='4'||role=='10')),role,i)}
                        </Col>
                        <Col span={12} >
                            <Row type="flex" align="middle">
                                <Col span={24} >
                                    <p className="label" style={{textAlign:'center'}}>当前等级可用的{k}</p>
                                </Col>
                            </Row>
                            <div className="littleInterval"></div>
                            <Row type="flex" align="middle">
                                <Col span={24} >
                                    <p className="label" style={{textAlign:'center'}}>正在整理数据与开发中</p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            )
        });
        return temp;
    }
    renderMagic6(role){
        let magicGrades = [
            '零级法术',
            '一级法术',
            '二级法术',
            '三级法术',
            '四级法术',
            '五级法术',
            '六级法术',
        ];
        let dataIndex = role=='11'?'10':role;

        let temp = magicGrades.map((k,i)=>{

            return(
                <div key={i}>
                    <Row type="flex" align="start">
                        <Col span={12} >
                            <Row type="flex" align="middle">
                                <Col span={4}/>
                                <Col span={16} >
                                    <p className="label" style={{textAlign:'center'}}><strong>{k}</strong></p>
                                </Col>
                                <Col span={4}>
                                    <Button size="large" type="primary" onClick={()=>{this.onAddMagicModal(role,i)}}><Icon className="text" type="file-add" /></Button>
                                </Col>
                            </Row>
                            <div className="littleInterval"></div>
                            {this.renderMagics(role=='3'?this.state.magicList[role].magic[i]:this.state.magicList[role][i],role=='3'?magicData[dataIndex].magic[i]:magicData[dataIndex][i],(!(role=='2'||role=='4'||role=='10')),role,i)}
                        </Col>
                        <Col span={12} >
                            <Row type="flex" align="middle">
                                <Col span={24} >
                                    <p className="label" style={{textAlign:'center'}}>当前等级可用的{k}</p>
                                </Col>
                            </Row>
                            <div className="littleInterval"></div>
                            <Row type="flex" align="middle">
                                <Col span={24} >
                                    <p className="label" style={{textAlign:'center'}}>正在整理数据与开发中</p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            )
        });
        return temp;
    }
    renderMagic9(role){

        let magicGrades = [
            '零级法术',
            '一级法术',
            '二级法术',
            '三级法术',
            '四级法术',
            '五级法术',
            '六级法术',
            '七级法术',
            '八级法术',
            '九级法术',
        ];
        let dataIndex = role=='11'?'10':role;

        let temp = magicGrades.map((k,i)=>{

           return(
               <div key={i}>
                   <Row type="flex" align="start">
                       <Col span={12} >
                           <Row type="flex" align="middle">
                               <Col span={4}/>
                               <Col span={16} >
                                   <p className="label" style={{textAlign:'center'}}><strong>{k}</strong></p>
                               </Col>
                               <Col span={4}>
                                   <Button size="large" type="primary" onClick={()=>{this.onAddMagicModal(role,i)}}><Icon className="text" type="file-add" /></Button>
                                </Col>
                           </Row>
                           <div className="littleInterval"></div>
                           {this.renderMagics(role=='3'?this.state.magicList[role].magic[i]:this.state.magicList[role][i],role=='3'?magicData[dataIndex].magic[i]:magicData[dataIndex][i],(!(role=='2'||role=='4'||role=='10')),role,i)}
                       </Col>
                       <Col span={12} >
                           <Row type="flex" align="middle">
                               <Col span={24} >
                                   <p className="label" style={{textAlign:'center'}}>当前等级可用的{k}</p>
                               </Col>
                           </Row>
                           <div className="littleInterval"></div>

                       </Col>
                   </Row>
                   <div className="littleInterval"></div>
               </div>
           )
        });
        return temp;
    }
    renderMagics(mag,data,readyFlag,role,grade){
        let temp = mag.map((k,i)=>{
            return (
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1} >
                            <a className="text" onClick={()=>{this.onDeleteMagic(role,grade,i)}}><Icon type="minus" /></a>
                        </Col>
                        <Col span={1} />
                        <Col span={1} >
                            {(()=>{
                                if(readyFlag){
                                    return(
                                        <Checkbox checked={k.ready}
                                                  onChange={(e)=>{this.onChangeMagicItem(role,grade,i,'ready',e.target.checked)}}></Checkbox>
                                    )
                                }
                            })()}

                        </Col>
                        <Col span={1} />
                        <Col span={16}>
                            <p className="label" style={{textAlign:'center'}}>{data[k.id].name}</p>
                        </Col>
                        <Col span={4}><Popover content={(<div>{(role=='10'||role=='11')?(<p className="text">{data[k.id].class}类法术</p>):null}<p className="text">{data[k.id].introduction}</p></div>)}   trigger="click">
                            <Button size="large"><span className="text">简介</span></Button>
                        </Popover></Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            )
        });
        return temp;
    }
    renderMagicAmount(role){

    }



    renderMagicList(role){
        switch (role){
            case '2':
                return (
                    <div>
                        {this.renderMagic6(role)}
                    </div>
                );
            case '3':
                return (
                    <div>
                        {this.renderMagic9(role)}
                        <div className="littleInterval"></div>
                        {this.renderMagicPriest()}
                    </div>
                );
            case '4':
                return (
                    <div>
                        {this.renderMagic9(role)}
                    </div>
                );
            case '7':
                return (
                    <div>
                        {this.renderMagic4(role)}
                    </div>
                );
            case '8':
                return (
                    <div>
                        {this.renderMagic4(role)}
                    </div>
                );
            case '10':
                return (
                    <div>
                        {this.renderMagic9(role)}
                    </div>
                );
            case '11':
                return (
                    <div>
                        {this.renderMagic9(role)}
                    </div>
                );
            case '0':
            case '1':
            case '5':
            case '6':
            case '9':
            default:
                return(
                    <Row type="flex" align="middle">
                        <Col span={24} >
                            <p className="label" style={{textAlign:'center'}}>当前选择职业非法术职业</p>
                        </Col>
                    </Row>
                )
        }
    }

    render() {
        let {dnd} = this.props.character;
        let actions = this.props.actions;

        let {role,magicList} = this.state;
        let roleOptions = role.map((k,i)=>{
              return(
                <Option key={i.toString()} value={i.toString()}>
                    {k.role==0?"未选择":roleData[k.role]}
                </Option>
            )
        });

        let specializationList = [
            '无',
            '防护',
            '咒法',
            '预言',
            '附魔',
            '塑能',
            '幻术',
            '死灵',
            '变化',
            '共通',
        ];
        let magicOptions = specializationList.map((k,i)=>{
            return(
                <Option key={i} value={i.toString()}>
                    {k}
                </Option>
            )
        });
        return (
            <div className="contentWrapper">
                <MagicBook visible={this.state.visible} {...this.props} role={this.state.magicBookProps.role} grade={this.state.magicBookProps.grade}
                           callback={(ids)=>{this.onAddMagicModalCallback(ids)}} onClose={()=>{this.setState({visible:false})}}/>
                <Row type="flex" align="middle">
                    <Col span={4}>
                        <p className="label">拥有的职业</p>
                    </Col>
                    <Col span={6} >
                        <Select className="input" value={dnd.selectMagicRole?dnd.selectMagicRole.toString():'0'} style={{width:'90%'}}
                                onSelect={(v,o)=>{this.onChangeNum('selectMagicRole',parseInt(v))}}>
                            {roleOptions}
                        </Select>
                    </Col>
                    {role.length?role[dnd.selectMagicRole].role.toString()!='11'?null:(
                        <Col span={4}>
                            <p className="label">专精</p>
                        </Col>
                    ):null}
                    {role.length?role[dnd.selectMagicRole].role.toString()!='11'?null:(
                        <Col span={6} >
                            <Select className="input" value={dnd.specialization?dnd.specialization.toString():'0'} style={{width:'90%'}}
                                    onSelect={(v,o)=>{this.onChangeNum('specialization',parseInt(v))}}>
                                {magicOptions}
                            </Select>
                        </Col>
                    ):null}

                </Row>
                <div className="littleInterval"></div>
                {this.renderMagicList(role.length?role[dnd.selectMagicRole].role.toString():'0')}


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

export default connect(mapStateToProps, mapDispatchToProps)(Magic)
