import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import MenuMobile from "./MenuMobile/MenuMobile";

function App() {
	let possition = 0;

	window.onscroll = function (event) {
		const nav = document.getElementsByClassName("nav");
		console.log(nav[0]);
		if (possition < 1) {
			nav[0].classList.add("opacity-nav");
		} else if (possition < 5) {
			nav[0].classList.remove("opacity-nav");
		} else if (possition > Math.floor(window.scrollY / 100)) {
			nav[0].classList.remove("visible-nav");
			nav[0].classList.remove("opacity-nav");
		} else if (possition < Math.floor(window.scrollY / 100)) {
			nav[0].classList.add("visible-nav");
			nav[0].classList.remove("opacity-nav");
		}
		possition = Math.floor(window.scrollY / 100);
	};
	let mobileMenu = document.querySelector(".nav-container");
	let menuHamburger = document.querySelector(".nav__hamburger-container");

	const handleHamburgerMenu = () => {
		mobileMenu = document
			.querySelector(".nav-container")
			.classList.toggle("visible");
		menuHamburger = document
			.querySelector(".nav__hamburger-container")
			.classList.toggle("active");
	};

	const handleHamburgerMenuClick = () => {
		mobileMenu = document
			.querySelector(".nav-container")
			.classList.add("visible");
		menuHamburger = document
			.querySelector(".nav__hamburger-container")
			.classList.remove("active");
	};
	return (
		<div className='nav-container visible'>
			<nav className='nav opacity-nav'>
				<Logo click={handleHamburgerMenuClick} />
				<Menu />
				<HamburgerMenu click={handleHamburgerMenu} />
			</nav>
			<MenuMobile click={handleHamburgerMenuClick} />
		</div>
	);
}

export default App;
