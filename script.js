let addRowsButton = document.getElementById('addRows');
let table = document.querySelector('table');
addRowsButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0].cells.length, table.rows.length + 1);
	console.log('button pressed');
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
	// if (y < table.rows.length) {
	// 	while (y < table.rows.length) {
	// 		table.deleteRow(table.rows.length - 1);
	// 		y++;
	// 	}
	// } else {
	// 	while (y > table.rows.length) {
	// 		let row = table.insertRow();
	// 		populateRow(y);
	// 	}
	// }
}
function populateRow(index, length) {
	for (let i = table.rows[index].cells.length; i < length; i++) {
		let cell = table.rows[index].insertCell(i);
		//Add click listner
	}
}
