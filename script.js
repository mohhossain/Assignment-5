let addRowsButton = document.getElementById('addRows');
let table = document.querySelector('table');
addRowsButton.addEventListener('click', (ev) => {
	table.insertRow();
	console.log('button pressed');
});
