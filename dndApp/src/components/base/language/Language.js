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
import roleData from '../../../asset/RoleData';
import expertiseData from '../../../asset/ExpertiseData';
import Stepper from '../../common/Stepper_ant';
import ExpertiseModal from './ExpertiseModal';
import {getAttrAdjustValue} from '../../../utli/Common';

const Option = Select.Option;

class Language extends Component {
    constructor() {
        super();
        this.state = {
            expertiseList:[],
            languageList:[],
            visible:false,
        }
    }

    componentDidMount() {
        this.props.actions.fetchCharacter();
    }

    componentWillReceiveProps(nextProps) {
        let {dnd} = nextProps.character;

        let expertiseList =JSON.parse(dnd.expertiseList);;
        let languageList = JSON.parse(dnd.languageList);

        this.setState({languageList,expertiseList});
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
    onChangeLanguageList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.languageList);
        actions.updateCharacter('languageList',v);
    }
    onChangeLanguageItem(i,key,value){
        let languageList = this.state.languageList;
        languageList[i][key] = value;
        this.state.languageList = languageList;
        this.setState({languageList});
        this.onChangeLanguageList();
    }
    onAddLanguage(){
        let k = {"name":"通用语"};
        let languageList = this.state.languageList;
        languageList.push(k);
        this.state.languageList = languageList;
        this.setState({languageList});
        this.onChangeLanguageList();
    }
    onDeleteLanguage(i){
        let languageList = this.state.languageList;
        languageList.splice(i,1);
        this.state.languageList = languageList;
        this.setState({languageList});
        this.onChangeLanguageList();
    }
    onChangeExpertiseList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.expertiseList);
        actions.updateCharacter('expertiseList',v);
    }
    onChangeExpertiseItem(i,key,value){
        let expertiseList = this.state.expertiseList;
        expertiseList[i][key] = value;
        this.state.expertiseList = expertiseList;
        this.setState({expertiseList});
        this.onChangeExpertiseList();
    }
    onAddExpertise(){
        let k = {"name":"通用语"};
        let expertiseList = this.state.expertiseList;
        expertiseList.push(k);
        this.state.expertiseList = expertiseList;
        this.setState({expertiseList});
        this.onChangeExpertiseList();
    }
    onDeleteExpertise(i){
        let expertiseList = this.state.expertiseList;
        expertiseList.splice(i,1);
        this.state.expertiseList = expertiseList;
        this.setState({expertiseList});
        this.onChangeExpertiseList();
    }

    onAddExpertiseModal(){
        this.setState({visible:true})
    }
    onAddExpertiseModalCallback(ids){
        ids.forEach((k,i)=>{
            this.onAddExpertise(k.id,k.class);
        })
    }
    onAddExpertise(id,cla){
        let expertiseList = this.state.expertiseList;

        let temp = {id:id,remarks:'',class:cla};
        expertiseList.push(temp);

        this.state.expertiseList = expertiseList;
        this.setState({expertiseList});
        this.onChangeExpertiseList();
    }
    renderExpertiseList(){
        let {dnd} = this.props.character;
        let data = expertiseData;
        let temp = this.state.expertiseList.map((k,i)=>{

            return (
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1} >
                            <a className="text" onClick={()=>{this.onDeleteExpertise(i)}}><Icon type="minus" /></a>
                        </Col>
                        <Col span={10}>
                            <p className="text" >{data[k.class][k.id].name}</p>
                        </Col>
                        <Col span={4}><Popover content={(<div><p className="text">{data[k.class][k.id].effect}</p></div>)}   trigger="click">
                            <Button size="large"><span className="text">简介</span></Button>
                        </Popover></Col>
                        <Col span={8}>
                            <Input size="large" placeholder="备注" className="input"
                                   value={k.remarks}
                                   onChange={(e)=>{this.onChangeExpertiseItem(i,'remarks',e.target.value)}}
                            />
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            );

        });

        return temp;
    }
    render() {
        let {dnd} = this.props.character;
        let actions = this.props.actions;


        //render languageList
        let renderLanguageList = this.state.languageList.map((k,i)=>{
            return(
              <div key={i}>
                  <div className="littleInterval"></div>
                  <Row type="flex" align="middle">
                      <Col span={1}/>
                      <Col span={1}>
                          {(()=>{
                             if(i == 0){
                                 return(
                                     <a className="text" onClick={()=>{this.onAddLanguage()}}><Icon type="plus" /></a>
                                 );
                             } else{
                                 return(
                                     <a className="text" onClick={()=>{this.onDeleteLanguage(i)}}><Icon type="minus" /></a>
                                 )
                             }
                          })()}
                      </Col>
                      <Col span={7}>
                          <Input size="large" placeholder="语言" className="input"
                                 value={k.name}
                                 onChange={(e)=>{this.onChangeLanguageItem(i,'name',e.target.value)}}
                          />
                      </Col>
                  </Row>
                  <div className="littleInterval"></div>
              </div>
            );
        });


        return (
            <div className="contentWrapper">
                <ExpertiseModal visible={this.state.visible} callback={(ids,cla)=>{this.onAddExpertiseModalCallback(ids,cla)}} onClose={()=>{this.setState({visible:false})}} />
                <div className="littleInterval"></div>
                <Row type="flex" align="middle">
                    <Col span={2} >
                        <p className="label"><strong>语言</strong></p>
                    </Col>
                    <Col span={6} >

                    </Col>
                    <Col span={5} >

                    </Col>
                </Row>
                {renderLanguageList}
                <div className="littleInterval"></div>
                <Row type="flex" align="middle">
                    <Col span={2} >
                        <p className="label"><strong>专长</strong></p>
                    </Col>
                    <Col span={4}>
                        <Button size="large" type="primary" onClick={()=>{this.onAddExpertiseModal()}}><Icon className="text" type="file-add" /></Button>
                    </Col>
                    <Col span={5} >

                    </Col>
                </Row>
                <div className="littleInterval"></div>
                {this.renderExpertiseList()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Language)
