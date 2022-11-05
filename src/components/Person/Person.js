import React from 'react';

const Person = (props) => {
	return (
		<div>
			<h1> I am a {props.name} and {props.age} years old {props.anotherState} </h1>
			{props.children}
		</div>
	);
};

export default Person;