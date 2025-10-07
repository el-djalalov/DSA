export default function Accordian() {
	const [openItem, setOpenItem] = useState(null);
	const headRefs = useRef([]);

	const items = [
		{
			id: "html",
			title: "HTML",
			content:
				"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
		},
		{
			id: "css",
			title: "CSS",
			content:
				"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
		},
		{
			id: "js",
			title: "JavaScript",
			content:
				"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
		},
	];

	const toggleITem = id => {
		setOpenItem(prev => (prev === id ? null : id));
	};

	const handleKeyDown = (e, index) => {
		const total = items.length;
		let newIndex = null;

		switch (e.key) {
			case "ArrowDown":
				newIndex = (index + 1) % total;
				break;
			case "ArrowDown":
				newIndex = (index - 1 + total) % total;
				break;
			default:
				return;
		}

		e.preventDefault();
		headRefs.current[newIndex]?.focus();
	};

	return (
		<div>
			{items.map(({ id, title, content }, index) => {
				const isOpen = openItem === id;
				return (
					<div key={id} className="accordian-item">
						<button
							ref={id}
							aria-controls={`${id}_content`}
							aria-expanded={isOpen}
							className="accordian_header"
							onClick={() => toggleITem(id)}
							onKeyDown={e => handleKeyDown(e, index)}
						>
							{title}
							<span
								aria-hidden="true"
								className={`accordian_icon ${
									isOpen ? "accordian_icon_rotated" : ""
								}`}
							/>
						</button>

						{isOpen ? (
							<div id={`${id}_content`} className="accordian_content">
								{content}
							</div>
						) : null}
					</div>
				);
			})}
		</div>
	);
}
