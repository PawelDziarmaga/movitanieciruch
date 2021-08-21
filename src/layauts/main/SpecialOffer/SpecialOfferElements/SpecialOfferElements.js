import "./SpecialOfferElements.css";

function SpecialOfferElements({ text, img }) {
	return (
		<div className='SpecialOfferElements'>
			<div className='SpecialOfferElements__box'>
				<img src={img} alt={text}></img>
			</div>
			<h3>{text}</h3>
		</div>
	);
}

export default SpecialOfferElements;
