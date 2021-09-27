function HamburgerMenu({ click }) {
	return (
		<div onClick={click} className='nav__hamburger'>
			<span className='nav__hamburger__line'></span>
		</div>
	);
}

export default HamburgerMenu;
