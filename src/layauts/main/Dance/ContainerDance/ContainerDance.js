function ContainerDance({ name, img, click }) {
	return (
		<div onClick={click} className='ContainerDance'>
			<div className='ContainerDance__backround'></div>
			<h1>{name}</h1>

			<img className={name} src={img} alt={name}></img>
		</div>
	);
}

export default ContainerDance;
