import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const [data, setData] = useState();
	const { register, errors, handleSubmit, reset } = useForm({
		mode: 'onBlur',
	});
	const onSubmit = (data) => {
		setData(data);
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="firstName">First Name*</label>
					<input
						// onChange={(e) => setData(e.target.value)}
						// value={data}
						name="firstName"
						data-testid="required-input"
						id="firsName"
						placeholder="bill"
						ref={register({ required: true, maxLength: 3 })}
					/>

					{errors.firstName && (
						<p data-testid="fNameError">
							Looks like there was an error: {errors.firstName.type}
						</p>
					)}
				</div>

				<div>
					<label htmlFor="lastName">Last Name*</label>
					<input
						name="lastName"
						id="lastName"
						placeholder="luo"
						ref={register({ required: true })}
					/>
					{errors.lastName && (
						<p>Looks like there was an error: {errors.lastName.type}</p>
					)}
				</div>

				<div>
					<label htmlFor="email" placeholder="bluebill1049@hotmail.com">
						Email*
					</label>
					<input name="email" id="email" ref={register({ required: true })} />
					{errors.email && (
						<p>Looks like there was an error: {errors.email.type}</p>
					)}
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						ref={register({ required: false })}
					/>
				</div>
				{data && (
					<pre style={{ textAlign: 'left', color: 'white' }}>
						{JSON.stringify(data, null, 2)}
					</pre>
				)}
				{/* <input type="submit" /> */}
				<label data-testid="submit" htmlFor="button">
					<input type="submit" id="button" />
				</label>
			</form>
		</div>
	);
};

export default ContactForm;
