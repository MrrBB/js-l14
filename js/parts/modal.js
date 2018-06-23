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