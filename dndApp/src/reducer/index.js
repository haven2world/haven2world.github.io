'use strict'

import {combineReducers} from 'redux';
import character from './characterReducers';


const appReducer = combineReducers({
  character,
})

const rootReducer = (state, action) => {
  //console.log(action);
  if (action.type === 'INIT_REDUX') {
    state = undefined;
  }
  
  return appReducer(state, action)
}


export default rootReducer;
