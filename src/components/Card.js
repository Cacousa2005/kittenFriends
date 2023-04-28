import React from 'react';

const Card =(props) => {
	const {name, email, id} = props;
	return(
			<div className='tc bg-light-purple dib br4 pa1 ma2 grow shadow-5'> 
				<img src={`https://robohash.org/${id}?set=set4&size=150x150`} alt='kitten' />    
				<h2>{name}</h2>
				<p>{email}</p>
			</div>			
	);
}

export default Card;

//					