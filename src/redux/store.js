import { createStore } from 'redux'

let store = createStore(reducer);

function reducer(state={count:0},action){
	console.log('action? : ', action )
	if(action.type =='increment'){
		return {...state, count:state.count+action.payload.num}
	} else if(action.type =='login'){
		return {...state, id: action.payload.id, password:action.payload.password}
	} else if(action.type == 'decrement'){
		return {...state, count: state.count -1}
	}
	return {...state};
}

export default store;