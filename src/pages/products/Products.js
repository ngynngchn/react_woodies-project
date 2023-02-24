// component import
import Product from "../../components/product/Product";
import Title from "../../components/title/Title";

// data import
import { data } from "../../data";

// style import
import "./Products.css";

const Products = () => {
	return (
		<main className="Products">
			<Title title="What we have" page="PRODUCTS" />

			<article className="product-view">
				{data.map((product) => {
					return <Product {...product} />;
				})}
			</article>
		</main>
	);
};

export default Products;
