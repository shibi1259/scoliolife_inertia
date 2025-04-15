// import React, { useState } from 'react';
// import { useForm } from '@inertiajs/react';

// const ContactForm = ({
//   type = 'contact-page',
//   col = '12',
//   col2 = '6',
//   labels = true,
//   title = '',
//   icons = false,
//   optionPosition = 'top',
//   multiple = true,
// }) => {
//   const [files, setFiles] = useState([{ id: 0, file: null }]);

//   const { data, setData, post, processing, errors, reset } = useForm({
//     name: '',
//     email_address: '',
//     phone_number: '',
//     contact_enquiry: '',
//     country: '',
//     description: '',
//     files: [],
//     subscribe: true,
//     form_type: type,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setData(name, type === 'checkbox' ? checked : value);
//   };

//   const handleFileChange = (index, event) => {
//     const file = event.target.files[0];
//     const updatedFiles = [...files];
//     updatedFiles[index] = { id: index, file };
//     setFiles(updatedFiles);

//     const fileList = updatedFiles.map(f => f.file).filter(Boolean);
//     setData('files', fileList);
//   };

//   const addFileField = () => {
//     setFiles([...files, { id: files.length, file: null }]);
//   };

//   const removeFileField = (id) => {
//     const updated = files.filter(file => file.id !== id);
//     setFiles(updated);
//     const fileList = updated.map(f => f.file).filter(Boolean);
//     setData('files', fileList);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(route('contact.submit'), {
//       onSuccess: () => {
//         reset();
//         setFiles([{ id: 0, file: null }]);
//       },
//     });
//   };

//   const getIcon = (name) => {
//     const iconsMap = {
//       name: '/images/form-user.webp',
//       email_address: '/images/form-email.webp',
//       phone_number: '/images/form-number.webp',
//       country: '/images/form-country.webp',
//     };
//     return iconsMap[name] || null;
//   };

//   const Field = ({ label, name, type = 'text', colSize = '12', placeholder }) => (
//     <div className={`col-md-${colSize}`}>
//       {labels && <label className="form-label">{label}</label>}
//       <input
//         type={type}
//         name={name}
//         className="form-control"
//         placeholder={placeholder}
//         value={data[name]}
//         onChange={handleChange}
//       />
//       {icons && <span className="icon-form-home"><img src={getIcon(name)} alt={name} /></span>}
//       {errors[name] && <p className="validations">{errors[name]}</p>}
//     </div>
//   );

//   return (
//     <form onSubmit={handleSubmit} className="consultation_form" encType="multipart/form-data">
//       {title && <h6>{title}</h6>}

//       {optionPosition === 'top' && (
//         <div className="col-md-12">
//           <label className="form-label">Select Option</label>
//           <select name="contact_enquiry" value={data.contact_enquiry} onChange={handleChange} className="form-control">
//             <option value="" disabled>Select an option</option>
//             <option value="General Enquiry">General Enquiry</option>
//             <option value="Scoliosis Program Enquiry">Scoliosis Program Enquiry</option>
//             <option value="Existing Patient Enquiry">Existing Patient Enquiry</option>
//             <option value="Media Enquiry">Media Enquiry</option>
//             <option value="Others">Others</option>
//           </select>
//           {errors.contact_enquiry && <p className="validations">{errors.contact_enquiry}</p>}
//         </div>
//       )}

//       <div className="row form-design">
//         <Field label="Name" name="name" colSize={col} placeholder="Your Name" />
//         <Field label="Email" name="email_address" type="email" colSize={col} placeholder="Your Email" />
//         <Field label="Contact Number" name="phone_number" colSize={col2} placeholder="Your Phone Number" />
//         <Field label="Country" name="country" colSize={col2} placeholder="Your Country" />

//         {optionPosition !== 'top' && (
//           <div className="col-md-12">
//             <label className="form-label">Select Option</label>
//             <select name="contact_enquiry" value={data.contact_enquiry} onChange={handleChange} className="form-control">
//               <option value="" disabled>Select an option</option>
//               <option value="General Enquiry">General Enquiry</option>
//               <option value="Scoliosis Program Enquiry">Scoliosis Program Enquiry</option>
//               <option value="Existing Patient Enquiry">Existing Patient Enquiry</option>
//               <option value="Media Enquiry">Media Enquiry</option>
//               <option value="Others">Others</option>
//             </select>
//             {errors.contact_enquiry && <p className="validations">{errors.contact_enquiry}</p>}
//           </div>
//         )}

//         <div className="col-md-12">
//           <label className="form-label">Your Message</label>
//           <textarea
//             name="description"
//             className="form-control"
//             placeholder="Type your message here"
//             value={data.description}
//             onChange={handleChange}
//           />
//         </div>

//         {multiple && (
//           <div className="col-md-12 file-options">
//             <p className="form-label">
//               Upload Files <em>(JPG / JPEG / PNG — max 2MB)</em>
//             </p>
//             {files.map((file, index) => (
//               <div className="extra-files form-group" key={index}>
//                 <input
//                   type="file"
//                   className="form-control"
//                   accept=".jpg,.jpeg,.png"
//                   onChange={(e) => handleFileChange(index, e)}
//                 />
//                 {file.file && <p>{file.file.name}</p>}
//                 {index > 0 && <button type="button" onClick={() => removeFileField(file.id)}>Remove</button>}
//               </div>
//             ))}
//             <button type="button" onClick={addFileField}>Add More Files</button>
//           </div>
//         )}
//       </div>

//       <div className="form-footer mt-4">
//         <button type="submit" className="btn btn-primary" disabled={processing}>
//           {processing ? <img src="/images/button-loader.svg" alt="Loading..." /> : "Submit"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

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
		let formData = new FormData(),
		_files = [];

		for (var i = 0; i < files.length; i++) {
			if(files[i] && files[i].file) {
				formData.append('files[]', files[i].file);
			}
		}

		setLoader(true);
		var _lang = 'en';
		if(!currentLanguage.includes('en')) {
			var _arr = currentLanguage.split('_');
			_lang = _arr[1].toLowerCase();
		}
	    formData.append('name', data.name);
	    formData.append('email_address', data.email_address);
	    formData.append('phone_number', data.phone_number);
	    formData.append('contact_enquiry', data.contact_enquiry);
	    formData.append('country', data.country);
	    formData.append('description', data.description);
	    formData.append('lang', currentLanguage);
		formData.append('language',_lang);
	    formData.append('form_type', type);
	    formData.append('subscribe', (typeof data.subscribe != '	undefined') ? 'yes' : 'no');
	    formData.append('file', '');
		// debugger
	    await enquiry(formData, false);
	    setLoader(false);
	    navigate(`${urlLanguage}/thank-you`)
	    //reset();
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
				<input size="40"
					className="form-control"
					accept=".jpg,.jpeg,.png"
					aria-invalid="false"
					type="file"
					name="file"
					onChange={(e) => handleFileChange(index, e)}
				/>

				<div className="custom-file-field form-control">
					<span className="box">Choose Image</span>
					<p>{(file.filename) ? file.filename : 'No Image' }</p>
				</div>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<form className='consultation_form'>
				{title && <h6>{ title }</h6> }

				{(optionPosition == 'top') ? (
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
							{(labels) && <label htmlFor="inputCity" className="form-label">Name</label> }
							<input
								type="text"
								className="form-control"
								placeholder='Name'
							/>
							{icons && <span className="icon-form-home"><img src={'/images/form user.webp'} alt='form-user' /></span>}

						</div>

						<div className={`col-md-${col}`}>
							{(labels) && <label htmlFor="inputEmail4" className="form-label">Email</label> }
							<input
							    type="email"
							    placeholder="Email"
							    className="form-control"
							/>
							{icons && <span className="icon-form-home"><img src={'/images/form email.webp'} alt='form-email' /></span>}

						
						</div>

						<div className={`col-md-${col2}`}>
							{(labels) && <label htmlFor="inputEmail4" className="form-phone">Contact Number</label> }
							<input
							    type="tel"
							    placeholder='Contact Number'
							    className="form-control"
							  
							/>
							{icons && <span className="icon-form-home"><img src={'/images/form number.webp'} alt='form-number' /></span>}

							
						</div>

						<div className={`col-md-${col2}`}>
							{(labels) && <label htmlFor="inputCity" className="form-label">Country</label> }
							<input
								type="text"
								className="form-control" 
                                placeholder='Country'

							/>
							{icons && <span className="icon-form-home"><img src={'/images/form country.webp'} alt='form-country' /></span>}

						</div>

						{(optionPosition != 'top') ? (
							<div className="col-md-12">
								{(labels) && <label htmlFor="inputCity" className="form-label">Select an Option</label> }
								<select className="form-control" defaultValue="" >
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
							{(labels) && <label htmlFor="inputCity" className="form-label">Message</label> }
							<textarea
								type="text"
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

							{(multiple) ? (
								<Fragment>
									{files.map((file, index) => (
										<div className="extra-files form-group" key={index}>
									        <AppendField key={file.id} index={index} file={file} />
									        {(file.id > 0) ? (
									        	<a href="javascript:void(0)" onClick={() => removeFileField(file.id)}>-</a>
									        ) : null}
									    </div>
								    ))}

								    {(files.length < 5) ? (
										<a href="javascript:void(0)" onClick={addFileField}>+</a>
									) : null}
								</Fragment>
							) : null}
						</div>

						{(newsletter) ? (
							<div className="col-md-12">
								<input
									type="checkbox"
									value="1"
									id="subscribe_check"
									checked={checkBox}
						
								/>
								<label htmlFor="subscribe_check" className="form-label">Newslatter</label>
							</div>
						) : null}

						<div className="col-md-12 submit-btn contact-us"> 
							<button type="submit" className="btn btn-primary">
								<span>Send</span>
								{(loader) ? (
									<div className="btn-loader">
										<img src={'/images/button-loader.svg'} alt="loader-button" />
									</div>
								) : null}
							</button>
						</div>
					</div>
				</div>
			</form>
		</Fragment>
	)
}

export default ContactForm;