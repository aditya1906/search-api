import React, { Component } from "react";
import "./App.css";
import SearchBox from "./SearchBox";

class App extends Component {
	render() {
		return (
			<div className="app">
				<h2>Awesome Search API</h2>
				<SearchBox />
			</div>
		);
	}
}

export default App;
