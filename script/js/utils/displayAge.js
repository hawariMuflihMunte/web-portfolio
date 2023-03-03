
function DisplayAge() {
	const displayAge = document.getElementById('displayAge');

	const DoB = new Date('08/08/2002');
	// Hitung perbedaan bulan lahir dengan bulan sekarang
	const monthDiff = Date.now() - DoB.getTime();

	// Konversikan hitungan bulan ke dalam format tanggal (date)
	const ageDateFormat = new Date(monthDiff);

	// Ekstraksi tahun dari tanggal
	const year = ageDateFormat.getUTCFullYear();

	// Cek umur berdasarkan DoB dengan waktu sekarang
	const age = Math.abs(year - 1970);

	displayAge.innerHTML = `${age} years old`;
}

export default DisplayAge;
