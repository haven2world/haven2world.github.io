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
import Stepper from '../common/Stepper_ant';
import {getWeight} from '../../utli/Common';

const Option = Select.Option;

class Backpack extends Component {
    constructor() {
        super();
        this.state = {
            armorList:[],
            backpackList:[]
        }
    }

    componentDidMount() {
        this.props.actions.fetchCharacter();
    }

    componentWillReceiveProps(nextProps) {
        let {dnd} = nextProps.character;

        let armorList = JSON.parse(dnd.armorList);
        let backpackList = JSON.parse(dnd.backpackList);
        this.setState({armorList,backpackList});
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
    onChangeMoney(v){
        let {dnd} = this.props.character;
        let actions = this.props.actions;

        actions.updateCharacter('money',parseInt(dnd.money) + v);


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
    onChangeBackpackList(){
        let actions = this.props.actions;
        let v = JSON.stringify(this.state.backpackList);
        actions.updateCharacter('backpackList',v);
    }
    onChangeBackpackItem(i,key,value){
        let backpackList = this.state.backpackList;
        backpackList[i][key] = value;
        this.state.backpackList = backpackList;
        this.setState({backpackList});
        this.onChangeBackpackList();
    }
    onAddBackpack(){
        let k = {"name":"无","amount":0,"weight":0};
        let backpackList = this.state.backpackList;
        backpackList.push(k);
        this.state.backpackList = backpackList;
        this.setState({backpackList});
        this.onChangeBackpackList();
    }
    onDeleteBackpack(i){
        let backpackList = this.state.backpackList;
        backpackList.splice(i,1);
        this.state.backpackList = backpackList;
        this.setState({backpackList});
        this.onChangeBackpackList();
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
                            <p className="label"><strong>盔甲</strong></p>
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
                            <p className="label"><strong>盾牌</strong></p>
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
                            <p className="label"><strong>防具</strong></p>
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
                            <p className="label"><strong>防具</strong></p>
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
        let renderBackpack = this.state.backpackList.map((k,i)=>{
            return(
                <div key={i}>
                    <Row type="flex" align="middle" key={i}>
                        <Col span={2}>
                            {(()=>{
                                if(i == 0){
                                    return(
                                        <a className="text" onClick={()=>{this.onAddBackpack()}}><Icon type="plus" /></a>
                                    );
                                } else{
                                    return(
                                        <a className="text" onClick={()=>{this.onDeleteBackpack(i)}}><Icon type="minus" /></a>
                                    )
                                }
                            })()}
                        </Col>
                        <Col span={7}><Input size="large" placeholder="物品名" className="input"
                                              value={k.name}
                                              onChange={(e)=>{this.onChangeBackpackItem(i,'name',e.target.value)}}
                        /></Col>
                        <Col span={2}><p className="label">数量</p></Col>
                        <Col span={5}>
                            <Stepper value={k.amount}
                                     onChange={(v)=>{this.onChangeBackpackItem(i,'amount',v)}}></Stepper>
                        </Col>
                        <Col span={4}><p className="label">X &nbsp;&nbsp;重量/单位</p></Col>
                        <Col span={2}>
                            <InputNumber value={k.weight} className="input"
                                     onChange={(v)=>{this.onChangeBackpackItem(i,'weight',v)}}></InputNumber>
                        </Col>
                        <Col span={2}><p className="label">={k.amount * k.weight}</p></Col>
                    </Row>
                    <div className="littleInterval"></div>
                </div>
            );
        });


        return (
            <div className="contentWrapper">
                {renderArmorList}
                <div className="littleInterval"></div>
                <div className="littleInterval"></div>
                <Row type="flex" align="middle" >
                    <Col span={2}><p className="label"><strong>金钱</strong></p></Col>
                    <Col span={1}><p className="label">金</p></Col>
                    <Col span={5}>
                        <Stepper value={Math.floor(dnd.money/100)}
                                 onAdd={()=>{this.onChangeMoney(100)}}
                                 onReduce={()=>{this.onChangeMoney(-100)}}
                        ></Stepper>
                    </Col>
                    <Col span={1}><p className="label">银</p></Col>
                    <Col span={5}>
                        <Stepper value={Math.floor((dnd.money%100)/10)}
                                 onAdd={()=>{this.onChangeMoney(10)}}
                                 onReduce={()=>{this.onChangeMoney(-10)}}
                        ></Stepper>
                    </Col>
                    <Col span={1}><p className="label">铜</p></Col>
                    <Col span={5}>
                        <Stepper value={Math.floor(dnd.money%10)}
                                 onAdd={()=>{this.onChangeMoney(1)}}
                                 onReduce={()=>{this.onChangeMoney(-1)}}
                        ></Stepper>
                    </Col>
                </Row>
                <Row type="flex" align="middle" >
                    <Col span={2}><p className="label"><strong>背包</strong></p></Col>
                    <Col span={5} ><p className="label">总负重:&nbsp;&nbsp;{getWeight(dnd)}&nbsp;磅</p></Col>
                </Row>
                <div className="littleInterval"></div>
                {renderBackpack}

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
