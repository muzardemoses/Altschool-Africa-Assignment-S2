import React from "react";
import { useState } from "react";
import "../assets/styles/destination.css";
import { destinations } from "../assets/data/data.js";
import Image from "../components/image";

export const Destination = () => {
	const [planets] = useState(destinations.destinations);
	const [value, setValue] = useState(0);

	const { name, images, description, distance, travel } = planets[value];
	return (
		<section className="destination-main ">
			<h1 className="destination-h1">
				{" "}
				<span className="num-d"> 01</span>{" "}
				<span className="h1-text"> Pick your destination</span>
			</h1>

			<div className="top-both">
				<article className="img">
					<Image src={images.webp} alt={name} title={name} className='imgg' />
				</article>

				<article className="d-content">
					<span className="tabby">
						{planets.map((planet, index) => {
							return (
								<button
									key={index}
									onClick={() => setValue(index)}
									className={`tabby-b ${
										index === value && "tabby-b-active"
									}`}
								>
									{planet.name}
								</button>
							);
						})}
					</span>
					<h2 className="big-text">{name}</h2>
					<p className="small-text">{description}</p>
					<span className="line"></span>
					<div className="footer">
						<div className="footer-left">
							<p>Avg. Distance</p>
							<h3> {distance}</h3>
						</div>
						<div className="footer-right">
							<p>Est. Travel Time</p>
							<h3> {travel}</h3>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};
