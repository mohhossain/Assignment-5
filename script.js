let table = document.querySelector('table');

let addRowsButton = document.getElementById('addRows');
addRowsButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0] == undefined ? 0 : table.rows[0].cells.length, table.rows.length + 1);
	console.log('add row');
});

let removeRowsButton = document.getElementById('removeRows');
removeRowsButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0] == undefined ? 0 : table.rows[0].cells.length, table.rows.length - 1);
	console.log('remove row');
});

let addColumnButton = document.getElementById('addColumn');
addColumnButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0] == undefined ? 1 : table.rows[0].cells.length + 1, table.rows.length);
});
function adjustTableDimensions(newX, newY) {
	if (newY < 0) newY = 0;
	if (newX < 0) newX = 0;
	for (let y = 0; y < newY; y++) {
		let row = table.rows[y];
		if (row == undefined) {
			table.insertRow();
		}
		populateRow(y, newX);
		while (newX < row.cells.length) row.deleteCell();
	}
	while (newY < table.rows.length) table.deleteRow(-1);
}
function populateRow(index, length) {
	for (let i = table.rows[index].cells.length; i < length; i++) {
		let cell = table.rows[index].insertCell(i);
		//Add click listner
	}
}
setInterval(() => {
	/*let redButton = document.getElementById("red")
	let greenButton = document.getElementById("green")
	let blueButton = document.getElementById("blue")
   */
	let red = document.getElementById('red').value;
	let green = document.getElementById('green').value;
	let blue = document.getElementById('blue').value;
	/*redButton.oninput = function () {
		red = parseInt(this.value);
		return red;
	}
	greenButton.oninput = function () {
		green = parseInt(this.value);
		return green;
	}
	blueButton.oninput = function () {
		blue = parseInt(this.value);
		return blue;
	}*/

	document.getElementById('square').style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
	/*document.getElementsByClassName("inside-container")[0].style.background = "rgb(" + r + "," + g + "," + b + ")"
	document.getElementById("result").innerText = "rgb(" + r + "," + g + "," + b + ")"
	if (r > 130 || g > 130 || b > 130) {
		document.getElementById("container").style.color = "black"
	} else {
		document.getElementById("container").style.color = "white"
	}*/
}, 500);
