// library import
import { Link } from "react-router-dom";
// style import
import "./Navigation.css";
const Navigation = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/products">Products</Link>
		</nav>
	);
};

export default Navigation;
