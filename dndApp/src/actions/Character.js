import * as Types from '../constants/ActionTypes'


export function fetchCharacter() {
	return dispatch => {
		dispatch(beginFetchCharacter());
        dispatch(finishFetchCharacter(localStorage))
	}
}

function beginFetchCharacter() {
	return {
        type: Types.BEGIN_FETCH_CHARACTER,
	}
}
function finishFetchCharacter(result) {
    let data = {};
    for(let i in result){
        data[i] = result[i];
    }
    return {
        type: Types.FINISH_FETCH_CHARACTER,
        data:data
    }
}
export function updateCharacter(key,value) {
    return dispatch => {
        dispatch(beginUpdateCharacter());
        localStorage[key] = value;
        dispatch(finishUpdateCharacter(key,value))
    }
}
function beginUpdateCharacter() {
    return {
        type: Types.BEGIN_UPDATE_CHARACTER,
    }
}
function finishUpdateCharacter(key,value) {
    return {
        type: Types.FINISH_UPDATE_CHARACTER,
        key:key,
        value:value
    }
}