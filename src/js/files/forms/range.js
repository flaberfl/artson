// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		// let textFrom = priceSlider.getAttribute('data-from');
		// let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: 1, // [0,200000]
			connect: [true, false],
			step: 1,
			range: {
				'min': [1],
				'max': [200]
			},
			/*
			format: wNumb({
				decimals: 0
			})
			*/
		});
		const input = document.getElementById('num');

		priceSlider.noUiSlider.on('update', function (values) {
			input.value = Math.round(values);
		})

		/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		*/
		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
	}
}
rangeInit();
