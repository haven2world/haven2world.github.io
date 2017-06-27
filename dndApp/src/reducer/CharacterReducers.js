'user strict'

import * as types from '../Constants/ActionTypes';

const initialState = {
  loading : false,
  data : {}
};

export default function handleFetchHome(state = initialState, action) {
    switch (action.type) {
       case types.TEST:
           return Object.assign({}, state, {
                loading: true
           });
       default:
           return state;
    }
}
