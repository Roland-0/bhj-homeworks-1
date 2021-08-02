let slideNow = 0;
let slides = Array.from(Array.from(document.getElementsByClassName("slider__items"))[0].querySelectorAll("div.slider__item"));

const prevBtn = document.getElementsByClassName("slider__arrow_prev")[0];
const nextBtn = document.getElementsByClassName("slider__arrow_next")[0];


function changeSlide(dir) {
	slides[slideNow].className = 'slider__item';

	slideNow += 1 * dir;
	if (slideNow < 0)
		slideNow = slides.length - 1;
	else if (slideNow > slides.length - 1)
		slideNow = 0;

	slides[slideNow].className = 'slider__item slider__item_active'
}


prevBtn.onclick = function() {
	changeSlide(-1);
};
nextBtn.onclick = function() {
	changeSlide(1);
};
