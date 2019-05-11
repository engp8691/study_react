import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

class Interface extends Component {
	constructor(props){
		super(props);

		this.inputRef = React.createRef();


	}

	myHandler = (e)=>{
		console.log(16, this.inputRef.current.value);
		this.props.addANumberHandler(+this.inputRef.current.value);
	}

	render(){
		console.log(8, this.props.currentCount);

		return (
			<>
			<input ref={this.inputRef} /><button onClick={this.myHandler}>Add</button><br/>
			<button onClick={this.props.increasementHandler}>Inc</button><br/>
			<button onClick={this.props.decreasementHandler}>Sub</button>
			</>
		)
	}
}

const mapStateToProps = (state, ownProps)=>{
	return{
		currentCount: state.count
	}
};

const mapDispatcherToProps = (dispatch, ownProps)=>{
	return {
		increasementHandler: ()=>dispatch(actions.increaseOne()),
		decreasementHandler: ()=>dispatch(actions.decreaseOne()),
		addANumberHandler: (x)=>dispatch(actions.addANumber(x))
	}
}

export default connect(mapStateToProps, mapDispatcherToProps)(Interface);

