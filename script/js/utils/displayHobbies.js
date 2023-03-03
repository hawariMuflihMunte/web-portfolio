
function DisplayHobbies() {
	const displayHobbies = document.getElementById('displayHobbies');
	displayHobbies.classList.add('fourth-bg', 'corner-round-sharp');
	displayHobbies.style.padding = '10px';
	displayHobbies.style.color = 'var(--main-color)';

	const hobbies = [
		'Programming',
		'Gaming',
		'Watching Anime',
	];

	hobbies.forEach(hobby => {
		const hobbyContainer = document.createElement('h5');

		hobbyContainer.innerHTML = `<i class="material-symbols-sharp" style="font-size: 14px;">arrow_right</i>${hobby}<br/>`;

		displayHobbies.appendChild(hobbyContainer);
	});
}

export default DisplayHobbies;
