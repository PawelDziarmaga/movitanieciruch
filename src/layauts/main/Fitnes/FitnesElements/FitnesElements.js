import "./FitnesElements.css";

function FitnesElements({ text, img }) {
	return (
		<div className='FitnesElements'>
			<div className='FitnesElements__box'>
				<img src={img} alt={text}></img>
			</div>
			<h3>{text}</h3>
		</div>
	);
}

export default FitnesElements;
