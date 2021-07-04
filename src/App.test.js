import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
	render(<App />);
});
// test('renders First Name', () => {
// 	const { getByText } = render(<App />);
// 	const firstName = getByText(/first name/i);
// 	expect(firstName).toBeInTheDocument();
// });
