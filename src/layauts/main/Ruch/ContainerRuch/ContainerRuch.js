function ContainerRuch({ name, img, click, className }) {
	return (
		<div
			onClick={(e) => {
				click(e);
			}}
			className={`ContainerRuch ${className}`}>
			<div className={`ContainerRuch__backround ${className}`}></div>
			<h1 className={`h1 ${className}`}>{name}</h1>

			<img className={`img ${className}`} src={img} alt={name}></img>
		</div>
	);
}

export default ContainerRuch;
