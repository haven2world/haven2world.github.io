import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'




export default class App extends React.Component{
  constructor() {
    super()
    this.state = {};
  }


  // componentDidMount() {
  //   AppStore.addChangeListener(this._onChange);
  // }

  // componentWillUnmount() {
  //   AppStore.removeChangeListener(this._onChange);
  // }

  /**
   * @return {object}
   */
render() {

    return (
    <div className="index" style={{"background":"#ECECEC"}}>
    <Header style={{"height":64}} />
      {this.props.children}
    </div>
    );
  }
}