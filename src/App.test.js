// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App component', () => {
	it("doesn't display an outcome at first", () => {
		const { queryByTestId } = render(<App />);

		expect(queryByTestId('outcome')).toBeNull();
	});

	it.skip('displays left wins when appropriate', () => {
		const { getByLabelText, getByTestId, getByText } = render(<App />);

		userEvent.selectOptions(getByLabelText('Left'), 'paper');
		userEvent.selectOptions(getByLabelText('Right'), 'rock');
		userEvent.click(getByText('Throw'));

		expect(getByTestId('outcome')).toHaveTextContent('Left wins!');
	});

	it.skip('displays right wins when appropriate', () => {
		const { getByLabelText, getByTestId, getByText } = render(<App />);

		userEvent.selectOptions(getByLabelText('Left'), 'paper');
		userEvent.selectOptions(getByLabelText('Right'), 'scissors');
		userEvent.click(getByText('Throw'));

		expect(getByTestId('outcome')).toHaveTextContent('Right wins!');
	});

	it.skip('displays draw when appropriate', () => {
		const { getByLabelText, getByTestId, getByText } = render(<App />);

		userEvent.selectOptions(getByLabelText('Left'), 'paper');
		userEvent.selectOptions(getByLabelText('Right'), 'paper');
		userEvent.click(getByText('Throw'));

		expect(getByTestId('outcome')).toHaveTextContent('Draw!');
	});
});
