import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className= 'tc bg-light-purple pa2'>
			<input className= 'tc pa2 bg-purple white'  
			type='search' 
			placeholder='search kittens'
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;