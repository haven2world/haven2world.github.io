import React,{Component} from 'react'
import { BackTop,Icon } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#ff9757',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
};

export default class BackToTop extends Component{
  render(){
    return (
      <div>
        <BackTop style={{ bottom: 100 }}>
          <div style={style}><Icon type="up" /></div>
        </BackTop>
      </div>
      );
  }

}
  
