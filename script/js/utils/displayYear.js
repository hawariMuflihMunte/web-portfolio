
function DisplayYear() {
	const thisYear = Number(new Date().getFullYear());
	const containerElement = document.getElementById('displayYear');

	containerElement.innerHTML = `${thisYear}`;
}

export default DisplayYear;
