class Swiper {
	constructor() {
		this.initialY = null;
		this.initialX = null;

		document.addEventListener("touchstart", (event) =>
			this.startTouch(event)
		);
		document.addEventListener("touchmove", (event) =>
			this.moveTouch(event)
		);

		this.events = {
			swipeUp: new Event("swipeUp"),
			swipeDown: new Event("swipeDown"),
			swipeLeft: new Event("swipeLeft"),
			swipeRight: new Event("swipeRight"),
		};
	}

	startTouch(event) {
		event.preventDefault();
		this.initialX = event.touches[0].clientX;
		this.initialY = event.touches[0].clientY;
	}
	moveTouch(event) {
		if (!this.initialX || !this.initialX) {
			return;
		}
		const curretX = event.touches[0].clientX;
		const curretY = event.touches[0].clientY;

		const diffX = this.initialX - curretX;
		const diffY = this.initialY - curretY;

		if (Math.abs(diffX) > Math.abs(diffY)) {
			if (diffX > 0) {
				document.dispatchEvent(this.events.swipeLeft);
			} else {
				document.dispatchEvent(this.events.swipeRight);
			}
		} else {
			if (diffY > 0) {
				document.dispatchEvent(this.events.swipeUp);
			} else {
				document.dispatchEvent(this.events.swipeDown);
			}
		}

		this.initialX = null;
		this.initialY = null;
	}
}

export default Swiper;
