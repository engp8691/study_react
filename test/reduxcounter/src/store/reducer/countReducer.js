import * as actions from '../actions/actionTypes';

var initState={
	count: 0
}

const countReducer = (state=initState, action) => {
	switch(action.type){
		case actions.INCREAMENT:
			let currentCount = state.count;
			currentCount++;
			return {count: currentCount};

		case actions.DECREAMENT:
			currentCount = state.count;
			currentCount--;
			return {count: currentCount};

		case actions.ADDANUMBER:
			let payload = action.payload;
			currentCount = state.count;
			currentCount += payload;
			return {count: currentCount};

		default:
			return {...state};

	}
};

export default countReducer;

