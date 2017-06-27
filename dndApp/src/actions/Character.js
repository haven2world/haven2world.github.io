import * as Types from '../constants/ActionTypes'


export function fetch() {
  return dispatch => {
    dispatch(beginFetchHome());
  }
}

function beginFetchHome() {
  return {
    type: Types.TEST,
  }
}

