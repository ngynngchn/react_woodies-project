// image import
import sideImg from "../../images/Home.png";
// style import
import "./Home.css";
const Home = () => {
	return (
		<div className="Home">
			<main>
				<h3>
					Are you looking for <span>woodden furniture</span> for your place?
				</h3>
				<h2>This is the Right Place</h2>
				<button>Explore Categories</button>
			</main>
			<aside>
				<img src={sideImg} alt="sidetable" />
			</aside>
		</div>
	);
};

export default Home;
