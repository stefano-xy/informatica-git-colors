function mostraColore() {
	let r = document.getElementById("r").value;
	let g = document.getElementById("g").value;
	let b = document.getElementById("b").value;

	// crea stringa RGB
	let colore = `rgb(${r}, ${g}, ${b})`;

	// applica colore al box
	document.getElementById("colorBox").style.backgroundColor = colore;
}