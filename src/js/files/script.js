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

  // var map2 = new ymaps.Map("map2", {
  //   center: [55.720860, 37.560354],
  //   zoom: 15
  // });

  // var myPlacemark2 = new ymaps.Placemark(

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


  // map2.controls.remove('geolocationControl');
  // map2.controls.remove('searchControl'); // удаляем поиск
  // map2.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип

  // // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map2.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map2.controls.remove('rulerControl'); // удаляем контрол правил
  // map2.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  // map.geoObjects.add(myPlacemark);
}




// (function () {
//   var a = document.querySelector('.turnkey__media'), b = null, P = 0;
//   window.addEventListener('scroll', Ascroll, false);
//   document.body.addEventListener('scroll', Ascroll, false);
//   function Ascroll() {
//     if (b == null) {
//       var Sa = getComputedStyle(a, ''), s = '';
//       for (var i = 0; i < Sa.length; i++) {
//         if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//           s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
//         }
//       }
//       b = document.createElement('div');
//       b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//       a.insertBefore(b, a.firstChild);
//       var l = a.childNodes.length;
//       for (var i = 1; i < l; i++) {
//         b.appendChild(a.childNodes[1]);
//       }
//       a.style.height = b.getBoundingClientRect().height + 'px';
//       a.style.padding = '0';
//       a.style.border = '0';
//     }
//     var Ra = a.getBoundingClientRect(),
//       R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.turnkey__stages').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
//     if ((Ra.top - P) <= 0) {
//       if ((Ra.top - P) <= R) {
//         b.className = 'stop';
//         b.style.top = - R + 'px';
//       } else {
//         b.className = 'sticky';
//         b.style.top = P + 'px';
//       }
//     } else {
//       b.className = '';
//       b.style.top = '';
//     }
//     window.addEventListener('resize', function () {
//       a.children[0].style.width = getComputedStyle(a, '').width
//     }, false);
//   }
// })()



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







// function ActiveSpoller() {
//   for (let i = 0; i < activeElement.length; i++) {
//     if (activeElement[i].hasClass('._watcher-view')) {
//       console.log('activeElement');
//     }
//     // console.log(activeElement);
//   }
// }

// ActiveSpoller();
// Получить элемент с классом active





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


const quiz = document.querySelector('.quiz-form');
const quizItems = quiz.querySelectorAll('.quiz-form__fieldset');
const btnsNext = quiz.querySelectorAll('.quiz-form__button_next');
const btnsPrev = quiz.querySelectorAll('.quiz-form__button_prev');
const square = document.getElementById('num');
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


square.oninput = ValueInp;
function ValueInp() {

  this.value = this.value.substr(0, 4);
  if (this.value > 3000) {
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

      if (square.oninput.value !== '') {
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

  console.log(subVisible);
  console.log(subHidden);

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

