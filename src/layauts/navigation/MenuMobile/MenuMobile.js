import React from "react";
import "./MenuMobile.css";

function MenuMobile() {
	return (
		<ul className='MenuMobile__container visible'>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					Aktualności
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					Fitnes
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					Taniec
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					Grafik
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					Cennik
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					Instruktorzy
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					O nas
				</a>
			</li>
			<li className='MenuMobile__element'>
				<a className='MenuMobile__link' href='./'>
					Kontakt
				</a>
			</li>
		</ul>
	);
}

export default MenuMobile;
