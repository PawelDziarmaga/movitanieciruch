import "./ContainerDance.css";

function ContainerDance({ name, img }) {
	return (
		<div className='ContainerDance'>
			<h3>{name}</h3>
			<img src={img} alt={name}></img>
		</div>
	);
}

export default ContainerDance;
