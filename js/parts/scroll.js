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