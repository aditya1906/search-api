import React from "react";

class Scroll extends React.Component {
	render() {
		return (
			<div
				style={{
					height: "75vh",
					overflowY: "scroll",
					border: "1px solid #ffd700"
				}}
			>
				{this.props.children}
			</div>
		);
	}
}

export default Scroll;
