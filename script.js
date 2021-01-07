let table = document.querySelector('table');
let mousedown = false;
document.body.addEventListener('mousedown', (ev) => (mousedown = true));
document.body.addEventListener('mouseup', (ev) => (mousedown = false));
adjustTableDimensions(3, 3);
const defaultColor = 'rgb(255, 255, 255)';

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

let colorAllUncoloredButton = document.getElementById('colorUncolored');
colorAllUncoloredButton.addEventListener('click', (ev) => {
	fillTable(false);
});

let fillAllButton = document.getElementById('fillAll');
fillAllButton.addEventListener('click', (ev) => {
	fillTable(true);
});

let clearColorButton = document.getElementById('clearColor');
clearColorButton.addEventListener('click', (ev) => {
	for (let x = 0; x < table.rows[0].cells.length; x++) {
		for (let y = 0; y < table.rows.length; y++) {
			table.rows[y].cells[x].style.background = defaultColor;
		}
	}
});

function fillTable(fillColoredTiles) {
	for (let i = 0; i < table.rows[0].cells.length; i++) {
		for (let j = 0; j < table.rows.length; j++) {
			if (table.rows[j].cells[i].style.backgroundColor == defaultColor || fillColoredTiles) {
				table.rows[j].cells[i].style.backgroundColor = colors();
			}
		}
	}
}

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
		cell.addEventListener('mouseover', (ev) => {
			if (mousedown) changeCellColor(cell);
		});
		cell.addEventListener('mousedown', (ev) => changeCellColor(cell));
	}
}

function colors() {
	let red = document.getElementById('red').value;
	let green = document.getElementById('green').value;
	let blue = document.getElementById('blue').value;
	return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

// setInterval(() => {
// 	document.getElementById('table').style.background = colors();
// }, 100);

function dropFunction() {
	document.getElementById('dropColors').classList.toggle('show');
}

function changeCellColor(cell) {
	console.log(cell);
	cell.style.backgroundColor = colors();
}
