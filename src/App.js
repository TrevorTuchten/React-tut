import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
	render() {
		const place = 'World';
		return (
			<h1>Hello {place}</h1>
		);
	}
}

render(<App />, document.getElementById('root'));
