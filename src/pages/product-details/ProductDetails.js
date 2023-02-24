import Title from "../../components/title/Title";
// style import
import "./ProductDetails.css";
// library import
import { useParams } from "react-router-dom";

// data import
import { data } from "../../data";

const ProductDetails = () => {
	const params = useParams();
	const product = data.find((element) => element.id === +params.id);

	return (
		<div className="ProductDetails">
			<Title title={product.title} page="PRODUCT" />
			<section>
				<img src={product.img} alt={product.title} />
				<p>{product.description}</p>
			</section>
		</div>
	);
};

export default ProductDetails;
