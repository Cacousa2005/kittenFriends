import React from 'react';
import Card from './Card';

									{/*1. Always use MAP loop to browse an array
									   2. When you do a loop. Always give a unique key*/}
const CardList = ( { kittens }) => {
					
	return (
		<div>
			{ kittens.map((user, i) => {
				return <Card key={i} 
							 id={kittens[i].id} 
							 name={kittens[i].name} 
							 email={kittens[i].email}/>
							})	
			} {/*Needs curly brackets because it's Javascript and not HTML.
							As said before, it's a virtual DOM */}
		</div>
		);
}

		export default CardList;