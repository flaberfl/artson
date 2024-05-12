// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


ymaps.ready(init);
function init() {
  var map = new ymaps.Map("map", {
    center: [55.720860, 37.560354],
    zoom: 15
  });

  // var myPlacemark = new ymaps.Placemark(

  //   [55.727540, 37.567785],
  //   {},
  //   {
  //     iconLayout: 'default#image',
  //     iconImageHref: './img/map/01-r.png',
  //     // iconImageSize: [59, 78],
  //     iconImageSize: [112, 122],
  //     iconImageOffset: [-30, -78]
  //   });


  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип

  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  // map.geoObjects.add(myPlacemark);
}



// document.querySelector(".box .block").show();
// document.querySelector(".closed .block").hide();
// document.querySelector("div.hide").click(function() {
//   document.querySelector(this).toggleClass("show").next().slideToggle("medium");
// });


// // Получаем элемент с классом button
// const button = document.querySelector('.icon-menu_pc');

// // Добавляем обработчик события нажатия на элемент button
// button.addEventListener('click', function() {
//   // Получаем элементы с классами menu и button
//   const menu = document.querySelector('.menu__body');
//   const buttonElement = this;

//   // Добавляем класс active элементам menu и button
//   menu.classList.add('active');
//   buttonElement.classList.add('active');
// });



// const menuBtns = document.querySelectorAll('.icon-menu_pc');
// const drops = document.querySelectorAll('.menu__body');

// menuBtns.forEach(el => {
//   el.addEventListener('click', (e) => {
//     let currentBtn = e.currentTarget;
//     let drop = currentBtn.closest('.wrap-icon-btn').querySelector('.menu__body');

//     menuBtns.forEach(el => {
//       if (el !== currentBtn) {
//         el.classList.remove('icon-menu_pc--active');
//       }
//     });

//     drops.forEach(el => {
//       if (el !== drop) {
//         el.classList.remove('menu__body--active');
//       }
//     });

//     drop.classList.toggle('menu__body--active');
//     currentBtn.classList.toggle('icon-menu_pc--active');
//   });
// });

// document.addEventListener('click', (e) => {
//   if (!e.target.closest('.header')) {
//     menuBtns.forEach(el => {
//       el.classList.remove('icon-menu_pc--active');
//     });

//     drops.forEach(el => {
//       el.classList.remove('menu__body--active');
//     });
//   }
// });



// При прокрутке стрелка вниз изчезает

// window.onscroll = function () {
//   const arrow = document.querySelector('.intro__arrow-down');
//   if (window.scrollY > 100) {
//     arrow.classList.add('hidden');
//   } else {
//     arrow.classList.remove('hidden');
//   }
// };






// Присвоим попапам и линкам на них порядковые номера


const objPopupVideoLink = document.querySelectorAll('.video-popup-video');
const objPopupVideo = document.querySelectorAll('.video-popup');



objPopupVideoLink.forEach((element, i) =>
  element.setAttribute('data-popup', '#videos-popup-video' + '-' + i));

for (var i = 0, b; b = document.getElementById('videos-popup-video'); ++i) {
  b.id += '-' + i;
}

// Если checkbox отлючен-кнопка Submit - неактивна


// const checkbox = document.getElementById('i-submit');
// const btn_submit = document.getElementById('b-submit');

// btn_submit.disabled = true;
// checkbox.addEventListener("change", () => {
//   if (checkbox.checked) {
//     btn_submit.disabled = false;
//   } else {
//     btn_submit.disabled = true;
//   }
// });

// const checkbox2 = document.getElementById('i-report');
// const btn_submit2 = document.getElementById('b-report');

// btn_submit2.disabled = true;
// checkbox2.addEventListener("change", () => {
//   if (checkbox2.checked) {
//     btn_submit2.disabled = false;
//   } else {
//     btn_submit2.disabled = true;
//   }
// });

// const checkbox3 = document.getElementById('i-callback');
// const btn_submit3 = document.getElementById('b-callback');

// btn_submit3.disabled = true;
// checkbox3.addEventListener("change", () => {
//   if (checkbox3.checked) {
//     btn_submit3.disabled = false;
//   } else {
//     btn_submit3.disabled = true;
//   }
// });
