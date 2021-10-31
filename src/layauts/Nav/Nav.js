import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
/*   Import tools  */
import { navScrollViev } from "../../tools/Nav/navScrollViev";
import { navHamburger } from "../../tools/Nav/navHamburger";
import { navMobileVisible } from "../../tools/Nav/navMobileVisible";
/*   Import img  */
import Logo from "./logo/Logo";
/*   Import componets  */
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import Menu from "./menu/Menu";
import MenuMobile from "./MenuMobile/MenuMobile";
/*   Define nav elements   */
const dataMenu = [
	["Aktualności", ""],
	["Zajecia", "/Zajecia"],
	["Grafik", "/Grafik"],
	["Team/Trenerzy", "/Instruktorzy"],
	["Cennik", "/Cennik"],
	["Dodatkowa oferta", "/Ofertaspecjalna"],
	["O nas", "/Onas"],
	["Kontakt", "/Kontakt"],
];

function Nav() {
	let possition = useRef(0);
	const history = useHistory();

	useEffect(() => {
		window.onscroll = () => {
			navScrollViev(possition.current);
			possition.current = Math.floor(window.scrollY / 10);
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
						possition.current = 0;
						navScrollViev(0);
					}}
					dataMenu={dataMenu}
				/>
			</nav>
			<MenuMobile
				click={(e) => {
					window.scrollTo(0, 0);
					possition.current = 0;
					handleCrlollToId(e);
					navMobileVisible();
				}}
				dataMenu={dataMenu}
			/>
		</div>
	);
}

export default Nav;
