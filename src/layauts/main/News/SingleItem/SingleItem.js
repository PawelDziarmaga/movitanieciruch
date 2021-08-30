function SingleItem({ NuberOfItem, ImgItem, NewsTitle }) {
	return (
		<div className={`news__slide ${NuberOfItem} `}>
			<h1>{NewsTitle}</h1>
			<img src={ImgItem} alt={NuberOfItem}></img>
		</div>
	);
}

export default SingleItem;
