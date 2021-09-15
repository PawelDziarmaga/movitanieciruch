import React from "react";
import { NavLink } from "react-router-dom";

function MenuMobile(props) {
	const refreshGraphic = () => {
		props.click();
		setTimeout(function () {
			window.location.reload();
		}, 2000);
	};

	return (
		<ul className='MenuMobile__container visible'>
			<li onClick={props.click} className='MenuMobile__element'>
				<a href='#idNews' className='MenuMobile__link'>
					Strona główna
				</a>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink to='/Taniec' className='MenuMobile__link'>
					Zajęcia
				</NavLink>
			</li>
			<li onClick={refreshGraphic} className='MenuMobile__element'>
				<NavLink
					to='/Grafik'
					className='MenuMobile__link'
					href='#idGraphic'>
					Grafik
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink to='/Cennik' className='MenuMobile__link'>
					Team/Trenerzy
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink to='/Instruktorzy' className='MenuMobile__link'>
					Cennik
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<a href='#idAbout' className='MenuMobile__link'>
					Dodatkowa oferta
				</a>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink to='/Kontakt' className='MenuMobile__link'>
					Kontakt
				</NavLink>
			</li>
		</ul>
	);
}

export default MenuMobile;
