import React, { useState } from 'react';

import Form from './Form';
import { rps } from './Form/rpsService';

const outcomes = {
	draw: 'Draw!',
	left: 'Left wins!',
	right: 'Right wins!'
};

const App = () => {
	const [ winner, setWinner ] = useState(undefined);

	const handleThrows = ([ left, right ]) => {
		setWinner(rps(left, right));
	};

	return (
		<div className="App">
			<Form onSubmit={handleThrows} />
			{winner && <div data-testid="outcome">{outcomes[winner]}</div>}
		</div>
	);
};

export default App;
