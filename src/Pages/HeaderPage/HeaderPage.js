function HeaderPage({ title }) {
	return (
		<div id='idHeaderPage' className='HeaderPage'>
			<div className='HeaderPage__image'></div>
			<div className='HeaderPage__content'>
				<h1>{title}</h1>

				<div>»</div>
			</div>
		</div>
	);
}

export default HeaderPage;
