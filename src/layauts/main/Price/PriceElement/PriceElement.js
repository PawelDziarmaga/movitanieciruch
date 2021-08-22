import "./PriceElement.css";

function PriceElement({ price, img, name, enter }) {
	return (
		<div className='PriceElement'>
			<img src={img} alt={name}></img>
			<h3>{name}</h3>
			<h2>{price}</h2>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry
			</p>
			<p>Liczba wejść: {enter}</p>
		</div>
	);
}

export default PriceElement;
