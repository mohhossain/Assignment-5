let table = document.querySelector('table');
const defaultColor = '#FFFFFF';

let addRowsButton = document.getElementById('addRows');
addRowsButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0] == undefined ? 1 : table.rows[0].cells.length, table.rows.length + 1);
	console.log('add row');
});

let removeRowsButton = document.getElementById('removeRows');
removeRowsButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0] == undefined ? 1 : table.rows[0].cells.length, table.rows.length - 1);
	console.log('remove row');
});

let addColumnButton = document.getElementById('addColumn');
addColumnButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0] == undefined ? 1 : table.rows[0].cells.length + 1, table.rows.length);
});

let removeColumnButton = document.getElementById('removeColumn');
removeColumnButton.addEventListener('click', (ev) => {
	adjustTableDimensions(table.rows[0] == undefined ? 1 : table.rows[0].cells.length - 1, table.rows.length);
});

let clearColorButton = document.getElementById('clearColor');
clearColorButton.addEventListener('click', (ev) => {
	for (let x = 0; x < table.rows[0].cells.length; x++) {
		for (let y = 0; y < table.rows.length; y++) {
			table.rows[y].cells[x].style.background = defaultColor;
		}
	}
});
function adjustTableDimensions(newX, newY) {
	if (newY < 1) newY = 1;
	if (newX < 1) newX = 1;
	for (let y = 0; y < newY; y++) {
		let row = table.rows[y];
		if (row == undefined) {
			row = table.insertRow();
		}
		populateRow(y, newX);
		while (newX < row.cells.length) row.deleteCell(-1);
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

	document.getElementById("table").style.background = "rgb(" + red + "," + green + "," + blue + ")"
	/*document.getElementsByClassName("inside-container")[0].style.background = "rgb(" + r + "," + g + "," + b + ")"
	document.getElementById("result").innerText = "rgb(" + r + "," + g + "," + b + ")"
	if (r > 130 || g > 130 || b > 130) {
		document.getElementById("container").style.color = "black"
	} else {
		document.getElementById("container").style.color = "white"
	}*/
}, 100)

function dropFunction() {
	document.getElementById("dropColors").classList.toggle("show");
}
