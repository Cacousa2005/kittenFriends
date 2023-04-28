import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
	constructor() {
			super()
			this.state = {
				kittens: [],
				searchfield: ''
			}
		}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response => {return response.json();})
		 .then(users => {this.setState({kittens: users});});
		}

		onSearchChange = (event) => {this.setState({ searchfield: event.target.value})}


		render() {
				const {kittens, searchfield} = this.state;

				const filterkittens = kittens.filter(kitt => {
					return kitt.name.toLowerCase().includes(searchfield.toLowerCase());
				})

			return 	!kittens.length ? // this means: if kitten is not zero, write Loading...
				<h1>Loading...</h1> : // this means: else, render the code below
					(
						<div className='tc'>
							<h1 className= 'f1'>Kitten Friends</h1>
							<h4 className= 'f4'>These kittens are adorable, aren't they?</h4>
							<h4 className= 'f4 purple'>Search for your favorite one.</h4>
							<p className= 'text'>This is not a real site. It's just to be in my portfolio to show my abilities to work with react.</p>
							<SearchBox searchChange={this.onSearchChange}/>
									<Scroll>
										<errorBoundary>
								    		<CardList kittens={filterkittens}/>
								    	</errorBoundary>
							   		 </Scroll>
					   </div>
			 		);
			}
	}

export default App;