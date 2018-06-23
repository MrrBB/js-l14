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