import React, { Component } from "react";

class Card extends Component {
	render() {
		const { imgSrc, name, email } = this.props;

		return (
			<div className="card">
				<img src={imgSrc} alt={name} />
				<p className="name">{name}</p>
				<p>{email}</p>
			</div>
		);
	}
}

export default Card;
