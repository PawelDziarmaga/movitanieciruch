import { NavLink } from "react-router-dom";

function MenuMobile({ dataMenu, click }) {
	const menuElements = dataMenu.map((element) => (
		<li
			key={element[0]}
			className={`nav__menuMobile__element ${element}`}
			onClick={click}>
			<NavLink
				to={element[1]}
				href={element[1]}
				className={`nav__menuMobile__link ${element}`}>
				{element[0]}
			</NavLink>
		</li>
	));
	return <ul className='nav__menuMobile'>{menuElements}</ul>;
}

export default MenuMobile;
