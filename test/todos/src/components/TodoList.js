import React, {Component} from 'react';

import styles from './TodoList.module.css';
import logProps from './../hoc/LogProps';

class TodoList extends Component{
	componentWillReceiveProps (nextProp){
		console.log(8, nextProp, this.props.list);
	}

	render(){
		const lists = this.props.list.map((elem)=>(<li key={elem}>{elem}</li>));

		return (
			<div className={styles.todoContainer} >
			<ul className={styles.todoUL} >
				{lists}
			</ul>
			</div>
		);
	}
}

export default logProps(TodoList);
// export default TodoList;

