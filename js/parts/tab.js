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