import React, { Component } from "react";
class Card extends Component {
	render() {
		const { imgSrc, name, email } = this.props;

		return (
			<div className="card">
				<img src={imgSrc} alt={name} />
				<div className="description">
					<p className="name">{name}</p>
					<p className="email">{email}</p>
				</div>
			</div>
		);
	}
}

export default Card;
