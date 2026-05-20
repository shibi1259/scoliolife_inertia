import React, { Fragment, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { getLocaleForRoute, routeWithLocale } from '@/Utils/localeHelper';
import { useLaravelReactI18n } from 'laravel-react-i18n';

const ContactForm = (props) => {
	const {
		type = 'contact-page', multiple = true, col = '12', col2 = '6', optionPosition = 'top', labels = true,
		newsletter = true, title = '', icons = false
	} = props;

	const { currentLocale } = useLaravelReactI18n();
	const lang = currentLocale();
	const currentLang = getLocaleForRoute(lang);

	const [files, setFiles] = useState([{ id: 0, file: null, filename: '' }]);
	const { data, setData, post, processing, reset, errors } = useForm({
		name: '',
		email_address: '',
		phone_number: '',
		contact_enquiry: '',
		country: '',
		description: '',
		subscribe: true,
		files: [],
		form_type: type,
	});

	const handleFileChange = (index, event) => {
		const file = event.target.files[0];
		const newFiles = [...files];
		newFiles[index] = { id: newFiles[index].id, file, filename: file ? file.name : '' };
		setFiles(newFiles);
		setData("files", newFiles.map(f => f.file).filter(f => f !== null));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);

		post(routeWithLocale('contacts.store', currentLang), {
			forceFormData: true,
			onSuccess: () => {
				reset();
				setFiles([{ id: 0, file: null, filename: '' }]);
			}
		});
	};


	const addFileField = () => {
		const newId = files.length;
		setFiles([...files, { id: newId, file: null }]);
	}

	const removeFileField = (id) => {
		setFiles(files.filter((file) => file.id !== id));
	}
	console.log('errors', errors)
	const AppendField = ({ index = 0, file }) => {
		return (
			<>
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
			</>
		)
	}

	return (
		<>
			<form className='consultation_form' onSubmit={(e) => handleSubmit(e)} encType='multipart/form-data'>
				{title && <h6>{title}</h6>}

				{(optionPosition === 'top') ? (
					<div>
						<select
							id="select"
							defaultValue=""
							className="form-control"
							onChange={e => setData('contact_enquiry', e.target.value)}
						>
							<option value="" disabled>Select an option</option>
							<option value="General Enquiry">General Enquiry</option>
							<option value="Scoliosis Program Enquiry">Scoliosis Program Enquiry</option>
							<option value="Existing Patient Enquiry">Existing Patient Enquiry</option>
							<option value="Media Enquiry">Media Enquiry</option>
							<option value="Others">Others</option>
						</select>
						{errors.contact_enquiry && <div className="error" style={{ color: 'red' }}>{errors.contact_enquiry}</div>}
					</div>
				) : null}

				<div className="form-design">
					<div className="row">
						<div className={`col-md-${col}`}>
							{labels && <label htmlFor="inputCity" className="form-label">Name</label>}
							<input
								type="text"
								className="form-control"
								placeholder='Name'
								onChange={e => setData('name', e.target.value)}
							/>
							{errors.name && <div className="error" style={{ color: 'red' }}>{errors.name}</div>}
							{icons && <span className="icon-form-home"><img src={'/images/form user.webp'} alt='form-user' /></span>}
						</div>

						<div className={`col-md-${col}`}>
							{labels && <label htmlFor="inputEmail4" className="form-label">Email</label>}
							<input
								type="email"
								placeholder="Email"
								className="form-control"
								onChange={e => setData('email_address', e.target.value)}
							/>
							{errors.email_address && <div className="error" style={{ color: 'red' }}>{errors.email_address}</div>}
							{icons && <span className="icon-form-home"><img src={'/images/form email.webp'} alt='form-email' /></span>}
						</div>

						<div className={`col-md-${col2}`}>
							{labels && <label htmlFor="inputEmail4" className="form-phone">Contact Number</label>}
							<input
								type="tel"
								placeholder='Contact Number'
								className="form-control"
								onChange={e => setData('phone_number', e.target.value)}
							/>
							{errors.phone_number && <div className="error" style={{ color: 'red' }}>{errors.phone_number}</div>}
							{icons && <span className="icon-form-home"><img src={'/images/form number.webp'} alt='form-number' /></span>}
						</div>

						<div className={`col-md-${col2}`}>
							{labels && <label htmlFor="inputCity" className="form-label">Country</label>}
							<input
								type="text"
								className="form-control"
								placeholder='Country'
								onChange={e => setData('country', e.target.value)}
							/>
							{errors.country && <div className="error" style={{ color: 'red' }}>{errors.country}</div>}
							{icons && <span className="icon-form-home"><img src={'/images/form country.webp'} alt='form-country' /></span>}
						</div>

						{(optionPosition !== 'top') ? (
							<div className="col-md-12">
								{labels && <label htmlFor="inputCity" className="form-label">Select an Option</label>}
								<select className="form-control" defaultValue="" onChange={e => setData('contact_enquiry', e.target.value)}>
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
								onChange={e => setData('description', e.target.value)}
							></textarea>
							{errors.description && <div className="error" style={{ color: 'red' }}>{errors.description}</div>}
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
									checked={data.subscribe}
									onChange={e => setData('subscribe', e.target.checked)}

								/>

								<label htmlFor="subscribe_check" className="form-label">Newsletter</label>
							</div>
						)}

						<div className="col-md-12 submit-btn contact-us">
							<button type="submit" className="btn btn-primary">
								<span>Send</span>
								{processing && (
									<div className="btn-loader">
										<img src={'/images/button-loader.svg'} alt="loader-button" />
									</div>
								)}
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
