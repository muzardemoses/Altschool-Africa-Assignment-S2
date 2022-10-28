import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Assets/styles/stores.css";

export const Stores = () => {
	return (
		<div className="stores">
			<header className="stores-header">
				<nav>
					<Link to="features">Features</Link>
					<Link to="pricing">Pricing</Link>
				</nav>
				
			</header>
			<main>
				<div className="video">
					<iframe
						width="600"
						height="300px"
						src="https://www.youtube.com/embed/b1kxnVPC0ao"
						title="Calculator created with React By MuzardeMoses"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
        <Outlet />
			</main>
		</div>
	);
};
