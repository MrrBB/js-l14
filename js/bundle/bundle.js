(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	
	let tab = require('../parts/tab.js');
	let ajax = require('../parts/ajax.js');
	let calck = require('../parts/calck.js');
	let modal = require('../parts/modal.js');
	let slider = require('../parts/slider.js');
	let timer = require('../parts/timer.js');
	let scroll = require('../parts/scroll.js');

	tab();
	ajax();
	calck();
	modal();
	slider();
	timer();
	scroll();


})	

},{"../parts/ajax.js":2,"../parts/calck.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function ajax(){
	let message = new Object();
		message.success = 'Спасибо! Скоро мы с вами свяжемся';
		message.loading = 'Load...';
		message.failure = 'Что-то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);


		let request = new XMLHttpRequest();
			request.open("POST", 'server.php')
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
			formData = new FormData(form);

			request.send(formData);
			request.onreadystatechange = function() {
				if(request.readyState < 4){
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState == 4){
					if(request.status == 200 && request.status < 300){
						statusMessage.innerHTML = message.success;
					}
					else{
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			for(let i = 0; i < input.length; i++){
				input[i].value = ''
				// очищаем поля ввода
			}
		})
}
module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc(){
	let people = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daysSum = 0,
	total = 0;


	totalValue.innerHTML = 0;
	people.addEventListener('change', function() {
		personsSum = Math.floor(+this.value);
	 	total = personsSum * daysSum * 4000;
		if(restDays.value == ''){
			totalValue.innerHTML = 0;
		} else {				
			 	totalValue.innerHTML = total;
			 }			
	})
	restDays.addEventListener('change', function() {
		daysSum = Math.floor(+this.value);
		total = personsSum * daysSum * 4000;
		if(people.value == ''){
			totalValue.innerHTML = 0;
		} else {				 
			 	totalValue.innerHTML = total;
			 }
		
	})
	place.addEventListener('change', function(){
		if (restDays.value == '' || people.value == '') {
			totalValue.innerHTML = 0;
		}else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	})
}
module.exports = calc;
},{}],4:[function(require,module,exports){
function modal(){
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close  = document.querySelector('.popup-close'),
		descriptionTab = document.getElementsByClassName('info')[0].querySelectorAll('.info-tabcontent');

	for (let i = 0; i < 4; i++) {
		descriptionTab[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
		});
	};

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function(){
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = '';
	})
}
module.exports = modal;
},{}],5:[function(require,module,exports){
function scroll() {
	const scrollLink = document.querySelectorAll('a[href^="#"]'), 
    			animationTime = 0.3; 
		for (let i = 0; i < scrollLink.length; i++) {

		    scrollLink[i].addEventListener('click', function(e) { 
		        event.preventDefault();
		        let w = window.pageYOffset,
		            hash = this.href.replace(/[^#]*(.*)/, '$1');
		        	topCoordinates = document.querySelector(hash).getBoundingClientRect().top,
		            start = null;

		            //вау
		        requestAnimationFrame(step);


		        function step(time) {

		        	//ааа!?
		            if (start === null)
		            	 start = time;


		            let progress = time - start,
		                r = (topCoordinates < 0 ? Math.max(w - progress/animationTime, w + topCoordinates) : Math.min(w + progress/animationTime, w + topCoordinates));
		            window.scrollTo(0,r);
		            if (r != w + topCoordinates) {
		                requestAnimationFrame(step)
		            } else {
		                location.hash = hash
		            }
		        }
		    }, false);
		}
}
module.exports = scroll;
},{}],6:[function(require,module,exports){
function slider(){
	let slideIndex = 1,
	slides = document.getElementsByClassName('slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector(".slider-dots"),
	dots = document.getElementsByClassName('dot');
	showSlides(slideIndex);

	function showSlides(n) {		
		if (n > slides.length) {slideIndex = 1;}
		if(n < 1) {slideIndex = slides.length;}

		for(let i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
		for(let i = 0; i < dots.length; i++) {dots[i].classList.remove('dot-active');}

		slides[slideIndex  - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active')
	}

	function plusSlides (n){
		showSlides(slideIndex += n)
	}

	function currentSlide(n){
		showSlides(slideIndex = n)
	}

	prev.addEventListener('click', function() {
		plusSlides(-1)
	})
	next.addEventListener('click', function() {
		plusSlides(+1)
	})

	// точки
	dotsWrap.addEventListener('click', function(event) {
		for(let i = 0; i < dots.length + 1; i++){
			if(event.target.classList.contains('dot') && event.target == dots[i-1]){
				currentSlide(i)
			}
		}
	})

}
module.exports = slider;
},{}],7:[function(require,module,exports){
function tab(){
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info')[0];


	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	showTabContent(0)

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i] && i != 0){
					hideTabContent((i-1));
					hideTabContent(0);
					showTabContent(i);
					break;
				} else{
					hideTabContent(3);
					hideTabContent(2);
					hideTabContent(1);
					showTabContent(0);
				}
			}
		}
	});
	

}	

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
	let deadLine = '2018-06-12';

	function getTimeRemaning(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date());
		let seconds = Math.floor((t/1000)%60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60) % 60) ) ; 

			//условие
				if(t < 0){
					hours = 0,
					minutes  = 0,
					seconds =  0				
				}

			if(hours < 10){
				hours = '0' + hours;
			}
			if(minutes < 10){
				minutes = '0' + minutes;
			}
			if(seconds < 10){
				seconds = '0' + seconds;
			}
			return{
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			}
	}
	function setClock(id, endTime){

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaning(endTime);

				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
			}

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadLine);
}

module.exports = timer;
},{}]},{},[1]);
