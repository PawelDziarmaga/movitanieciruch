import { NavLink } from "react-router-dom";

function Menu({ dataMenu, click }) {
	const menuElements = dataMenu.map((element) => (
		<li
			key={element[0]}
			className={`nav__menu__element ${element[0]}`}
			onClick={click}>
			<NavLink
				to={element[1]}
				href={element[1]}
				className={`nav__menu__link ${element[0]}`}>
				{element[0]}
			</NavLink>
		</li>
	));

	return <ul className='nav__menu'>{menuElements}</ul>;
}

export default Menu;
