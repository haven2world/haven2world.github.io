/**
 * Created by Chen Haowen on 2017/7/5.
 */
'use strict';
import React,{Component} from 'react';

import { Row,Col,Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch,Checkbox,Popover  } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import magicData from '../../../asset/MagicData';
import roleData from '../../../asset/RoleData';
import Stepper from '../../common/Stepper_ant';
const confirm = Modal.confirm;

export default class MagicBook extends Component{
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
    onChangeChoose(i,v){
        let {chooseList,chooseListMap} = this.state;
        if(v){
            chooseListMap[i] = chooseList.length;
            chooseList.push(i);
        }else{
                chooseList.splice(chooseListMap[i],1);
        }
        this.setState({chooseList,chooseListMap});
    }

    renderMagicBook(role,grade){
        if(!role){
            return;
        }
        let data = role=='3'?magicData[role].magic[grade]:magicData[role=='11'?'10':role][grade];
        let temp = data.map((k,i)=>{
            return(
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1}>
                            <Checkbox  onChange={(e)=>{this.onChangeChoose(i,e.target.checked)}}></Checkbox>
                        </Col>
                        <Col span={1}/>
                        <Col span={10}>
                            <p className="text" ><strong>{k.name}</strong></p>
                        </Col>
                        <Col span={6}>
                            {(role=='10'||role=='11')?(<p className="text">{k.class}类法术</p>):null}
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={1}/>
                        <Col span={23}>
                            <p className="text" >{k.introduction}</p>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            )
        });
        return temp;
    }

    render(){
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
        let {role,grade} = this.props;
        let title=roleData[role];

        title += ' '+ ((role=='7'||role=='8')?magicGrades[grade+1]:magicGrades[grade]);


        return(
            <Modal
                title={title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}

            >
                {this.renderMagicBook(role,grade)}
            </Modal>
        )
    }


}