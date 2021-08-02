let counter = 0;
let dir = 1;
const counterElement = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");


function clickerFunc() {
	cookieImg.width += dir * 10;
	cookieImg.height += dir * 10;

	counter++;
	counterElement.textContent = counter;
	dir = dir * -1;
}


cookieImg.onclick = clickerFunc;
