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