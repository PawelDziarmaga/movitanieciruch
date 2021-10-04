function SingleItem({ NuberOfItem, ImgItem }) {
	return (
		<div className={`news__slide ${NuberOfItem} `}>
			<img src={ImgItem} alt={NuberOfItem}></img>
		</div>
	);
}

export default SingleItem;
