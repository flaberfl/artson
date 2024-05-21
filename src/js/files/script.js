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


function autoRemoveActiveClass() {

  const elements = document.querySelectorAll(".reviews-map__box");
  elements.forEach((element, i) => {
    element.classList.remove('active')
  })

}

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



// Присвоим попапам и линкам на них порядковые номера


const objPopupVideoLink = document.querySelectorAll('.video-popup-video');
const objPopupVideo = document.querySelectorAll('.video-popup');


objPopupVideoLink.forEach((element, i) =>
  element.setAttribute('data-popup', '#videos-popup-video' + '-' + i));

for (var i = 0, b; b = document.getElementById('videos-popup-video'); ++i) {
  b.id += '-' + i;
}


// Назначение активного ТАБА
const activeTabs = document.querySelectorAll('.tabs__title_start');
activeTabs.forEach((element, i) => {
  element.classList.add('_tab-active')
})



// Диапазонный слайдер
let range = document.querySelector('.inputRange');
let field = document.getElementById('num1');
let squareHidden = document.getElementById('sh');
let from = document.getElementById('from');
let to = document.getElementById('to');


range.addEventListener('input', function (e) {
  field.value = e.target.value;
  squareHidden.innerHTML = field.value;

  from.innerHTML = 0;
  to.innerHTML = 0;

  if (field.value >= 1 && field.value <= 44) {
    from.innerHTML = 30;
    to.innerHTML = 49;
  }

  if (field.value >= 45 && field.value <= 69) {
    from.innerHTML = 49;
    to.innerHTML = 74;
  }
  if (field.value >= 70 && field.value <= 99) {
    from.innerHTML = 75;
    to.innerHTML = 100;
  }
  if (field.value >= 100 && field.value <= 150) {
    from.innerHTML = 106;
    to.innerHTML = 135;
  }
  if (field.value > 150) {
    from.innerHTML = 120;
    to.innerHTML = '~';
  }

});
field.addEventListener('input', function (e) {
  range.value = e.target.value;
  squareHidden.innerHTML = field.value;

  if (field.value >= 1 && field.value <= 44) {
    from.innerHTML = 30;
    to.innerHTML = 49;
  }

  if (field.value >= 45 && field.value <= 69) {
    from.innerHTML = 49;
    to.innerHTML = 74;
  }
  if (field.value >= 70 && field.value <= 99) {
    from.innerHTML = 75;
    to.innerHTML = 100;
  }
  if (field.value >= 100 && field.value <= 150) {
    from.innerHTML = 106;
    to.innerHTML = 135;
  }
  if (field.value > 150) {
    from.innerHTML = 120;
    to.innerHTML = "";
  }
});


const quiz = document.querySelector('.quiz-form');
const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
const btnsNext = quiz.querySelectorAll('.quiz-form__button_next');
const btnsPrev = quiz.querySelectorAll('.quiz-form__button_prev');
const startNext = document.getElementById('start-next');


let count = 0;
quizItems[count].classList.add('_active');

btnsNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    initQuiz();
  });
  btn.disabled = true;
});

btnsPrev.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count--;
    initQuiz();
  });
});

function initQuiz() {

  quizItems.forEach((element, i) => {
    element.classList.remove('_active')
    if (i === count) {
      element.classList.add('_active')
    }
  })
  changeHeader();
}
changeHeader();


field.oninput = ValueInp;
function ValueInp() {

  this.value = this.value.substr(0, 4);
  if (this.value > 500) {
    this.value = this.value.substr(0, 1);
  }

  if (this.value !== '') {
    startNext.disabled = false;
  } else {
    startNext.disabled = true;
  }
}


quizItems.forEach((quizItem, quizItemIndex) => {

  quizItem.addEventListener('change', (e) => {
    const target = e.target;
    const inputsChecked = quizItem.querySelectorAll('input:checked');

    if (inputsChecked.length > 0) {
      // разблокировать кнопку именно эту
      btnsNext[quizItemIndex].disabled = false;
    } else {
      // заблокировать эту кнопку
      btnsNext[quizItemIndex].disabled = true;

      if (field.value !== '') {
        btnsNext[quizItemIndex].disabled = false;
      } else {
        btnsNext[quizItemIndex].disabled = true;
      }
    }
  })
});

function changeHeader() {
  const elementsForm = quiz.querySelectorAll('.quiz-form__fieldset_8');
  const subVisible = quiz.querySelectorAll('[sub-visible]');
  const subHidden = quiz.querySelectorAll('[sub-hidden]');

  subVisible.forEach(element => {
    element.hidden = false;
  });

  subHidden.forEach(element => {
    element.hidden = true;
  });

  elementsForm.forEach(elementForm => {

    if (elementForm.classList.contains('_active')) {

      subVisible.forEach(element => {
        element.hidden = true;
      });

      subHidden.forEach(element => {
        element.hidden = false;
      });
    }
  });
}

