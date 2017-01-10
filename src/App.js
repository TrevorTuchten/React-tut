import React, { Component } from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';

/* class App extends Component {
	render() {
		const place = 'World';
		return (
			<h1>Hello {place}</h1>
		);
	}
}*/

/* // Parent Component
class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity='1' name='Bread' />
				<ListItem quantity='6' name='Eggs' />
				<ListItem quantity='2' name='Milk' />
			</ul>
		);
	}
}

// Child Component
class ListItem extends Component {
	render() {
		return (
			<li>
				{this.props.quantity}x {this.props.name}
			</li>
		)
	}
}*/

// Using props.children to get the content between opening and closing tags
// Parent Component
/* class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity='1'>Bread</ListItem>
				<ListItem quantity='6'>Eggs</ListItem>
				<ListItem quantity='2'>Milk</ListItem>
			</ul>
		);
	}
}

// Child Component
class ListItem extends Component {
	render() {
		return (
			<li>
				{this.props.quantity}x {this.props.children}
			</li>
		)
	}
}


render(<GroceryList />, document.getElementById('root'));*/

const cardsList = [
	{
		id          : 1,
		title       : 'Read the book',
		description : 'I should read the whole book',
		status      : 'in-progress',
		tasks       : [],
	},
	{
		id          : 2,
		title       : 'Write some code',
		description : 'Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)',
		status      : 'todo',
		tasks       : [
			{
				id   : 1,
				name : 'ContactList Example',
				done : true,
			},
			{
				id   : 2,
				name : 'Kanban Example',
				done : false,
			},
			{
				id   : 3,
				name : 'My own experiments',
				done : false,
			},
		],
	},
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
