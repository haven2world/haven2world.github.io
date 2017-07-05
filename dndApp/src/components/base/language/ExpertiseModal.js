/**
 * Created by Chen Haowen on 2017/7/5.
 */
'use strict';
import React,{Component} from 'react';

import { Row,Col,Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch,Checkbox,Popover  } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import expertiseData from '../../../asset/ExpertiseData';
import roleData from '../../../asset/RoleData';
import Stepper from '../../common/Stepper_ant';
const confirm = Modal.confirm;

export default class ExpertiseModal extends Component{
    constructor(){
        super();
        this.state={
            visible:false,
            chooseList:[],
            chooseListMap:{}
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps) {
        if(!this.props.visible && nextProps.visible){
            this.setState({visible:true});
        }
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        this.props.callback(this.state.chooseList);
        this.props.onClose();
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
        this.props.onClose();
    }
    onChangeChoose(i,v,cla){
        let {chooseList,chooseListMap} = this.state;
        if(v){
            chooseListMap[i] = chooseList.length;
            chooseList.push({id:i,class:cla});
        }else{
                chooseList.splice(chooseListMap[i],1);
        }
        this.setState({chooseList,chooseListMap});
    }

    renderMagicBook(){

        let data = expertiseData;
        let temp1 = data.common.map((k,i)=>{
            return(
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1}>
                            <Checkbox  onChange={(e)=>{this.onChangeChoose(i,e.target.checked,'common')}}></Checkbox>
                        </Col>
                        <Col span={9}>
                            <p className="text" ><strong>{k.name}</strong></p>
                        </Col>
                        <Col span={14}>
                            <p className="text" ><strong>{k.condition}</strong></p>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={1}/>
                        <Col span={23}>
                            <p className="text" >{k.effect}</p>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            )
        });
        let temp2 = data.making.map((k,i)=>{
            return(
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1}>
                            <Checkbox  onChange={(e)=>{this.onChangeChoose(i,e.target.checked,'making')}}></Checkbox>
                        </Col>
                        <Col span={9}>
                            <p className="text" ><strong>{k.name}</strong></p>
                        </Col>
                        <Col span={14}>
                            <p className="text" ><strong>{k.condition}</strong></p>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={1}/>
                        <Col span={23}>
                            <p className="text" >{k.effect}</p>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            )
        });
        let temp3 = data.magic.map((k,i)=>{
            return(
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1}>
                            <Checkbox  onChange={(e)=>{this.onChangeChoose(i,e.target.checked,'magic')}}></Checkbox>
                        </Col>
                        <Col span={9}>
                            <p className="text" ><strong>{k.name}</strong></p>
                        </Col>
                        <Col span={14}>
                            <p className="text" ><strong>{k.condition}</strong></p>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={1}/>
                        <Col span={23}>
                            <p className="text" >{k.effect}</p>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            )
        });

        let temp =(
          <div>
              <Row type="flex" align="middle">
                  <Col span={1}/>
                  <Col span={9}>
                      <p className="text" ><strong>一般专长</strong></p>
                  </Col>
                  <Col span={9}>
                      <p className="text" >先决条件</p>
                  </Col>
              </Row>
              <div className="littleInterval"></div>
              {temp1}
              <Row type="flex" align="middle">
                  <Col span={1}/>
                  <Col span={9}>
                      <p className="text" ><strong>制造专长</strong></p>
                  </Col>
                  <Col span={9}>
                      <p className="text" >先决条件</p>
                  </Col>
              </Row>
              <div className="littleInterval"></div>
              {temp2}
              <Row type="flex" align="middle">
                  <Col span={1}/>
                  <Col span={9}>
                      <p className="text" ><strong>超魔专长</strong></p>
                  </Col>
                  <Col span={9}>
                      <p className="text" >先决条件</p>
                  </Col>
              </Row>
              <div className="littleInterval"></div>
              {temp3}
          </div>
        );

        return temp;
    }

    render(){

        let title='选择专长';

        return(
            <Modal
                title={title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width={document.documentElement.clientWidth-100}
            >
                {this.renderMagicBook()}
                <Row type="flex" align="middle">
                    <Col span={1}/>
                    <Col span={23}>
                        <p className="text" >（1）战士可选此作为战士额外专长。</p>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={1}/>
                    <Col span={23}>
                        <p className="text" >（2）你可多次选择本专长，但并非累加效果。每选一次，就必须选择一种新的武器、技能、魔法学派或法术。</p>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={1}/>
                    <Col span={23}>
                        <p className="text" >（3）你可多次选择本专长，效果可累加。</p>
                    </Col>
                </Row>
            </Modal>
        )
    }


}