/**
 * Created by Chen Haowen on 2017/6/27.
 */
'use strict';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch,Checkbox,Popover  } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../actions/Character';
import magicData from '../../asset/MagicData';
import roleData from '../../asset/RoleData';
import Stepper from '../common/Stepper_ant';
import {getAttrAdjustValue} from '../../utli/Common';
const Option = Select.Option;



class Magic extends Component {
    constructor() {

        super();
        let magicList = [null,null,[[{"id":0}],[],[],[],[],[],[]],{"magic":[[{"id":0,"ready":false}],[],[],[],[],[],[],[],[],[]],"field":[{"id":0,"magic":[{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false}]},{"id":1,"magic":[{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false},{"ready":false}]}]},[[{"id":0}],[],[],[],[],[],[],[],[],[]],null,null,[[{"id":0,"ready":false}],[],[],[]],[[{"id":0,"ready":false}],[],[],[]],null,[[{"id":0,"ready":false}],[],[],[],[],[],[],[],[],[]]];
        this.state = {
            magicList,
            role:[]
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
    onChangeMagicItem(role,key,value){
        let magicList = this.state.magicList;
        magicList[i][key] = value;
        this.state.magicList = magicList;
        this.setState({magicList});
        this.onChangeMagicList();
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
                                   onSelect={(v,o)=>{}}>
                               {fieldOptions}
                           </Select>
                       </Col>
                   </Row>
                   <div className="littleInterval"></div>
               </div>
           )
        });
        return temp;
    }
    renderMagic4(role){

    }
    renderMagic6(role){

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
                                   <p className="label" style={{textAlign:'center'}}>{k}</p>
                               </Col>
                               <Col span={4}>
                                   <Button size="large" type="primary"><Icon className="text" type="file-add" /></Button>
                                </Col>
                           </Row>
                           <div className="littleInterval"></div>
                           {this.renderMagics(role=='3'?this.state.magicList[role].magic[i]:this.state.magicList[role][i],role=='3'?magicData[dataIndex].magic[i]:magicData[dataIndex][i],(!(role=='2'||role=='4')))}
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
    renderMagics(mag,data,readyFlag){
        let temp = mag.map((k,i)=>{
            console.log(data,(k.id==0||k.id)?k.id:k)
            return (
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1} >
                            <a className="text" onClick={()=>{console.log('delete')}}><Icon type="minus" /></a>
                        </Col>
                        <Col span={1} />
                        <Col span={1} >
                            {(()=>{
                                if(readyFlag){
                                    return(
                                        <Checkbox
                                                  onChange={(e)=>{console.log(`checked = ${e.target.checked}`);}}></Checkbox>
                                    )
                                }
                            })()}

                        </Col>
                        <Col span={1} />
                        <Col span={16}>
                            <p className="label" style={{textAlign:'center'}}>{data[(k.id==0||k.id)?k.id:k].name}</p>
                        </Col>
                        <Col span={4}><Popover content={(<p className="text">{data[(k.id==0||k.id)?k.id:k].introduction}</p>)}  trigger="click">
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


        return (
            <div className="contentWrapper">
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
