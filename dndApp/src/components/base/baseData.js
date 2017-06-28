/**
 * Created by Chen Haowen on 2017/6/27.
 */
'use strict';
import React,{Component} from 'react';


import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../actions/Character';
import CharacterSider from './Sider';




export default class CharacterIndex extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        console.log(1)
        return (
            <div className="contentWrapper">
                <Row type="flex" align="middle">
                    <Col span={1} >
                        <p>姓名</p>
                    </Col>
                    <Col span={4} >
                        <Input placeholder="Enter your Name"
                               prefix={<Icon type="user" />}

                        />
                    </Col>
                    <Col span={1} >
                    </Col>
                    <Col span={1} >
                        <p>年龄</p>
                    </Col>
                    <Col span={2} >
                        <Input placeholder="Age"
                        />
                    </Col>
                    <Col span={1} >
                    </Col>
                    <Col span={1} >
                        <p>速度</p>
                    </Col>
                    <Col span={2} >
                        <Input placeholder="Speed"
                        />
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={1} >
                        <p>职业</p>
                    </Col>
                    <Col span={1} >
                        <p>法师</p>
                    </Col>
                    <Col span={4} >
                        <InputNumber placeholder="Enter your userName"
                               prefix={<Icon type="user" />}

                        />
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={1} >
                        <p>职业</p>
                    </Col>
                    <Col span={1} >
                        <p>法师</p>
                    </Col>
                    <Col span={8} >
                        <InputNumber placeholder="Enter your userName" />
                    </Col>
                </Row>
            </div>

        )
    }
}

