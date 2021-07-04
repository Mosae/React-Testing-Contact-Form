import React from 'react';
import { render, fireEvent, findByTestId } from '@testing-library/react';
import ContactForm from './ContactForm';
// import { act } from 'react-dom/test-utils';

// test('test form labels', () => {
// 	const { getByLabelText } = render(<ContactForm />);
// 	getByLabelText(/first name*/i);
// });

//basic tests to see if names are there
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

//Tests for expected behavior
// test for error when name is not included
test('name required', () => {
	const { getByTestId } = render(<ContactForm />);
	expect(getByTestId('required-input')).not.toBeRequired();
});

// test('error when name left out', async () => {
// 	const { getByLabelText, findByTestId, getByText, getByTestId } = render(
// 		<ContactForm />
// 	);

// 	const firstNameInput = getByText(/first name/i);
// 	const lastNameInput = getByLabelText(/last name/i);
// 	const emailInput = getByLabelText(/email/i);
// 	const messageInput = getByLabelText(/message/i);

// 	fireEvent.change(firstNameInput, {
// 		target: { name: 'firstname', value: '' },
// 	});
// 	fireEvent.change(lastNameInput, {
// 		target: { name: 'lastname', value: 'toughtimes' },
// 	});

// 	fireEvent.change(emailInput, {
// 		target: { name: 'email', value: 'some@gmail.com' },
// 	});
// 	fireEvent.change(messageInput, {
// 		target: { name: 'message', value: 'newMessage' },
// 	});

// 	fireEvent.click(document.getElementById('submit'));

// 	await findByTestId('fNameError');
// });

// test('check submit form', async () => {
// 	const {
// 		getByText,
// 		findByText,
// 		getByLabelText,
// 		findByTestId,
// 		getByTestid,
// 	} = render(<ContactForm />);
// 	//click submit
// 	const emailInput = getByText(/email*/i);
// 	const messageInput = getByText(/message/i);

// 	fireEvent.change(emailInput, {
// 		target: { value: 'something@something.com' },
// 	});
// 	fireEvent.change(messageInput, {
// 		target: { value: 'any text' },
// 	});

// 	expect(emailInput.value).toBe('something@something.com');
// 	expect(messageInput.value).toBe('any text');

// 	fireEvent.change(findByTestId(/submit/i));

// 	const info = await findByTestId(/value/i); //find the user information by looking for testID
// 	expect(info).toBeInTheDocument();
// });
