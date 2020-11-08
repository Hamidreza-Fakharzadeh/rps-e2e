import React from 'react';
import { useState } from 'react';

const Select = ({ label, onChange, value }) => (
	<label>
		{label}
		<select value={value} onChange={({ target: { value } }) => onChange(value)}>
			<option value="rock">Rock</option>
			<option value="paper">Paper</option>
			<option value="scissors">Scissors</option>
		</select>
	</label>
);

const Form = ({ onSubmit }) => {
	const [ left, setLeft ] = useState('rock');
	const [ right, setRight ] = useState('rock');

	return (
		<div>
			<Select label="Left" onChange={setLeft} value={left} />
			<Select label="Right" onChange={setRight} value={right} />
			<button onClick={() => onSubmit([ left, right ])}>Throw</button>
		</div>
	);
};

export default Form;
