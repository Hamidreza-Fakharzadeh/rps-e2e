it('should say left wins for rock vs. scissors', () => {
	cy.visit('/');
	cy.findByLabelText('Left').select('rock');
	cy.findByLabelText('Right').select('scissors');

	cy.findByText('Throw').click();

	cy.findByTestId('outcome').should('contain.text', 'Left wins!');
});
