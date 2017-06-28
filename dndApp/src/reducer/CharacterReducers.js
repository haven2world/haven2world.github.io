'user strict'

import * as types from '../Constants/ActionTypes';

const initialState = {
  dnd : {}
};

export default function handleFetchHome(state = initialState, action) {
    switch (action.type) {
       case types.FINISH_FETCH_CHARACTER:
           return Object.assign({}, state, {
                dnd: action.data
           });
        case types.FINISH_UPDATE_CHARACTER:
            let newDnd = state.dnd;
            newDnd[action.key] = action.value;
            return Object.assign({}, state, {
                dnd: newDnd
            });
       default:
           return state;
    }
}
