import React from "react";
import "./Menu.css";

function Menu() {
	return (
		<ul className='nav__container '>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					Aktualności
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					Fitnes
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					Taniec
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					Grafik
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					Cennik
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					Instruktorzy
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					O nas
				</a>
			</li>
			<li className='nav__element nav__list-item'>
				<a className='nav__link' href='./'>
					Kontakt
				</a>
			</li>
		</ul>
	);
}

export default Menu;
