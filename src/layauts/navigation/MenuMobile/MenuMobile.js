import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuMobile.css";

function MenuMobile(props) {
	return (
		<ul className='MenuMobile__container visible'>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/aktualnosci'
					className='MenuMobile__link'
					href='#idNews'>
					Aktualności
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/taniec'
					className='MenuMobile__link'
					href='#idDance'>
					Taniec
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/fitness'
					className='MenuMobile__link'
					href='#idFitnes'>
					Fitness
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/ofertaslubna'
					className='MenuMobile__link'
					href='#idGraphic'>
					Oferta ślubna
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/ofertaspecjalna'
					className='MenuMobile__link'
					href='#idGraphic'>
					Oferta Specjalna
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/grafik'
					className='MenuMobile__link'
					href='#idGraphic'>
					Grafik
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/cennik'
					className='MenuMobile__link'
					href='#idPrice'>
					Cennik
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/instruktorzy'
					className='MenuMobile__link'
					href='#idInstructors'>
					Instruktorzy
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/oNas'
					className='MenuMobile__link'
					href='#idAbout'>
					O nas
				</NavLink>
			</li>
			<li onClick={props.click} className='MenuMobile__element'>
				<NavLink
					to='/kontakt'
					className='MenuMobile__link'
					href='#idConcact'>
					Kontakt
				</NavLink>
			</li>
		</ul>
	);
}

export default MenuMobile;
