import * as actionTypes from "./actionTypes";

export const increaseOne = () => {
		console.log(4, "increaseOne");
        return {
                type: actionTypes.INCREAMENT
        }
};

export const decreaseOne = () => {
        return {
                type: actionTypes.DECREAMENT
        }
};

export const addANumber  = (num) => {
        return {
                type: actionTypes.ADDANUMBER,
				payload: num
        }
};


