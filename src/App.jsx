import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/header";
import { Users, Home, Stores, PageNotFound, Pricing, Features } from "./Pages";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="users" element={<Users />} />
				<Route path="/stores" element={<Stores />}>
					<Route index path="features" element={<Features />} />
					<Route path="pricing" element={<Pricing />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<div className="author">
				<h5>
					Assignment by{" "}
					<a
						href=" https://www.altschoolafrica.com/ "
						target="_blank"
						className="author-name"
					>
						AltSchool Africa
					</a>
					. Coded by{" "}
					<a
						className="author-name"
						href=" https://www.linkedin.com/in/muzardemoses/ "
						target="_blank"
					>
						Moses Adebayo
					</a>
					.
				</h5>
			</div>
		</div>
	);
}

export default App;
