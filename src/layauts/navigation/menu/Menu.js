import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
	const refreshGraphic = () => {
		setTimeout(function () {
			window.location.reload();
		}, 2000);
	};
	return (
		<ul className='nav__container '>
			<li className='nav__element nav__list-item'>
				<a href='#idNews' className='nav__link'>
					Strona Główna
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Taniec' className='nav__link'>
					Zajęcia
				</NavLink>
			</li>
			<li
				className='nav__element nav__list-item'
				onClick={refreshGraphic}>
				<NavLink to='/Fitness' className='nav__link'>
					Grafik
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<a href='#idWeddingOffer' className='nav__link'>
					Team/Trenerzy
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Ofertaspecjalna' className='nav__link'>
					Cennik
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Grafik' className='nav__link'>
					Dodatkowa Oferta
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Kontakt' className='nav__link' href='#idConcact'>
					Kontakt
				</NavLink>
			</li>
		</ul>
	);
}

export default Menu;
