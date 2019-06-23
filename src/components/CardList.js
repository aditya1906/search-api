import React, { Component } from "react";
import Card from "./Card";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class CardList extends Component {
	render() {
		const { users } = this.props;
		const CardArray = users.map((user, i) => {
			const name = `${users[i].name.first} ${users[i].name.last}`;
			return (
				<ReactCSSTransitionGroup
					transitionName="fade"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionEnter={true}
					transitionLeave={true}
				>
					<Card
						key={i}
						name={name}
						email={users[i].email}
						imgSrc={users[i].picture.large}
					/>
				</ReactCSSTransitionGroup>
			);
		});
		return <div className="card-group">{CardArray}</div>;
	}
}

export default CardList;
