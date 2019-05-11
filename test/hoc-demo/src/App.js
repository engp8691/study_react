import React, { Component } from "react";
import Feed from "./components/Feed";
import "./App.css";

class App extends Component {
  state = { contacts: [], counter: 0 };
  looper = null;
  counter = 0;

	restAPICall = ()=>{
		this.setState((a, b)=>{
			console.log(12, a, b);
			return {};
		});

		const randomNumber = Math.random();
		console.log(26, randomNumber);
		this.setState({ randomNumber, counter: this.state.counter+1 }, ()=>{
			console.log(28, "setState", this.state.randomNumber, this.state.counter);
		});
		console.log(30, this.state.randomNumber);

		fetch("https://api.randomuser.me/?results=50")
			.then(response => response.json())
			.then(parsedResponse =>
				parsedResponse.results.map(user => ({
					name: `${user.name.first} ${user.name.last}`,
					email: user.email,
					thumbnail: user.picture.thumbnail
				}))
			)
			.then((contacts) => {
				this.setState({ contacts });
			});
	}


  componentDidMount() {
  	console.log(window);

  	this.restAPICall();

	this.looper = setInterval(this.loopFunction, 0);
	// setTimeout(this.loopFunction, 0);
  }

  shouldComponentUpdate(nextProps, nextState){
  	// console.log(24, this.state, nextState);
	return true;
  }

  componentWillUpdate(){
  	// console.log(29, "Do not use it");
  }

  loopFunction = ()=>{
  	this.counter++;

	if(this.counter>20){
		clearInterval(this.looper);
	}

	this.restAPICall();
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="{null}">
                HOC Demo app
              </a>
            </li>
          </ul>
        </nav>

        <Feed contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

