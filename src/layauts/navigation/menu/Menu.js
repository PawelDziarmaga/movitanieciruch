import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
	return (
		<ul className='nav__container '>
			<li className='nav__element nav__list-item'>
				<a href='#idNews' className='nav__link'>
					Aktualnosci
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Taniec' className='nav__link'>
					Taniec
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Fitness' className='nav__link'>
					Fitness
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<a href='#idWeddingOffer' className='nav__link'>
					Oferta ślubna
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Ofertaspecjalna' className='nav__link'>
					Oferta specjalna
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Grafik' className='nav__link'>
					Grafik
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/Cennik' className='nav__link'>
					Cennik
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink
					to='/Instruktorzy'
					className='nav__link'
					href='#idInstructors'>
					Instruktorzy
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idAbout'>
					O nas
				</a>
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
