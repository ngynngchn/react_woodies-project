// image import
import logo from "../../images/Logo.png";
// component import
import Navigation from "../navigation/Navigation.js";
// style import
import "./Header.css";

const Header = () => {
	return (
		<header>
			<img src={logo} alt="" />
			<Navigation />
		</header>
	);
};

export default Header;
