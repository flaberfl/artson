/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Pagination, Grid } from 'swiper/modules';
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
	if (document.querySelector('.first__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.first__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// loop: true,
			slidesPerView: 'auto',
			// height: 'auto',
			// grabCursor: true,
			// autoHeight: true,
			speed: 800,
			// centeredSlides: true,
			// centeredSlidesBounds: true,
			// coverflowEffect: {
			// 	rotate: 0,
			// 	stretch: 0,
			// 	depth: 100,
			// 	modifier: 2.5,

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
				el: '.first__swiper-pagination',
				clickable: true,
			},

			// Брейкпоінти
			// breakpoints: {
			// 	360: {
			// 		// centeredSlides: true,
			// 		slidesPerView: 1,
			// 		spaceBetween: 20,
			// 	},
			// 	640: {
			// 		// centeredSlides: true,
			// 		slidesPerView: 1,
			// 		spaceBetween: 20,
			// 	},
			// 	768: {
			// 		centeredSlides: true,
			// 		slidesPerView: 1.5,
			// 		spaceBetween: -40,
			// 	},
			// 	992: {
			// 		centeredSlides: true,
			// 		slidesPerView: 1.5,
			// 		spaceBetween: -60,
			// 	},
			// 	1200: {
			// 		// centeredSlides: true,
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// },

			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.video__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.video__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 23,
			// loop: true,
			slidesPerView: 'auto',
			// height: 'auto',
			grabCursor: true,
			// autoHeight: true,
			speed: 800,
			freeMode: true,
			// centeredSlides: true,
			// centeredSlidesBounds: true,
			// coverflowEffect: {
			// 	rotate: 0,
			// 	stretch: 0,
			// 	depth: 100,
			// 	modifier: 2.5,

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
				el: '.video__swiper-pagination',
				clickable: true,
			},

			// Брейкпоінти
			breakpoints: {
				360: {
					slidesPerView: 1,
				},
				640: {
					// grid: {
					// 	rows: 2,
					// },
					slidesPerView: 1,

				},
				768: {
					slidesPerView: 2,
					spaceBetween: 23,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 23,
				},
				1268: {
					slidesPerView: 2,
					spaceBetween: 23,
				},
			},

			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.reviews__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.reviews__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 20,
			// loop: true,
			// slidesPerView: 'auto',
			// height: 'auto',
			// grabCursor: true,
			autoHeight: false,
			speed: 800,
			freeMode: true,
			// centeredSlides: true,
			// centeredSlidesBounds: true,
			// coverflowEffect: {
			// 	rotate: 0,
			// 	stretch: 0,
			// 	depth: 100,
			// 	modifier: 2.5,

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
				el: '.reviews__swiper-pagination',
				clickable: true,
			},

			// Брейкпоінти
			breakpoints: {
				360: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 1,
					// grid: {
					// 	rows: 2,
					// },

				},
				768: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 1.5,
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