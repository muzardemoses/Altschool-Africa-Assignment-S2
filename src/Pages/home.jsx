import React from "react";
import { ErrorBoundary, BuggyCounter } from "./error-boundary";
import "../Assets/styles/home.css";
import robotTwo from "../Assets/images/robot2.webp";
import talkingRobot from "../Assets/images/talking.png";

export const Home = () => {
	return (
		<div className="home">
			<h1 className="home-h1">Home</h1>
			<div className="home-two">
				<div className="about-robot">
					<div className="robot-text">
						<h2 className="about-robot-h2">About The Robot</h2>
						<p className="about-robot-p">
							A robot is a machine that can move and do certain tasks. Robots
							are controlled by a computer program or electronic circuitry. They
							may be directly controlled by humans. They may be designed to look
							like humans, in which case their behaviour may suggest
							intelligence or thought but they do not have feelings. Most robots
							do a specific job, and they do not always look like humans. They
							can come in many forms.
						</p>
					</div>
					<div>
						<img src={robotTwo} alt="Robot" className="robot-img" />
					</div>
				</div>
				<div className="error-boundary">
					<h3>click the button below to see the <span className="error">error boundary </span> in action</h3>
          <div className="warning">
            <img src={talkingRobot} alt="talking robot" className="talking-robot"/> 
            <p>Warning: the button will throw an error after 5 clicks</p>
          </div>
					<ErrorBoundary>
						<BuggyCounter />
					</ErrorBoundary>
				</div>
			</div>
		</div>
	);
};
