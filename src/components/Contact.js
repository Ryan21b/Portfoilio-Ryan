import React from "react";
import emailjs from "emailjs-com";
import "../Con.css";
import Navbar from "./Navbar";

function sendEmail(e) {
	e.preventDefault();
	//user_PFmNr1GLtD7iauN1i4Iks
	emailjs
		.sendForm(
			"default_service",
			"template_qc9is5c",
			e.target,
			"user_PFmNr1GLtD7iauN1i4Iks"
		)
		.then(
			(result) => {
				console.log(result.text);
				alert("Message sent");
			},
			(error) => {
				console.log(error.text);
			}
		);
}

const Contact = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<h1 id="head">Contact Me </h1>
				<form id="form" onSubmit={sendEmail}>
					<input
						type="text"
						id="Name"
						name="Name"
						className="form-control mb-4"
						placeholder="Name"
						required
					/>

					<input
						type="type"
						id="Email"
						name="Email"
						className="form-control mb-4"
						placeholder="E-mail"
						required
					/>
					<input
						type="type"
						id="Address"
						name="Address"
						className="form-control mb-4"
						placeholder="Address"
					/>
					<div className="form-group">
						<textarea
							className="form-control rounded-0"
							id="Message"
							name="Message"
							rows="3"
							placeholder="Message"
							required></textarea>
					</div>

					<input
						className="form-control mb-4 btn-primary"
						type="submit"
						value="Send"
						id="button"
					/>
				</form>
			</div>
		</>
	);
};

export default Contact;
