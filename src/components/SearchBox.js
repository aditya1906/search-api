import React, { Component } from "react";

class SearchBox extends Component {
	render() {
		return <input className="search-field" onChange={this.props.onSearchChange} placeholder="Search User" type="text" name="textInput" />;
	}
}

export default SearchBox;
