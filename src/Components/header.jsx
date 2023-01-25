import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../Assets/images/cyborg-header.png";
import "../Assets/styles/header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header-img">
				<Link to="/">
					<img src={headerImage} alt="Borg Header" className="header-logo" />
				</Link>
			</div>
			<div className="header-links">
				<Link
					to="/"
				>
          Home
				</Link>
				<Link
					to="/users" 
         
				>
					Users
				</Link>
				<Link
					to="/stores/features"
				>
					Stores
				</Link>
			</div>
		</div>
	);
};

export default Header;
