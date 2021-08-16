import React from "react";
import "./MenuMobile.css";

function MenuMobile() {
	return (
		<ul className='MenuMobile__container visible'>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idNews'>
					Aktualności
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idFitnes'>
					Fitness
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idDance'>
					Taniec
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idGraphic'>
					Grafik
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idPrice'>
					Cennik
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idInstructors'>
					Instruktorzy
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idAbout'>
					O nas
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='#idConcact'>
					Kontakt
				</a>
			</li>
		</ul>
	);
}

export default MenuMobile;
