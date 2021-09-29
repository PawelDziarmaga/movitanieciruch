import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { navScrollViev } from "../../tools/Nav/navScrollViev";
import { navHamburger } from "../../tools/Nav/navHamburger";
import { navMobileVisible } from "../../tools/Nav/navMobileVisible";

import Logo from "./logo/Logo";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import Menu from "./menu/Menu";
import MenuMobile from "./MenuMobile/MenuMobile";

const dataMenu = [
	["Aktualności", "a", "", "#idNews"],
	["Zajecia", "NavLink", "/Zajecia", "/"],
	["Grafik", "NavLink", "/Grafik", "/"],
	["Team/Trenerzy", "NavLink", "/Instruktorzy", "/"],
	["Cennik", "a", "/Cennik", "/"],
	["Dodatkowa oferta", "NavLink", "/Ofertaspecjalna", "/"],
	["O nas", "a", "/Onas", "/"],
	["Kontakt", "NavLink", "/Kontakt", "/"],
];

function Nav() {
	let possition = 0;
	const history = useHistory();

	useEffect(() => {
		window.onscroll = () => {
			navScrollViev(possition);
			possition = Math.floor(window.scrollY / 10);
		};
	});

	const handleCrlollToId = (e) => {
		const choosen = e.target.text;
		if (choosen === "Aktualności") {
			const location = {
				pathname: "Aktualnosci",
			};
			history.push(location);
		}
	};

	return (
		<div className='nav-container visible'>
			<nav className='nav opacity-nav  '>
				<Logo click={navMobileVisible} />
				<HamburgerMenu click={navHamburger} />
				<Menu
					click={(e) => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth",
						});
						handleCrlollToId(e);
						possition = 0;
						navScrollViev(0);
					}}
					dataMenu={dataMenu}
				/>
			</nav>
			<MenuMobile
				click={(e) => {
					window.scrollTo(0, 0);
					possition = 0;
					handleCrlollToId(e);
					navMobileVisible();
				}}
				dataMenu={dataMenu}
			/>
		</div>
	);
}

export default Nav;
