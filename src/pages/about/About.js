// style import
import "./About.css";
//image import
import img from "../../images/About.png";
// component import
import Title from "../../components/title/Title";

const About = () => {
	return (
		<div className="About">
			<Title title="Who we are" page="ABOUT US" />
			<main>
				<img src={img} alt="wooden bowls" />
				<section>
					<h2>
						WOODIES <span>is the</span> home of modern wooden furniture
					</h2>
					<h3>
						the answer to your need for furniture with shapes, sizes and colors.
					</h3>
				</section>
			</main>
		</div>
	);
};

export default About;
