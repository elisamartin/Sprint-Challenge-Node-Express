import React, { Component } from 'react';
import axios from 'axios';
import Projects from './components/Projects';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:9090/api/projects')
			.then((response) => {
				this.setState(() => ({ projects: response.data }));
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className="App">
				<h2>Projects</h2>
				{this.state.projects.map((project) => {
					return <Projects description={project.description} key={project.id} />;
				})}
			</div>
		);
	}
}

export default App;
