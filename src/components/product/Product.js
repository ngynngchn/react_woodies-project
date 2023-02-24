// import style.css
import "./Product.css";
// import library
import { Link } from "react-router-dom";

const Product = ({ title, img, id }) => {
	return (
		<section className="Product" style={{ backgroundImage: `url(${img})` }}>
			<h3>{title}</h3>
			<Link className="button" to={`/products/${id}`}>
				Shop Now
			</Link>
		</section>
	);
};

export default Product;
