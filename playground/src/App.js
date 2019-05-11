import React, { Component } from 'react';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
import Person from './person/Person';
import classes from './App.module.css';
import AuthContext from './context/auth-context';

class App extends Component {
	constructor(props){
		super(props);

		this.peopleRefs = [];

		this.state = {
			people: [
				{
					name: "Yonglin",
					age: 45
				},
				{
					name: "Marlyn",
					age: 15
				},
				{
					name: "Marla",
				age: 12
				}
			],
			showPeople: true,
			changeCounter: 0,
			authenticated: false
		};

		console.log(28, props);
	}

	focusOnFirst = () => {
		if(this.peopleRefs[0]){
			return this.peopleRefs[0].focus();
		}else{
			return null;
		}
	}
	personRef = (ref)=> {
		console.log(41, ref);
		return this.peopleRefs.push(ref);
	}

	componentDidMount() {
		// this.setState({"hello": "world"});
		console.log(36, this.peopleRefs, this.focusOnFirst);
		// this.focusOnFirst();
		this.peopleRefs[0].focus();
	}

	shouldComponentUpdate(nextProps, nextState){
		this.peopleRefs = [];
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		// this.setState({"hello": "world"});
		console.log(56, this.peopleRefs, this.focusOnFirst);
		setTimeout(this.focusOnFirst(), 3000);
		// this.peopleRefs[0].focus();
	}

	componentWillUpdate(nextProps, nextState) {
		// to prove the setState will update the component
		// this.setState({"hello": "world"});
	}

	switchNameHandler = (e)=>{
		console.log(8, e);
	}

	togglePeopleHandler = (e)=>{
		console.log(e);
		// this.setState(...this.state, {hidePeople: false} );
		this.setState({showPeople: !this.state.showPeople});
	}

	loginHandler = (e)=>{
		this.setState({authenticated: true});
	}

	changeHandler = (e, index)=>{
		console.log(50, index, e.target.value);
		const newValue = e.target.value;

		if(newValue){
			const people = [...this.state.people];

			people[index].name = newValue;
			this.setState((prevState, props)=>({people, changeCounter: this.state.changeCounter+1}));
		}
	}

	render() {
		const people = [...this.state.people];
		let btnClass = '';

		if(!this.state.showPeople){
			console.log(68, this.state.showPeople, classes.Red);
			btnClass = classes.Red;
		}

		const family = people.map((elem, index)=>{
			return (
				<ErrorBoundry key={index}>
					<Person key={index} name={elem.name} age= {elem.age} changeHandler = {(e)=>{this.changeHandler(e, index)}} ref={this.personRef}>
						{elem.age>20 ? "I am old.": "I am young."}
					</Person>
				</ErrorBoundry>
			);
		});

		// when there is special charac inside, uses classes['App-header']
		return (
			<>
			<div className={classes['App-header']}>
				<p>This is the reason why we built this app</p>
			</div>
			<div className={classes.App}>
				<button className={btnClass} onClick={this.togglePeopleHandler}>Toggle People</button>

				<AuthContext.Provider value={{authenticated: this.state.authenticated}}>
					<AuthContext.Consumer>
					{(context)=>{
console.log(128, context);
						// the AuthContext.Consumer must be within the content/jsx object under 
						// AuthContext.Provider

return context.authenticated? null : <button className={btnClass} onClick={this.loginHandler}>Login</button>;
					}}
					</AuthContext.Consumer>

					{ this.state.showPeople? family : null }
				</AuthContext.Provider>
			</div>
			</>
		);
	}
}

export default App;
