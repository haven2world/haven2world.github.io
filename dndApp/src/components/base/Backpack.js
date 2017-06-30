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
import roleData from '../../asset/role';
import Stepper from '../common/Stepper';
import {getAttrAdjustValue} from '../../utli/Common';

const Option = Select.Option;

class Backpack extends Component {
    constructor() {
        super();
        this.state = {
            armorList:[],
        }
    }

    componentDidMount() {
        this.props.actions.fetchCharacter();
    }

    componentWillReceiveProps(nextProps) {
        let {dnd} = nextProps.character;

        let armorList = JSON.parse(dnd.armorList);

        this.setState({armorList});
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

    onChangeArmorList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.armorList);
        actions.updateCharacter('armorList',v);
    }
    onChangeArmorItem(i,key,value){
        let armorList = this.state.armorList;
        armorList[i][key] = value;
        this.state.armorList = armorList;
        this.setState({armorList});
        this.onChangeArmorList();
    }



    render() {
        let {dnd} = this.props.character;
        let actions = this.props.actions;



        //render armorList
        let armorList = this.state.armorList;
        let renderArmorList = null;
        if(armorList.length>0){
            renderArmorList = (
                <div >
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={2}>
                            <p className="label">盔甲</p>
                        </Col>
                        <Col span={6}>
                            <Input size="large"  className="input"
                                   value={armorList[0].name}
                                   onChange={(e)=>{this.onChangeArmorItem(0,'name',e.target.value)}}
                            />
                        </Col>
                        <Col span={3}><p className="label">防具加值</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[0].armorBonus}
                                     onChange={(v)=>{this.onChangeArmorItem(0,'armorBonus',v)}}></Stepper>
                        </Col>
                        <Col span={3}><p className="label">检定减值</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[0].testImpairment}
                                     onChange={(v)=>{this.onChangeArmorItem(0,'testImpairment',v)}}></Stepper>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={4}><p className="label">速度&nbsp;&nbsp;(30 20)</p></Col>
                        <Col span={4}>
                            <Input size="large"  className="input"
                                   value={armorList[0].speed}
                                   onChange={(e)=>{this.onChangeArmorItem(0,'speed',e.target.value)}}
                            />
                        </Col>
                        <Col span={3}><p className="label">法术失效</p></Col>
                        <Col span={4}>
                            <Input size="large" className="input"
                                   value={armorList[0].magicFailure}
                                   onChange={(e)=>{this.onChangeArmorItem(0,'magicFailure',e.target.value)}}
                            />
                        </Col>
                        <Col span={2} ><p className="label">特性</p></Col>
                        <Col span={6}>
                            <Input size="large" placeholder="特性" className="input"
                                   value={armorList[0].feature}
                                   onChange={(e)=>{this.onChangeArmorItem(0,'feature',e.target.value)}}
                            />
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={4}><p className="label">最大敏捷加值</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[0].maxDexBonus}
                                     onChange={(v)=>{this.onChangeArmorItem(0,'maxDexBonus',v)}}
                            />
                        </Col>
                        <Col span={4}><p className="label">负重</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[0].weight}
                                     onChange={(v)=>{this.onChangeArmorItem(0,'weight',v)}}></Stepper>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={2}>
                            <p className="label">盾牌</p>
                        </Col>
                        <Col span={6}>
                            <Input size="large"  className="input"
                                   value={armorList[1].name}
                                   onChange={(e)=>{this.onChangeArmorItem(1,'name',e.target.value)}}
                            />
                        </Col>
                        <Col span={3}><p className="label">防具加值</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[1].armorBonus}
                                     onChange={(v)=>{this.onChangeArmorItem(1,'armorBonus',v)}}></Stepper>
                        </Col>
                        <Col span={3}><p className="label">检定减值</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[1].testImpairment}
                                     onChange={(v)=>{this.onChangeArmorItem(1,'testImpairment',v)}}></Stepper>
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={2}><p className="label">负重</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[1].weight}
                                     onChange={(v)=>{this.onChangeArmorItem(1,'weight',v)}}></Stepper>
                        </Col>
                        <Col span={1} />
                        <Col span={3}><p className="label">法术失效</p></Col>
                        <Col span={4}>
                            <Input size="large" className="input"
                                   value={armorList[1].magicFailure}
                                   onChange={(e)=>{this.onChangeArmorItem(1,'magicFailure',e.target.value)}}
                            />
                        </Col>
                        <Col span={2} ><p className="label">特性</p></Col>
                        <Col span={6}>
                            <Input size="large" placeholder="特性" className="input"
                                   value={armorList[1].feature}
                                   onChange={(e)=>{this.onChangeArmorItem(1,'feature',e.target.value)}}
                            />
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={2}>
                            <p className="label">防具</p>
                        </Col>
                        <Col span={6}>
                            <Input size="large"  className="input"
                                   value={armorList[2].name}
                                   onChange={(e)=>{this.onChangeArmorItem(2,'name',e.target.value)}}
                            />
                        </Col>
                        <Col span={3}><p className="label">防具加值</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[2].armorBonus}
                                     onChange={(v)=>{this.onChangeArmorItem(2,'armorBonus',v)}}></Stepper>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={5}></Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={2}><p className="label">负重</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[2].weight}
                                     onChange={(v)=>{this.onChangeArmorItem(2,'weight',v)}}></Stepper>
                        </Col>
                        <Col span={1} />

                        <Col span={2} ><p className="label">特性</p></Col>
                        <Col span={13}>
                            <Input size="large" placeholder="特性" className="input"
                                   value={armorList[2].feature}
                                   onChange={(e)=>{this.onChangeArmorItem(2,'feature',e.target.value)}}
                            />
                        </Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={2}>
                            <p className="label">防具</p>
                        </Col>
                        <Col span={6}>
                            <Input size="large"  className="input"
                                   value={armorList[3].name}
                                   onChange={(e)=>{this.onChangeArmorItem(3,'name',e.target.value)}}
                            />
                        </Col>
                        <Col span={3}><p className="label">防具加值</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[3].armorBonus}
                                     onChange={(v)=>{this.onChangeArmorItem(3,'armorBonus',v)}}></Stepper>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={5}></Col>
                    </Row>
                    <div className="littleInterval"></div>
                    <Row type="flex" align="middle">
                        <Col span={2}><p className="label">负重</p></Col>
                        <Col span={5}>
                            <Stepper value={armorList[3].weight}
                                     onChange={(v)=>{this.onChangeArmorItem(3,'weight',v)}}></Stepper>
                        </Col>
                        <Col span={1} />

                        <Col span={2} ><p className="label">特性</p></Col>
                        <Col span={13}>
                            <Input size="large" placeholder="特性" className="input"
                                   value={armorList[3].feature}
                                   onChange={(e)=>{this.onChangeArmorItem(3,'feature',e.target.value)}}
                            />
                        </Col>
                    </Row>
                </div>
            );
        }
        //render backpack
        let renderBackpack = null;


        return (
            <div className="contentWrapper">
                {renderArmorList}


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

export default connect(mapStateToProps, mapDispatchToProps)(Backpack)
