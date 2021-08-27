function DacePageBoxElement({ data }) {
	return (
		<div className='dance-page__box__element'>
			{data.n1 && <p>{data.n1}</p>}
			{data.n2 && <p>{data.n2}</p>}
			{data.n3 && <p>{data.n3}</p>}
			{data.n4 && <p>{data.n4}</p>}
			{data.n5 && <p>{data.n5}</p>}
			{data.n6 && <p>{data.n6}</p>}
		</div>
	);
}

export default DacePageBoxElement;
