import "./WeddingElements.css";

function WeddingElements({ img, text }) {
	return (
		<div className='WeddingElements'>
			<div className='WeddingElements__container'>
				<img src={img} alt={text}></img>
			</div>
			<h3>{text}</h3>
		</div>
	);
}

export default WeddingElements;
