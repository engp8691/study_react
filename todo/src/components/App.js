import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = (props) => {
	const match = props.match;
	const params = match.params;

	return (
		<div>
			<AddTodo />
				<VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
			<Footer />
		</div>
	)
}

export default App

