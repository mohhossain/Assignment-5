let addRowsButton = document.getElementById('addRows');
let table = document.querySelector('table');
addRowsButton.addEventListener('click', (ev) => {
	table.insertRow();
	console.log('button pressed');
});


setInterval(() => {
	/*let redButton = document.getElementById("red")
	let greenButton = document.getElementById("green")
	let blueButton = document.getElementById("blue")
   */
	let red = document.getElementById("red").value
	let green = document.getElementById("green").value
	let blue = document.getElementById("blue").value
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

	document.getElementById("square").style.background = "rgb(" + red + "," + green + "," + blue + ")"
	/*document.getElementsByClassName("inside-container")[0].style.background = "rgb(" + r + "," + g + "," + b + ")"
	document.getElementById("result").innerText = "rgb(" + r + "," + g + "," + b + ")"
	if (r > 130 || g > 130 || b > 130) {
		document.getElementById("container").style.color = "black"
	} else {
		document.getElementById("container").style.color = "white"
	}*/
}, 500)



