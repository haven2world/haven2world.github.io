/**
 * Created by Chen Haowen on 2017/7/5.
 */
'use strict';
import React,{Component} from 'react';

import { Row,Col,Menu, Icon, Breadcrumb ,Card ,Modal, Input,InputNumber,Form,Button,Select,Switch,Checkbox,Popover,notification ,Radio  } from 'antd';
import {Router, Route, Link, hashHistory,IndexRedirect } from 'react-router';
import magicData from '../../asset/MagicData';
import roleData from '../../asset/RoleData';
import roleGradeUpData from '../../asset/RoleGradeUpData';
import xpData from '../../asset/XpData';
import expertiseData from '../../asset/ExpertiseData';
import raceData from '../../asset/RaceData';
import Stepper from '../common/Stepper_ant';
import {getTotalGrade,getAttrAdjustValue,getAttrFinal} from '../../utli/Common';
const confirm = Modal.confirm;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class GradeUpModal extends Component{
    constructor(){
        super();
        this.state={
            visible:false,
            func:[{func:this.test,props:{a:'start'}}],//{func:,props:{}}
            chooseRole:0,
            chooseRoleFlag:false,
            roleGrade:0,
            hp:0,
            hpFlag:false,
            attr:null,
            attrFlag:false,
            expWar:false,
            expMonk:false,
            expNormal:false,
            expMagic:false,
            expList:[],
            expMap:{},
            expFlag:false,

            renderState:0,
        //    0 选择升级职业
        //    1 选择属性
        //    2 掷生命骰
        //    3 选择专长
        //    4 其他变动
        //    5 前往选择技能
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
    test = ({a})=>{
        console.log(a)
    }
    check(){
        let error = '请完成当页内容';
        switch (this.state.renderState){
            case 0:
                if(this.state.chooseRoleFlag||this.state.chooseRole){
                    return {code:0};
                }else{
                    return {code:1,error};
                }
                break;
            case 1:
                if(this.state.attrFlag||this.state.attr){
                    return {code:0};
                }else{
                    return {code:1,error};
                }
                break;
            case 2:
                if(this.state.hpFlag||this.state.hp){
                    return {code:0};
                }else{
                    return {code:1,error};
                }
                break;
            case 3:
                let amount = (this.state.expNormal?1:0)+(this.state.expWar?1:0)+ (this.state.expMonk?1:0)+ (this.state.expMagic?1:0);
                if(this.state.expFlag||this.state.expList.length>=amount){
                    return {code:0};
                }else if(this.state.expList.length < amount&&this.state.expList.length>0){
                    error = `您有${amount -this.state.expList.length}项专长尚未选择，请稍后自行补全`
                    return {code:2,error}
                }
                else{
                    return {code:1,error};
                }
                break;
            case 4:
                return  {code:0};
            case 5:
                return  {code:0};
        }
        return {code:0};
    }
    toUpRole = ({role})=>{
        let {actions,character:{dnd}} = this.props;
        let Role = JSON.parse(dnd.role);
        Role.forEach((k,i)=>{
            if(k.role == role){
                k.grade+=1;
            }
        });
        let v = JSON.stringify(Role);
        actions.updateCharacter('role',v);
    }
    toNewRole = ({role})=>{
        let {actions,character:{dnd}} = this.props;
        let Role = JSON.parse(dnd.role);
        Role.push({role:role,grade:1});
        let v = JSON.stringify(Role);
        actions.updateCharacter('role',v);
    }
    toAddAttr =({attr})=>{
        let {actions,character:{dnd}} = this.props;
        let v = dnd[attr]*1 + 1;
        actions.updateCharacter(attr,v);
    }
    toAddHp =({hp})=>{
        let {actions,character:{dnd}} = this.props;
        let v = dnd.hp*1 + hp;
        actions.updateCharacter('hp',v);
    }
    toAddExpertise = ({list}) =>{
        let {actions,character:{dnd}} = this.props;
        let expertiseList = JSON.parse(dnd.expertiseList);

        list.forEach((k,i)=>{
            let temp = {id:k.id,remarks:'',class:k.class};
            expertiseList.push(temp);
        })
        let v = JSON.stringify(expertiseList);
        actions.updateCharacter('expertiseList',v);
    }
    toAddSpecialSkill =({list,role,grade})=>{
        let {actions,character:{dnd}} = this.props;
        let specialSkillList = JSON.parse(dnd.specialSkillList);

        list.forEach((k,i)=>{
            let temp = {name:k,description:roleData[role]+grade+'级自动添加'};
            specialSkillList.push(temp);
        })
        let v = JSON.stringify(specialSkillList);
        actions.updateCharacter('specialSkillList',v);
    }
    toClearXp =()=>{
        let {actions,character:{dnd}} = this.props;
        let v = xpData[this.props.grade+2].xp-1;
        actions.updateCharacter('xp',v);
    }


    todoList(){
        let {dnd} = this.props.character;
        let func = this.state.func;
        switch (this.state.renderState){
            case 0:
            if(!this.state.chooseRoleFlag){
                let role = JSON.parse(dnd.role);
                let newFlag = true;
                role.forEach((k,i)=>{
                    if(k.role==this.state.chooseRole){
                        newFlag = false;
                    }
                });
                if(newFlag){
                    func.push({func:this.toNewRole,props:{role:this.state.chooseRole}});
                }else{
                    func.push({func:this.toUpRole,props:{role:this.state.chooseRole}});
                }
            }else{
                this.setState({chooseRole:1});
            }
            break;
            case 1:
                if(!this.state.attrFlag){
                    func.push({func:this.toAddAttr,props:{attr:this.state.attr}});
                }else{
                    this.setState({attr:null});
                }
                break;
            case 2:
                if(!this.state.hpFlag){
                    let rollHp = this.state.hp;
                    let totalHp = rollHp + parseInt(getAttrAdjustValue(dnd,'con'));
                    if(this.state.attr=='con'&& getAttrAdjustValue(dnd,'con',parseInt(getAttrFinal(dnd,'con'))+1) > getAttrAdjustValue(dnd,'con')){
                        totalHp += parseInt(this.props.grade)+1;
                    }
                    if(totalHp<=0){
                        totalHp = 1;
                    }
                    func.push({func:this.toAddHp,props:{hp:totalHp}});
                }else{
                    this.setState({hp:0});
                }
                break;
            case 3:
                if(!this.state.expFlag){
                    func.push({func:this.toAddExpertise,props:{list:this.state.expList}});
                }else{
                    this.setState({expList:[]});
                }
                break;
            case 4:
                if(roleGradeUpData[this.state.chooseRole].specialSkill[this.state.roleGrade].length>0&&!this.state.chooseRoleFlag){
                    func.push({func:this.toAddSpecialSkill,props:{list:roleGradeUpData[this.state.chooseRole].specialSkill[this.state.roleGrade],role:this.state.chooseRole,grade:this.state.roleGrade}});
                }
                break;
            case 5:
                if(xpData[this.props.grade+2].xp<=dnd.xp){
                    func.push({func:this.toClearXp,props:{}});
                }

        }
        this.setState({func});
    }
    handleOk = (e) => {
        let {dnd} = this.props.character;
        let warningText = '';
        if(this.state.renderState <5){
            let check = this.check();
            let nextData = this.props.nextData;
            if(check.code == 0){
                this.todoList();
                let renderState = this.state.renderState;
                if(this.state.renderState == 0 ){
                    let Role = JSON.parse(dnd.role);
                    let grade = 1;
                    for(let i = 0;i<Role.length;++i){
                        let k = Role[i];
                        if(k.role == this.state.chooseRole){
                            grade += parseInt(k.grade);
                            break;
                        }
                    }
                    this.setState({roleGrade:grade});
                    if(nextData.attr){
                        renderState+=1;
                    }else{
                       renderState+=2;
                    }
                }else if(this.state.renderState == 2){
                    let flag = false;
                    if(nextData.expertise){
                        flag = true;
                        this.state.expNormal = true;
                    }
                    if(this.state.chooseRole==5){
                        if(xpData[this.state.roleGrade].warriorExp){
                            flag = true;
                            this.state.expWar = true;
                        }else{
                            flag = false;
                        }
                    }
                    if(this.state.chooseRole==6){
                        if(xpData[this.state.roleGrade].monkExp){
                            flag = true;
                            this.state.expMonk = true;
                        }else{
                            flag = false;
                        }
                    }
                    if(this.state.chooseRole==11){
                        if(xpData[this.state.roleGrade].magicExp){
                            flag = true;
                            this.state.expMagic = true;
                        }else{
                            flag = false;
                        }
                    }
                    if(flag){
                        renderState+=1;
                    }else{
                        renderState+=2;
                    }
                } else{
                    renderState+=1;
                }
                this.setState({renderState});
                return;
            }else{
                warningText = check.error;
            }
        }else{
            let check = this.check();
            if(check.code == 0){
                this.todoList();
                this.setState({
                    visible: false,
                });
                this.props.callback(this.state.func);
                this.modalKey++;
                this.props.onClose();
                hashHistory.push({pathname:'/character/skill'});
                return;
            }else{
                warningText = check.error;
            }
        }
        notification['warning']({
            message: '当前页面尚未完成',
            description: warningText
        });


    }
    handleCancel = (e) => {
        this.setState({
            visible:false,
            func:[{func:this.test,props:{a:'start'}}],
            chooseRole:0,
            chooseRoleFlag:false,
            renderState:0,
            hp:0,
            hpFlag:false,
            attr:null,
            attrFlag:false,
            expWar:false,
            expMonk:false,
            expNormal:false,
            expMagic:false,
            expList:[],
            expMap:{},
            expFlag:false,
            roleGrade:0,
        });
        this.modalKey++;
        this.props.onClose();
    }
    onChangeRoleClass(v){
        this.setState({chooseRole:v})
    }
    onChangeRoleFlag(v){
        this.setState({chooseRoleFlag:v})
    }
    onChangeHp(v){
        this.setState({hp:v});
    }
    onChangeHpFlag(v){
        this.setState({hpFlag:v})
    }
    onChangeAttr(v){
        this.setState({attr:v});
    }
    onChangeAttrFlag(v){
        this.setState({attrFlag:v})
    }
    onChangeExp(i,v,cla){
        let expList = this.state.expList;
        let expMap = this.state.expMap;
        if(v){
            expMap[i] = expList.length;
            expList.push({id:i,class:cla});
        }else{
            expList.splice(expMap[i],1);
        }
        this.setState({expList,expMap});
    }
    onChangeExpFlag(v){
        this.setState({expFlag:v})
    }
    renderExpertiseModal(flag){

        let data = expertiseData;
        let temp1 = data.common.map((k,i)=>{
            return(
                <div key={i}>
                    <Row type="flex" align="middle">
                        <Col span={1}>
                            <Checkbox  onChange={(e)=>{this.onChangeExp(i,e.target.checked,'common')}}></Checkbox>
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
                            <Checkbox  onChange={(e)=>{this.onChangeExp(i,e.target.checked,'making')}}></Checkbox>
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
                            <Checkbox  onChange={(e)=>{this.onChangeExp(i,e.target.checked,'magic')}}></Checkbox>
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
        if (flag){
            temp = (
                <div>
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
        }

        return temp;
    }


    renderGradeUp(){
        let {dnd} = this.props.character;
        let temp = null;
        switch (this.state.renderState){
            case 0:
                let roleOptions = roleData.map((k,i)=>{
                    return(
                        <Option key={i} value={i.toString()}>
                            {i==0?"未选择":k}
                        </Option>
                    )
                });
                temp = (
                    <div>
                        <Row  type="flex" align="middle">
                            <Col span={4} >
                                <p className="label">职业 </p>
                            </Col>
                            <Col span={6} >
                                <Select className="input" defaultValue={'0'} style={{width:'90%'}} disabled={this.state.chooseRoleFlag}
                                        onSelect={(v,o)=>{this.onChangeRoleClass(parseInt(v))}}>
                                    {roleOptions}
                                </Select>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={3}/>
                            <Col span={1} >
                                <Checkbox checked={this.state.chooseRoleFlag}
                                          onChange={(e)=>{this.onChangeRoleFlag(e.target.checked)}}></Checkbox>
                            </Col>
                            <Col span={6} >
                                <p className="text">稍候手动选择职业</p>
                            </Col>
                        </Row>
                    </div>
                );
                break;
            case 1:
                temp = (
                    <div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">您有一点属性点，您要分配给哪个属性 </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <RadioGroup value={this.state.attr} onChange={(e)=>{this.onChangeAttr(e.target.value)}} size="large" disabled={this.state.attrFlag}>
                                <RadioButton value="str">力量</RadioButton>
                                <RadioButton value="dex">敏捷</RadioButton>
                                <RadioButton value="con">体质</RadioButton>
                                <RadioButton value="int">智力</RadioButton>
                                <RadioButton value="wis">感知</RadioButton>
                                <RadioButton value="cha">魅力</RadioButton>
                            </RadioGroup>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={1} >
                                <Checkbox checked={this.state.attrFlag}
                                          onChange={(e)=>{this.onChangeAttrFlag(e.target.checked)}}></Checkbox>
                            </Col>
                            <Col span={6} >
                                <p className="text">稍候手动调整属性</p>
                            </Col>
                        </Row>
                    </div>
                );
                break;
            case 2:
                temp = (
                    <div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">生命提高： </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={5}>
                                <p className="text">生命骰（d{roleGradeUpData[this.state.chooseRole].hpDice}）</p>
                            </Col>
                            <Col span={6} >
                                <Stepper value={this.state.hp}
                                         onChange={(v)=>{this.onChangeHp(v)}}></Stepper>
                            </Col>
                            <Col span={5}>
                                <p className="text">+ 体质调整值( {getAttrAdjustValue(dnd,'con',parseInt(getAttrFinal(dnd,'con'))+(this.state.attr=='con'?1:0))} ) </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={4} >
                                <Button onClick={()=>{this.onChangeHp( Math.floor( Math.random()*(roleGradeUpData[this.state.chooseRole].hpDice)+1))}}
                                        size="large" style={{margin:'1rem'}}>
                                    <Icon type="smile-o" className="text"  />
                                    <span className="text">掷生命骰</span>
                                </Button>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={1} >
                                <Checkbox checked={this.state.hpFlag}
                                          onChange={(e)=>{this.onChangeHpFlag(e.target.checked)}}></Checkbox>
                            </Col>
                            <Col span={6} >
                                <p className="text">稍候手动调整生命</p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <div className="littleInterval"></div>
                        <div className="littleInterval"></div>
                        {this.state.chooseRoleFlag?(
                            <Row  type="flex" align="middle">
                                <Col span={24} >
                                    <p className="text">未选择职业，默认为野蛮人 </p>
                                </Col>
                            </Row>
                        ):null}
                    </div>
                );
                break;
            case 3:
                temp = (
                    <div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">选择专长： </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">共{(this.state.expNormal?1:0)+(this.state.expWar?1:0)+ (this.state.expMonk?1:0)+ (this.state.expMagic?1:0)}项待选择专长 {this.state.expWar?`其中战士专长只能选择标有1的专长`:null} {this.state.expMonk?`其中武僧专长只能选择手册中限定的专长`:null} {this.state.expMagic?`其中法师专长只能选择超魔专长`:null}</p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={1} >
                                <Checkbox checked={this.state.expFlag}
                                          onChange={(e)=>{this.onChangeExpFlag(e.target.checked)}}></Checkbox>
                            </Col>
                            <Col span={6} >
                                <p className="text">稍候手动添加专长</p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        {this.state.chooseRoleFlag?(
                            <Row  type="flex" align="middle">
                                <Col span={24} >
                                    <p className="text">未选择职业，默认为野蛮人 </p>
                                </Col>
                            </Row>
                        ):null}
                        <div className="littleInterval"></div>
                        {this.state.expFlag?null: this.renderExpertiseModal(!this.state.expNormal&&this.state.expMagic)}

                    </div>
                );
                break;
            case 4:

                temp = (
                    <div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">升级带来的其他变化: </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">基本攻击加值和豁免加值会自动提高 </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        {this.state.chooseRole==2||this.state.chooseRole==3||this.state.chooseRole==4||this.state.chooseRole==7||this.state.chooseRole==8||this.state.chooseRole==10||this.state.chooseRole==11?(
                            <Row  type="flex" align="middle">
                                <Col span={24} >
                                    <p className="text">每日可使用法术基数自动增加 </p>
                                </Col>
                            </Row>
                        ):null}
                        <div className="littleInterval"></div>
                        {roleGradeUpData[this.state.chooseRole].specialSkill[this.state.roleGrade].length>0&&!this.state.chooseRoleFlag?(
                            <Row  type="flex" align="middle">
                                <Col span={24} >
                                    <p className="text">职业特殊能力自动添加：{roleGradeUpData[this.state.chooseRole].specialSkill[this.state.roleGrade].join(' ')} </p>
                                </Col>
                            </Row>
                        ):null}

                        <div className="littleInterval"></div>
                        {this.state.chooseRoleFlag?(
                            <Row  type="flex" align="middle">
                                <Col span={24} >
                                    <p className="text">未选择职业，默认为野蛮人，同时不自动添加职业特殊能力 </p>
                                </Col>
                            </Row>
                        ):null}
                    </div>
                );
                break;

            case 5:

                temp = (
                    <div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">您有{roleGradeUpData[this.state.chooseRole].skillPoint+getAttrAdjustValue(dnd,'int')+(dnd.race==0?1:0)}点属性点待分配，本职技能消耗 1点/技能等级，非本职技能消耗 2点/技能等级，暂时请自行计算 </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        <Row  type="flex" align="middle">
                            <Col span={24} >
                                <p className="text">点击前往将跳转至技能页面选择，并结束升级流程，应用升级流程中的所有更改 </p>
                            </Col>
                        </Row>
                        <div className="littleInterval"></div>
                        {xpData[this.props.grade+2].xp<=dnd.xp?(
                            <Row  type="flex" align="middle">
                                <Col span={24} >
                                    <p className="text"  style={{color:'red'}}><strong>您当前的经验溢出，超过了下一级的升级经验，如果确认升级将会清空超出下一级升级经验的部分，否则请点击取消按钮。</strong></p>
                                </Col>
                            </Row>
                        ):null}
                        {this.state.chooseRoleFlag?(
                            <Row  type="flex" align="middle">
                                <Col span={24} >
                                    <p className="text">未选择职业，默认为野蛮人，同时不自动添加职业特殊能力 </p>
                                </Col>
                            </Row>
                        ):null}
                    </div>
                );
                break;
        }



        return temp;
    }
    modalKey = 0;

    render(){

        let title='升级流程';
        let okText = '继续';
        switch (this.state.renderState){
            case 0:
                title+=' — 选择升级职业';
                break;
            case 1:
                title+=' — 选择属性加点';
                break;
            case 2:
                title+=' — 掷生命骰';
                break;
            case 3:
                title+=' — 选择专长';
                break;
            case 4:
                title+=' — 升级相关变化';
                break;
            case 5:
                title+=' — 前往选择技能';
                break;
        }
        if(this.state.renderState == 5){
            okText = '前往';
        }


        return(
            <Modal
                key={this.modalKey}
                title={title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText={okText}
                width={document.documentElement.clientWidth-100}
            >
                {this.renderGradeUp()}
            </Modal>
        )
    }


}