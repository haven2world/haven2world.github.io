/**
 * Created by Chen Haowen on 2017/6/28.
 */
'use strict';
import React,{Component} from 'react'
import { Button,Icon,Input,Row,Col } from 'antd';

const style = {

};

export default class Stepper extends Component{
    onChange(v){
        this.props.onChange(v);
    }
    render(){
        return (
            <div>
                <Row type="flex" align="middle">
                    <Col span={12}>
                        <Input className="input"  type="number" onChange={(e)=>{this.onChange(e.target.value)} }
                            value={this.props.value} />
                    </Col>
                    <Col span={2}/>
                    <Col span={10}>
                        <Button type="primary"  icon="plus" size="large" onClick={()=>{this.onChange(parseInt(this.props.value)+1)}} ></Button>
                        <Button type="default"  icon="minus" size="large" onClick={()=>{this.onChange(parseInt(this.props.value)-1)}}
                                style={{marginLeft:'1rem',marginRight:'1rem'}}
                        ></Button>
                    </Col>

                </Row>
            </div>
        );
    }

}

