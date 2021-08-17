import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
	return (
		<ul className='nav__container '>
			<li className='nav__element nav__list-item'>
				<NavLink to='/aktualnosci' className='nav__link'>
					Aktualnosci
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/taniec' className='nav__link'>
					Taniec
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/fitness' className='nav__link'>
					Fitness
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/ofertaslubna' className='nav__link'>
					Oferta ślubna
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/ofertaspecjalna' className='nav__link'>
					Oferta cpecjalna
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/grafik' className='nav__link'>
					Grafik
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/cennik' className='nav__link'>
					Cennik
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink
					to='/instruktorzy'
					className='nav__link'
					href='#idInstructors'>
					Instruktorzy
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/oNas' className='nav__link' href='#idAbout'>
					O nas
				</NavLink>
			</li>
			<li className='nav__element nav__list-item'>
				<NavLink to='/kontakt' className='nav__link' href='#idConcact'>
					Kontakt
				</NavLink>
			</li>
		</ul>
	);
}

export default Menu;
