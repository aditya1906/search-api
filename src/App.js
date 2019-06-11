import React, { Component } from "react";
import "./App.css";
import SearchBox from "./SearchBox";

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: []
		};
	}
	componentDidMount() {
		fetch("https://randomuser.me/api/?results=10&inc=name,nat,picture,email")
			.then(response => response.json())
			.then(data => {
				this.setState({ users: data.results });
			});
	}
	render() {
		console.log(this.state.users[0]);
		return (
			<div className="app">
				<h1>Awesome Search API</h1>
				<SearchBox />
			</div>
		);
	}
}

export default App;
