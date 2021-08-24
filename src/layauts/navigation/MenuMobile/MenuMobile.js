import React from "react";
import { NavLink } from "react-router-dom";

function MenuMobile(props) {
	return (
		<ul className='MenuMobile__container visible'>
			<li onClick={props.click} className='MenuMobile__element'>
				<a href='#idNews' className='MenuMobile__link'>
					Aktualności
				</a>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Taniec'
					className='MenuMobile__link'
					href='#idDance'>
					Taniec
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Fitness'
					className='MenuMobile__link'
					href='#idFitnes'>
					Fitness
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Ofertaslubna'
					className='MenuMobile__link'
					href='#idGraphic'>
					Oferta ślubna
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Ofertaspecjalna'
					className='MenuMobile__link'
					href='#idGraphic'>
					Oferta Specjalna
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Grafik'
					className='MenuMobile__link'
					href='#idGraphic'>
					Grafik
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Cennik'
					className='MenuMobile__link'
					href='#idPrice'>
					Cennik
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Instruktorzy'
					className='MenuMobile__link'
					href='#idInstructors'>
					Instruktorzy
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/ONas'
					className='MenuMobile__link'
					href='#idAbout'>
					O nas
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/Kontakt'
					className='MenuMobile__link'
					href='#idConcact'>
					Kontakt
				</NavLink>
			</li>
		</ul>
	);
}

export default MenuMobile;
