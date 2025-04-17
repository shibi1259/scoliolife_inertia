import React, { Fragment, useState } from 'react';

const ContactForm = (props) => {
	const {
		type = 'contact-page', multiple = true, col = '12', col2 = '6', optionPosition = 'top', labels = true,
		newsletter = true, title = '', icons = false
	} = props;

	const [files, setFiles] = useState([{ id: 0, file: null, filename: '' }]);
	const [checkBox, setCheckbox] = useState(true);
	const [loader, setLoader] = useState(false);

	const triggerSubmission = async (data) => {
		let formData = new FormData();

		for (var i = 0; i < files.length; i++) {
			if (files[i] && files[i].file) {
				formData.append('files[]', files[i].file);
			}
		}

		setLoader(true);
		let _lang = 'en';
		if (!currentLanguage.includes('en')) {
			let _arr = currentLanguage.split('_');
			_lang = _arr[1].toLowerCase();
		}
		formData.append('name', data.name);
		formData.append('email_address', data.email_address);
		formData.append('phone_number', data.phone_number);
		formData.append('contact_enquiry', data.contact_enquiry);
		formData.append('country', data.country);
		formData.append('description', data.description);
		formData.append('lang', currentLanguage);
		formData.append('language', _lang);
		formData.append('form_type', type);
		formData.append('subscribe', (typeof data.subscribe !== 'undefined') ? 'yes' : 'no');
		formData.append('file', '');

		await enquiry(formData, false);
		setLoader(false);
		navigate(`${urlLanguage}/thank-you`);
		setFiles([{ id: 0, file: null, filename: '' }]);
	}

	const handleFileChange = (index, event) => {
		const newFiles = [...files];
		const file = event.target.files[0];
		newFiles[index] = { id: newFiles[index].id, file: file, filename: file ? file.name : '' };
		setFiles(newFiles);
	}

	const addFileField = () => {
		const newId = files.length;
		setFiles([...files, { id: newId, file: null }]);
	}

	const removeFileField = (id) => {
		setFiles(files.filter((file) => file.id !== id));
	}

	const AppendField = ({ index = 0, file }) => {
		return (
			<Fragment>
				<input
					size="40"
					className="form-control"
					accept=".jpg,.jpeg,.png"
					aria-invalid="false"
					type="file"
					name="file"
					onChange={(e) => handleFileChange(index, e)}
				/>

				<div className="custom-file-field form-control">
					<span className="box">Choose Image</span>
					<p>{(file.filename) ? file.filename : 'No Image'}</p>
				</div>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<form className='consultation_form'>
				{title && <h6>{title}</h6>}

				{(optionPosition === 'top') ? (
					<Fragment>
						<select
							id="select"
							defaultValue=""
						>
							<option value="" disabled>Select an option</option>
							<option value="General Enquiry">General Enquiry</option>
							<option value="Scoliosis Program Enquiry">Scoliosis Program Enquiry</option>
							<option value="Existing Patient Enquiry">Existing Patient Enquiry</option>
							<option value="Media Enquiry">Media Enquiry</option>
							<option value="Others">Others</option>
						</select>
					</Fragment>
				) : null}

				<div className="form-design">
					<div className="row">
						<div className={`col-md-${col}`}>
							{labels && <label htmlFor="inputCity" className="form-label">Name</label>}
							<input
								type="text"
								className="form-control"
								placeholder='Name'
							/>
							{icons && <span className="icon-form-home"><img src={'/images/form user.webp'} alt='form-user' /></span>}
						</div>

						<div className={`col-md-${col}`}>
							{labels && <label htmlFor="inputEmail4" className="form-label">Email</label>}
							<input
								type="email"
								placeholder="Email"
								className="form-control"
							/>
							{icons && <span className="icon-form-home"><img src={'/images/form email.webp'} alt='form-email' /></span>}
						</div>

						<div className={`col-md-${col2}`}>
							{labels && <label htmlFor="inputEmail4" className="form-phone">Contact Number</label>}
							<input
								type="tel"
								placeholder='Contact Number'
								className="form-control"
							/>
							{icons && <span className="icon-form-home"><img src={'/images/form number.webp'} alt='form-number' /></span>}
						</div>

						<div className={`col-md-${col2}`}>
							{labels && <label htmlFor="inputCity" className="form-label">Country</label>}
							<input
								type="text"
								className="form-control"
								placeholder='Country'
							/>
							{icons && <span className="icon-form-home"><img src={'/images/form country.webp'} alt='form-country' /></span>}
						</div>

						{(optionPosition !== 'top') ? (
							<div className="col-md-12">
								{labels && <label htmlFor="inputCity" className="form-label">Select an Option</label>}
								<select className="form-control" defaultValue="">
									<option value="" disabled>Select an option</option>
									<option value="General Enquiry">General Enquiry</option>
									<option value="Scoliosis Program Enquiry">Scoliosis Program Enquiry</option>
									<option value="Existing Patient Enquiry">Existing Patient Enquiry</option>
									<option value="Media Enquiry">Media Enquiry</option>
									<option value="Others">Others</option>
								</select>
							</div>
						) : null}

						<div className="col-md-12">
							{labels && <label htmlFor="inputCity" className="form-label">Message</label>}
							<textarea
								className="form-control"
								id="description"
								name="description"
								placeholder="Message"
								defaultValue=""
							></textarea>
						</div>

						<div className="col-md-12 file-options">
							<p className='form-label'>
								<em style={{ color: '#626262' }}>(jpg/jpeg/png)</em><br />
							</p>

							{multiple && (
								<Fragment>
									{files.map((file, index) => (
										<div className="extra-files form-group" key={file.id}>
											<AppendField index={index} file={file} />
											{file.id > 0 && (
												<button
													type="button"
													onClick={() => removeFileField(file.id)}
												>-</button>
											)}
										</div>
									))}

									{files.length < 5 && (
										<button
											type="button"
											onClick={addFileField}
										>+</button>
									)}
								</Fragment>
							)}
						</div>

						{newsletter && (
							<div className="col-md-12">
								<input
									type="checkbox"
									value="1"
									id="subscribe_check"
									checked={checkBox}
									onChange={() => setCheckbox(!checkBox)}
								/>

								<label htmlFor="subscribe_check" className="form-label">Newsletter</label>
							</div>
						)}

						<div className="col-md-12 submit-btn contact-us">
							<button type="submit" className="btn btn-primary">
								<span>Send</span>
								{loader && (
									<div className="btn-loader">
										<img src={'/images/button-loader.svg'} alt="loader-button" />
									</div>
								)}
							</button>
						</div>
					</div>
				</div>
			</form>
		</Fragment>
	);
};

export default ContactForm;
