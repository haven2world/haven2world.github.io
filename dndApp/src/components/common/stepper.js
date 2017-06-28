/**
 * Created by Chen Haowen on 2017/6/28.
 */
'use strict';
import React,{Component} from 'react'
import { Button,Icon,Input,Row,Col } from 'antd';

const style = {

};

export default class Stepper extends Component{
    onChange(e){
        this.props.onChange(e.target.value);
    }
    render(){
        return (
            <div>
                <Row type="flex" align="middle">
                    <Col span={12}>
                        <Input className="input"  type="number" onChange={(e)=>{this.onChange(e)} }
                            {...this.props}  />
                    </Col>
                    <Col span={2}/>
                    <Col span={4}><Button type="primary" shpae="circle" icon="plus" size="large" onClick></Button></Col>
                    <Col span={2}/>
                    <Col span={4}><Button type="default" shpae="circle" icon="minus" size="large"></Button></Col>
                </Row>
            </div>
        );
    }

}

