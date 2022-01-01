// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', function () {

	const navBtn = document.querySelector('.nav-button');
	const mobileNav = document.querySelector('.mobile-nav');
	const body = document.body;

	// Клик по кнопке
	navBtn.addEventListener('click', function (event) {
		event.stopPropagation();

		toggleMobileNav()
	})



	// Клик по окну за пределами навигации
	window.addEventListener('click', function () {
		if (body.classList.contains('no-scroll')) {
			toggleMobileNav()
		}
	})

	// Останавливаем клик внутри открытой мобильной навигации
	mobileNav.addEventListener('click', function (event) {
		event.stopPropagation();
	})

	function toggleMobileNav() {
		body.classList.toggle('no-scroll');
		navBtn.classList.toggle('nav-button-close');
		mobileNav.classList.toggle('mobile-nav-active');
	}
})