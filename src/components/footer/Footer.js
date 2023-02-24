// image/logo import
import logo from "../../images/Logo.png";
import sideImg from "../../images/Footer.png";
// style import
import "./Footer.css";
const Footer = () => {
	return (
		<footer className="Footer">
			<article>
				<img src={logo} alt="logo" />
				<p>(012) 8967453</p>
				<p>woodies@gmail.com </p>
				<p>Jakarta, Indonesia</p>
			</article>
			<img src={sideImg} alt="chair" />

			<p className="logo">© 2020 WOODIES</p>
		</footer>
	);
};

export default Footer;
