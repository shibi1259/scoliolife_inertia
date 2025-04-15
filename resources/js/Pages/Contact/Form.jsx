import React from "react";

const Form = () => {
    return (
        <form className="consultation_form">
            <select id="select" defaultValue="">
                <option value="" disabled>
                    Select Option
                </option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Scoliosis Program Enquiry">
                    Scoliosis Program Enquiry
                </option>
                <option value="Existing Patient Enquiry">
                    Existing Patient Enquiry
                </option>
                <option value="Media Enquiry">Media Enquiry</option>
                <option value="Others">Others</option>
            </select>

            <div className="form-design">
                <div className="row">
                    <div className="col-md-12">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                        />
                        <span className="icon-form-home">
                            <img src="/images/form user.webp" alt="form-user" />
                        </span>
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                        />
                        <span className="icon-form-home">
                            <img src="/images/form email.webp" alt="form-email" />
                        </span>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Contact Number</label>
                        <input
                            type="tel"
                            placeholder="Contact Number"
                            className="form-control"
                        />
                        <span className="icon-form-home">
                            <img src="/images/form number.webp" alt="form-number" />
                        </span>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Country</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                        />
                        <span className="icon-form-home">
                            <img src="/images/form country.webp" alt="form-country" />
                        </span>
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Your Message</label>
                        <textarea
                            className="form-control"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <div className="col-md-12 file-options">
                        <p className="form-label">
                            Supported file types:{" "}
                            <em style={{ color: "#626262" }}>
                                (jpg/jpeg/png max size)
                            </em>
                        </p>

                        <div className="extra-files form-group">
                            <input
                                size="40"
                                className="form-control"
                                accept=".jpg,.jpeg,.png"
                                type="file"
                            />
                            <div className="custom-file-field form-control">
                                <span className="box">Choose Image</span>
                                <p>No file selected</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 checkbox-policy">
                        <label>
                            <input type="checkbox" defaultChecked />I agree to
                            the terms and privacy policy.
                        </label>
                    </div>

                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
