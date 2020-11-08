import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '.';

describe('Form component', () => {
	it('emits a pair of selections when the form is submitted', async () => {
		const left = 'rock';
		const right = 'scissors';

		const onSubmit = jest.fn();

		const { getByLabelText, getByText } = render(<Form onSubmit={onSubmit} />);

		userEvent.selectOptions(getByLabelText('Left'), left);
		userEvent.selectOptions(getByLabelText('Right'), right);
		userEvent.click(getByText('Throw'));

		expect(onSubmit).toHaveBeenCalledWith([ left, right ]);
	});
});
