/**
 * Created by Chen Haowen on 2017/6/27.
 */
'use strict';
import React,{Component} from 'react';


import {Row,Col} from 'antd'
import { Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber} from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import * as CharacterActions from '../../actions/Character';
import CharacterSider from './Sider';

const SubMenu = Menu.SubMenu;


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
                <Row>
                    <Col span={12} >
                        <label>姓名</label>
                        <Input placeholder="Enter your userName"
                               prefix={<Icon type="user" />}

                        />
                    </Col>
                </Row>
            </div>

        )
    }
}

