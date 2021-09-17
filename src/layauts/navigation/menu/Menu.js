import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ click }) {
	const refreshGraphic = () => {
		setTimeout(function () {
			window.location.reload();
		}, 2000);
	};
	return (
		<ul className='nav__container '>
			<li onClick={click} className='nav__element nav__list-item'>
				<a href='#idNews' className='nav__link'>
					Aktualności
				</a>
			</li>
			<li onClick={click} className='nav__element nav__list-item'>
				<NavLink to='/Taniec' className='nav__link'>
					Zajęcia
				</NavLink>
			</li>
			<li
				className='nav__element nav__list-item'
				onClick={refreshGraphic}>
				<NavLink to='/Grafik' className='nav__link'>
					Grafik
				</NavLink>
			</li>
			<li onClick={click} className='nav__element nav__list-item'>
				<NavLink to='/Instruktorzy' className='nav__link'>
					Team/Trenerzy
				</NavLink>
			</li>
			<li onClick={click} className='nav__element nav__list-item'>
				<NavLink to='/Cennik' className='nav__link'>
					Cennik
				</NavLink>
			</li>
			<li onClick={click} className='nav__element nav__list-item'>
				<NavLink to='/Ofertaspecjalna' className='nav__link'>
					Dodatkowa Oferta
				</NavLink>
			</li>
			<li onClick={click} className='nav__element nav__list-item'>
				<a href='#idAbout' className='nav__link'>
					O nas
				</a>
			</li>
			<li onClick={click} className='nav__element nav__list-item'>
				<NavLink to='/Kontakt' className='nav__link' href='#idConcact'>
					Kontakt
				</NavLink>
			</li>
		</ul>
	);
}

export default Menu;
