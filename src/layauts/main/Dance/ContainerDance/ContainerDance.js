function ContainerDance({ name, img, click }) {
	return (
		<div className='ContainerDance'>
			<h3>{name}</h3>
			<img onClick={click} src={img} alt={name}></img>
		</div>
	);
}

export default ContainerDance;
