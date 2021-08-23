import React from "react";
import CardList from "../components/CardList.js";
//import { robots } from "./robots";
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundaries from "../components/ErrorBoundaries.js";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		//console.log(event.target.value);
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return robots.length === 0 ? (
			<h1>Loading</h1>
		) : (
			//text-center
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundaries>
						<CardList robots={filteredRobots} />;
					</ErrorBoundaries>
				</Scroll>
			</div>
		);
	}
}

export default App;
