function ContainerDance({ name, img, click }) {
	return (
		<div onClick={click} className='ContainerDance'>
			<h3>{name}</h3>

			<img className={name} src={img} alt={name}></img>
		</div>
	);
}

export default ContainerDance;
