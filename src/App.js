import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleReview from "./components/SingleReview";

const App = () => {
	return (
		<div className={`App`}>
			<Header />
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/reviews/:review_id" element={<SingleReview />} />
			</Routes>
		</div>
	);
};

export default App;