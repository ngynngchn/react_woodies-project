// style import
import "./Title.css";
const Title = ({ title, page }) => {
	return (
		<div className="Title">
			<h3>{title}</h3>
			<div className="seperator"></div>
			<h2>{page}</h2>
		</div>
	);
};

export default Title;
