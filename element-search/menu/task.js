
let menuLinkElements = Array.from(document.querySelectorAll("ul.menu a.menu__link"));

for (let i = 0; i < menuLinkElements.length; i++) {
	menuLinkElements[i].onclick = function() {
		menuDrop = menuLinkElements[i].parentElement.querySelector("ul.menu");
		if (menuDrop != null) {
			menuDrop.className = 'menu menu_sub menu_active';
			return false;
		}
	};
}
