import React, { useState } from 'react';
import Person from './components/Person/Person';

const FunComp = (props) => {
	const [personState, setPersone] = useState({
		person: [
			{
				name: "max", age: 21
			},
			{
				name: "min", age: 25
			},
			{
				name: "simple", age: 24
			},
		],
		// othestate: "other state text",
	});

	const [othestate, setOther] = useState("other state text here");

	const switchNameHandelar = () => {
		setPersone(
			{
				person: [
					{
						name: "chenged Name ", age: 21
					},
					{
						name: "hello", age: 25
					},
					{
						name: "changed by clicked", age: 24
					},
				]
			}
		)
	}


	return (
		<div>
			<h1> I am here for you!!!!!!</h1>
			<button onClick={switchNameHandelar}>Switch Name </button>
			<Person name={personState.person[0].name} age={personState.person[0].age} />
			<Person name={personState.person[1].name} age={personState.person[1].age} />
			<Person name={personState.person[2].name} age={personState.person[2].age} />
			<Person anotherState={othestate} />
		</div>
	);
};

export default FunComp;