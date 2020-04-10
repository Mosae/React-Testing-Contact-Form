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
test('renders Last Name', () => {
	const { getByText } = render(<ContactForm />);
	const LastName = getByText(/last name/i);

	expect(LastName).toBeInTheDocument();
});
test('renders email', () => {
	const { getByText } = render(<ContactForm />);
	const email = getByText(/email/i);
	expect(email).toBeInTheDocument();
});
test('renders message', () => {
	const { getByText } = render(<ContactForm />);
	const Message = getByText(/message/i);
	expect(Message).toBeInTheDocument();
});
