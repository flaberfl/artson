// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// ymaps.ready(init);
// function init() {
//   var map = new ymaps.Map("map", {
//     center: [55.720860, 37.560354],
//     zoom: 15
//   });

//   // var map2 = new ymaps.Map("map2", {
//   //   center: [55.720860, 37.560354],
//   //   zoom: 15
//   // });

//   // var myPlacemark2 = new ymaps.Placemark(

//   //   [55.727540, 37.567785],
//   //   {},
//   //   {
//   //     iconLayout: 'default#image',
//   //     iconImageHref: './img/map/01-r.png',
//   //     // iconImageSize: [59, 78],
//   //     iconImageSize: [112, 122],
//   //     iconImageOffset: [-30, -78]
//   //   });


//   map.controls.remove('geolocationControl');
//   map.controls.remove('searchControl'); // удаляем поиск
//   map.controls.remove('trafficControl'); // удаляем контроль трафика
//   map.controls.remove('typeSelector'); // удаляем тип

//   // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
//   map.controls.remove('rulerControl'); // удаляем контрол правил
//   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


//   // map2.controls.remove('geolocationControl');
//   // map2.controls.remove('searchControl'); // удаляем поиск
//   // map2.controls.remove('trafficControl'); // удаляем контроль трафика
//   // map.controls.remove('typeSelector'); // удаляем тип

//   // // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   // map2.controls.remove('zoomControl'); // удаляем контрол зуммирования
//   // map2.controls.remove('rulerControl'); // удаляем контрол правил
//   // map2.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

//   // map.geoObjects.add(myPlacemark);
// }


// let event_list = ["click", "mouseenter"];

// event_list.forEach(function(event) {

// 	document.querySelector(".element").addEventListener(event, function() { // Применяем к элементу с class="element"

// 		// Нужное действие

// 	});

// });

// event_list.forEach(function (event) {
//   document.querySelector('.reviews-map__person_1').addEventListener(event, function () {
//     document.querySelector('.reviews-map__box_1').classList.add('active');
//   });

// });


function autoRemoveActiveClass() {

  const elements = document.querySelectorAll(".reviews-map__box");
  elements.forEach((element, i) => {
    element.classList.remove('active')
  })

}
// autoRemoveActiveClass();

document.querySelector('.reviews-map__person_1').addEventListener('mouseenter', function () {
  autoRemoveActiveClass();
  document.querySelector('.reviews-map__box_1').classList.toggle('active');
});


document.querySelector('.reviews-map__person_2').addEventListener('mouseenter', function () {
  autoRemoveActiveClass();
  document.querySelector('.reviews-map__box_2').classList.toggle('active');
});
document.querySelector('.reviews-map__person_3').addEventListener('mouseenter', function () {
  autoRemoveActiveClass();
  document.querySelector('.reviews-map__box_3').classList.toggle('active');
});
document.querySelector('.reviews-map__person_4').addEventListener('mouseenter', function () {
  autoRemoveActiveClass();
  document.querySelector('.reviews-map__box_4').classList.toggle('active');
});
document.querySelector('.reviews-map__person_5').addEventListener('mouseenter', function () {
  autoRemoveActiveClass();
  document.querySelector('.reviews-map__box_5').classList.toggle('active');
});
document.querySelector('.reviews-map__person_6').addEventListener('mouseenter', function () {
  autoRemoveActiveClass();
  document.querySelector('.reviews-map__box_6').classList.toggle('active');
});
document.querySelector('.reviews-map__person_7').addEventListener('mouseenter', function () {
  autoRemoveActiveClass();
  document.querySelector('.reviews-map__box_7').classList.toggle('active');
});






// document.querySelector('.reviews-map__person_7').addEventListener('mouseenter', function () {
//   document.querySelector('.reviews-map__box_7').classList.toggle('active');
// });

// document.querySelector('.reviews-map__person_7').addEventListener('mouseleave', function () {
//   document.querySelector('.reviews-map__box_7').classList.remove('active');
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
