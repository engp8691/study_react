import React, {Component} from 'react';

import styles from './TodoUI.module.css';

class TodoUI extends Component{
	constructor(props){
		super(props);
		this.state = {
			todo: ''
		}
	}

	changeHandler = (e)=>{
		this.setState({...this.state, todo: e.target.value});
	}

	submitHandler = (e)=>{
		console.log(styles);
		e.preventDefault();
		console.log(this.state.todo);

		this.props.addTodo(this.state.todo);
		this.setState({...this.state, todo: ''});
	}

	render(){
		return (
			<form onSubmit={this.submitHandler}>
				<input onChange={this.changeHandler} value={this.state.todo}/>
				<button className={styles.myButton}>Submit</button>
			</form>
		);
	}
}

export default TodoUI;

