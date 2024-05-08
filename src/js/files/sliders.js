// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.types__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.types__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination],
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			spaceBetween: 20,
			// loop: true,
			// slidesPerView: 'auto',
			// height: 'auto',
			// grabCursor: true,
			// autoHeight: true,
			speed: 1500,
			// centeredSlides: true,
			// centeredSlidesBounds: true,
			// coverflowEffect: {
			// 	rotate: 0,
			// 	stretch: 0,
			// 	depth: 100,
			// modifier: 2.5,

			// },

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: '.types__swiper-pagination',
				clickable: true,
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 15,
					slidesPerView: 1.1,

				},
				480: {
					spaceBetween: 15,
					slidesPerView: 1.6,
				},
				768: {
					slidesPerView: 2.2,
					spaceBetween: 20
				},
				992: {
					slidesPerView: 2.8,
					spaceBetween: 20,
				},
				1320: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},

			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.docs__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.docs__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			// slidesPerView: 3,
			spaceBetween: 20,
			// loop: true,
			// slidesPerView: 'auto',
			// height: 'auto',
			// grabCursor: true,
			autoHeight: true,
			speed: 1500,
			// centeredSlides: true,
			// centeredSlidesBounds: true,
			// coverflowEffect: {
			// 	rotate: 0,
			// 	stretch: 0,
			// 	depth: 100,
			// modifier: 2.5,

			// },

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: '.docs__swiper-pagination',
				clickable: true,
			},

			// Arrows
			navigation: {
				nextEl: '.docs__swiper-button-next',
				prevEl: '.docs__swiper-button-prev',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					spaceBetween: 15,
					slidesPerView: 1,

				},
				480: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20
				},

				992: {
					slidesPerView: 1.4,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 1.4,
					spaceBetween: 20,
				},
				1320: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},

			// Події
			on: {

			}
		});
	}
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});