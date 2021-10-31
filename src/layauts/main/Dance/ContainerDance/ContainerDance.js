function ContainerDance({ name, img, click, className }) {
	return (
		<div
			onClick={(e) => {
				click(e);
			}}
			className={`ContainerDance ${className}`}>
			<div className={`ContainerDance__backround ${className}`}></div>
			<h1 className={`h1 ${className}`}>{name}</h1>

			<img className={`img ${className}`} src={img} alt={name}></img>
		</div>
	);
}

export default ContainerDance;
