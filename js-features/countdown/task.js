
var timeNow = new Date();
let seconds = timeNow.getSeconds();
const elementTime = document.getElementById("timer");
elementTime.textContent = seconds;

let timer = setInterval(SecondsDown, 1000);

function SecondsDown() {
	if (seconds > 0) {
		seconds--;
		elementTime.textContent = seconds;
	}
	else {
		clearInterval(timer);
		window.alert("Вы победили в конкурсе!");
	}
}
