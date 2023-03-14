import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
	return (
		<div className={`App`}>
			<Header />
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/reviews" element={<Reviews />} />
			</Routes>
		</div>
	);
};

export default App;
