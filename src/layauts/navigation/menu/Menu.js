import React from "react";
import "./Menu.css";

function Menu() {
	return (
		<ul className='nav__container '>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idNews'>
					Aktualności
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idFitnes'>
					Fitnes
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idDance'>
					Taniec
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idGraphic'>
					Grafik
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idPrice'>
					Cennik
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idInstructors'>
					Instruktorzy
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idAbout'>
					O nas
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='#idConcact'>
					Kontakt
				</a>
			</li>
		</ul>
	);
}

export default Menu;
