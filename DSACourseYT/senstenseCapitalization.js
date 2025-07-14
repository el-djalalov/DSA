const capitilize = str => {
	return str
		.toLowerCase()
		.split(" ")
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(" ");
};

console.log(capitilize("test this test"));
