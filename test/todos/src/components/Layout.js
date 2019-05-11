import React, {Component} from 'react';
import TodoUI from './TodoUI';
import TodoList from './TodoList';

class Layout extends Component{
	constructor(props){
		super(props);

		this.state = {
			list: []
		}
	}

	addTodo = (todo)=>{
		let {list} = this.state;
		list.push(todo);
		console.log(17, list);

		this.setState({...this.state, list});
	}

	render(){
		return (
			<>
				<TodoUI addTodo={this.addTodo} />
				<TodoList list={this.state.list} />
			</>
		);
	}
}

export default Layout;

