import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import Loading from "./components/Loading";

class App extends Component {
	constructor() {
		super();
		this.state = {
			fetchUsers: [],
			users: [],
			animate: true
		};
	}
	componentDidMount() {
		fetch(
			"https://randomuser.me/api/?results=10&nat=au,nz&inc=name,nat,picture,email"
		)
			.then(response => response.json())
			.then(data => {
				this.setState({ fetchUsers: data.results });
				this.setState({ users: data.results });
			});
	}
	onSearchChange = event => {
		const searchUser = this.state.fetchUsers.filter(
			user =>
				user.name.first
					.toLowerCase()
					.includes(event.target.value.toLowerCase()) ||
				user.name.last
					.toLowerCase()
					.includes(event.target.value.toLowerCase()) ||
				user.email
					.toLowerCase()
					.includes(event.target.value.toLowerCase())
		);
		this.setState({ users: searchUser });
		this.setState({ animate: !this.state.animate });
	};
	render() {
		return (
			<div className="app">
				<h1>Awesome Search API</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				{this.state.fetchUsers.length !== 0 ? (
					<div className={this.state.animate ? "fade" : "hide"}>
						<CardList users={this.state.users} />
					</div>
				) : (
					<Loading />
				)}
			</div>
		);
	}
}

export default App;
