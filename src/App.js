import React, { Component } from 'react';
import './App.css';
import TopAppbar from './components/TopAppbar';
import { Typography } from '@material-ui/core';
import Typing from 'react-typing-animation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopAppbar />
				<Typing speed={70}>
					<div className="typing">Hello there! I'm curlyD.</div>
				</Typing>
			</div>
		);
	}
}

export default App;
