import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

// test('Place Holder text is bill', () => {
// 	const { getByPlaceholderText } = render(<ContactForm />);
// 	getByPlaceholderText(/bill/i);
// });
test('renders First Name', () => {
	const { getByText } = render(<ContactForm />);
	const firstName = getByText(/first name/i);
	expect(firstName).toBeInTheDocument();
});
