import React, { Component } from 'react';
// import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	render() {
		return (
			<div className="App">
				<h2>Projects</h2>
			</div>
		);
	}
}

export default App;
