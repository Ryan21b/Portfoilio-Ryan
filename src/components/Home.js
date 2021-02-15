import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Particles
				height="100vh"
				width="100vw"
				params={{
					particles: {
						number: {
							value: 100,
						},
						opacity: {
							value: 30,
						},
					},
				}}
			/>
		</>
	);
};
export default Home;
