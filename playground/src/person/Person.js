import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import AuthContext from '../context/auth-context';

const person = React.forwardRef((props, ref)=>{
	console.log(6, ref);

	const rnd = Math.random();
	if(rnd > 0.99){
		// throw new Error('Something went wrong');
	}

	const clickHandler = (e, name)=>{
		console.log(5, name, e);
	}

	const buttonStyle = {
		backgroundColor: '#999',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px'
	}

	const style = {
		 color: 'red',
		 fontWeight: 'bold'
	};

	if(props.age<18){
		style.color = 'green';
	}else{
		style.color = 'red';
	}

	useEffect(() => {
		console.log(33, "useEffect");
	});

	return (
		<div className={styles.Person}> 
			<button style={buttonStyle} onClick={(e)=>clickHandler(e, props.name)}>Click me</button>
			<AuthContext.Consumer>	
				{(context)=>{
					return context.authenticated? <p>Authenticated!</p> : <p>Please log in</p>;
				}}
			</AuthContext.Consumer>	
			<p>My name is {props.name} at my age of {props.age}</p>
			{props.children? (<p style={style}>{props.children}</p>) : null}

			<input ref={ref} type="text" onChange={props.changeHandler} value={props.name} />
		</div>
	);
});

person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	changeHandler: PropTypes.func
}

export default person;

