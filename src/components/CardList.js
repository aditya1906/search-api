import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
	render() {
		const { users } = this.props;
		const CardArray = users.map((user, i) => {
			const name = `${users[i].name.first} ${users[i].name.last}`;
			return (
				<Card
					key={i}
					name={name}
					email={users[i].email}
					imgSrc={users[i].picture.large}
				/>
			);
		});
		return <div className="card-group">{CardArray}</div>;
	}
}

export default CardList;
