function SingleItem({ NuberOfItem, ImgItem, NewsTitle }) {
	return (
		<div className={`news__slide ${NuberOfItem} `}>
			<h3>{NewsTitle}</h3>
			<img src={ImgItem} alt={NuberOfItem}></img>
		</div>
	);
}

export default SingleItem;
