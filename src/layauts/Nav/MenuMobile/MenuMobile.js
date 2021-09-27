import React from "react";
import { NavLink } from "react-router-dom";

function MenuMobile({ dataMenu, click }) {
	const menuElements = dataMenu.map((element) => (
		<li
			key={element}
			className={`nav__menuMobile__element ${element}`}
			onClick={click}>
			<NavLink
				to={element[2]}
				href={element[2]}
				className={`nav__menuMobile__link ${element}`}>
				{element[0]}
			</NavLink>
		</li>
	));
	return <ul className='nav__menuMobile'>{menuElements}</ul>;
}

export default MenuMobile;
