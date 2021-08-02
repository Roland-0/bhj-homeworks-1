const counterElement = document.getElementById("dead");
const lostElement = document.getElementById("lost");
let deads = 0;
let lost = 0;
let prevId;


function finishGame(message) {
	deads = 0;
	lost = 0;
	counterElement.textContent = deads;
	lostElement.textContent = lost;
	window.alert(message);
}


function MoleCheck() {
	if (this.className.includes( 'hole_has-mole' ) && prevId != this.id) {
		deads++;
		counterElement.textContent = deads;
		prevId = this.id;

		if (deads >= 10)
			finishGame("Вы победили!");
	}
	else {
		lost++;
		lostElement.textContent = lost;

		if (lost >= 5)
			finishGame("Вы проиграли!");
	}
}


for (let i = 1; i < 10; i++) {
	const moleElement = document.getElementById("hole" + i.toString());
	moleElement.onclick = MoleCheck;
}
