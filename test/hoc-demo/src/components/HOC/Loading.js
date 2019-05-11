import React, {Component} from 'react';
import "./Loading.css";

const isEmpty = prop => prop === null ||
	prop === undefined ||
	(prop.hasOwnProperty("length") && prop.length === 0) ||
	(prop.constructor === Object && Object.keys(prop).length === 0);

const Loading = LoadingObject=>WrappedComponent=>{
	return class LoadingHOC extends Component{
		componentDidMount(){
			// console.log(12);
		}

		getSnapshotBeforeUpdate(prevProps, prevState){
			// console.log(19, prevProps, this.props);

			return null;
		}

		componentDidUpdate(){
		}

		shouldComponentUpdate(nextProps, nextState) {
			// console.log(20);
			return true;
		}

		render(){
			return isEmpty(this.props[LoadingObject]) ? <div className="loader" /> : <WrappedComponent {...this.props} />;
		}
	}
}

export default(Loading);

