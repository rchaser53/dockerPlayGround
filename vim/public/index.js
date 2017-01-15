window.onload = () => {
	document.querySelector("#root").addEventListener("click", () => {
		fetch('http://localhost:3030/ponyo')
			.then((data) => {
				console.log(data);
			}).catch((err) => {
				console.error(err);
			});
	});
console.log(23);

}
