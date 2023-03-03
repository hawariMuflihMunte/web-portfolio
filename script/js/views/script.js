
import Theme from '../utils/theme.js';
import DisplayYear from '../utils/displayYear.js';
import Loader from '../utils/loader.js';
import DisplayAge from '../utils/displayAge.js';
import DisplayHobbies from '../utils/displayHobbies.js';

document.addEventListener('DOMContentLoaded', () => {
	Loader();
	Theme();
	DisplayYear();
	DisplayAge();
	DisplayHobbies();
});
