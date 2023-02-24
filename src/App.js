// library import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/product-details/ProductDetails";

// component import
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// style import
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetails />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
