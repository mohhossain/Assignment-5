let table = document.querySelector('table');

let addRowsButton = document.getElementById('addRows');
addRowsButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0].cells.length, table.rows.length + 1);
	console.log('add row');
});

let removeRowsButtons = document.getElementById('removeRows');
removeRowsButtons.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0].cells.length, table.rows.length - 1);
	console.log('remove row');
});
function adjustTableDimensions(newX, newY) {
	let currentX = table.rows[0].length;
	for (let y = 0; y < newY; y++) {
		let row = table.rows[y];
		if (row == undefined) {
			table.insertRow();
		}
		populateRow(y, newX);
	}
	while (newY < table.rows.length) table.deleteRow(-1);
}
function populateRow(index, length) {
	for (let i = table.rows[index].cells.length; i < length; i++) {
		let cell = table.rows[index].insertCell(i);
		//Add click listner
	}
}
