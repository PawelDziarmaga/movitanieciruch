function FitnesElements({ text, img, click }) {
	return (
		<div className='FitnessElements'>
			<div onClick={click} className='FitnessElements__box'>
				<img src={img} alt={text}></img>
			</div>
			<h3>{text}</h3>
		</div>
	);
}

export default FitnesElements;
