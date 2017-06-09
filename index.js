import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker,Button } from 'antd';
if(!localStorage.num)
localStorage.num = 1;
function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <Button onClick={()=>{localStorage.num = parseInt(localStorage.num) + 1;console.log(localStorage.num);}}>{localStorage.num}</Button>
      <hr /><br />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
