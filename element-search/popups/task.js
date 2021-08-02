
const modalsArray = Array.from(document.getElementsByClassName("modal"));
// Инициализация каждой ветки окна
for (let i = 0; i < modalsArray.length; i++) {
	const closeElementsArray = Array.from(modalsArray[i].getElementsByClassName("modal__close"));

	// Инициализация каждого элемента закрытия
	for (let y = 0; y < closeElementsArray.length; y++) {
		// Стандартная инициализация элемента закрытия
		closeElementsArray[y].onclick = function() {
			let modalOfThis = modalsArray[i];
			modalOfThis.className = 'modal';
		};

		// Проверка на дополнительные классы
		if (closeElementsArray[y].className.includes("show-success")) {
			closeElementsArray[y].onclick = function() {
				let modalOfThis = modalsArray[i];
				modalOfThis.className = 'modal';
				const modalSuccessElement = document.getElementById("modal_success");
				modalSuccessElement.className = 'modal modal_active'; 
			};
		}
	}
}


const modalMainElement = document.getElementById("modal_main");
modalMainElement.className = 'modal modal_active';
