let display = document.getElementById("result");

function updateDisplay(value) {
	display.value += value;
}

function clearDisplay() {
	display.value = "";
}

function deleteChar() {
	display.value = display.value.slice(0, -1);
}

function calculate() {
	display.value = eval(display.value);
}