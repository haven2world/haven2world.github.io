/**
 * Created by Chen Haowen on 2017/6/28.
 */
'use strict';
import React,{Component} from 'react'
import { Button,Icon,Input,Row,Col } from 'antd';

const style = {

};

export default class Stepper extends Component{

    onClickPlus(){
        if(this.props.onAdd) {
            this.props.onAdd(parseInt(this.props.value))
        }
        if(this.props.onChange){
            this.props.onChange(parseInt(this.props.value)+1);
        }

    }
    onClickMinus(){
        if(this.props.onReduce) {
            this.props.onReduce(parseInt(this.props.value))
        }
        if(this.props.onChange){
            this.props.onChange(parseInt(this.props.value)-1);
        }

    }
    render(){
        return (
            <div>
                <Row type="flex" align="middle">
                    <Col span={8}>
                        <Input className="input"  type="number" onChange={(e)=>{this.onChange(e.target.value)} }
                            value={this.props.value} />
                    </Col>
                    <Col span={2}/>
                    <Col span={14}>
                        <Button type="primary"  icon="plus" size="large" onClick={()=>{this.onClickPlus()}} ></Button>
                        <Button type="default"  icon="minus" size="large" onClick={()=>{this.onClickMinus()}}
                                style={{marginLeft:'1rem',marginRight:'1rem'}}
                        ></Button>
                    </Col>

                </Row>
            </div>
        );
    }

}

