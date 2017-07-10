/**
 * Created by Chen Haowen on 2017/7/5.
 */
'use strict';
import React,{Component} from 'react';

import { Row,Col,Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch,Checkbox,Popover  } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import magicData from '../../asset/MagicData';
import roleData from '../../asset/RoleData';
import Stepper from '../common/Stepper_ant';
const confirm = Modal.confirm;

export default class GradeUpModal extends Component{
    constructor(){
        super();
        this.state={
            visible:false,
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
            visible: false,chooseList:[],
            chooseListMap:{}
        });
        this.props.callback(this.state.chooseList);
        this.modalKey++;
        this.props.onClose();
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,chooseList:[],
            chooseListMap:{}
        });
        this.modalKey++;
        this.props.onClose();
    }


    renderGradeUp(){
        let temp = null;
        return temp;
    }
    modalKey = 0;

    render(){

        let title='升级流程'


        return(
            <Modal
                key={this.modalKey}
                title={title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}

            >
                {this.renderGradeUp()}
            </Modal>
        )
    }


}