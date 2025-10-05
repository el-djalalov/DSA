export default function App() {
	return (
		<form
			style={{ padding: "10px" }}
			action="https://questions.greatfrontend.com/api/questions/contact-form"
			method="post"
			noValidate
			aria-label="Contact form"
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: "10px",
					border: "1px solid #ddd",
					borderRadius: "8px",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
					width: "100%",
					padding: "12px",
				}}
			>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="Your name"
						name="name"
						style={{
							width: "95%",
							padding: "8px",
							borderRadius: "8px",
							border: "1px solid #ccc",
						}}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Your email"
						style={{
							width: "95%",
							padding: "8px",
							borderRadius: "8px",
							border: "1px solid #ccc",
						}}
					/>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea
						placeholder="Your message"
						name="message"
						style={{
							width: "95%",
							padding: "8px",
							borderRadius: "8px",
							border: "1px solid #ccc",
						}}
					/>
				</div>
				<div>
					<button
						style={{
							padding: "8px 16px",
							backgroundColor: "#007bff",
							color: "#fff",
							border: "none",
							borderRadius: "8px",
							cursor: "pointer",
						}}
						type="submit"
					>
						Send
					</button>
				</div>
			</div>
		</form>
	);
}
