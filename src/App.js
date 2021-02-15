import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/Home";
import Cv from "./components/Cv";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<CssBaseline />
			<Route exact path="/" component={Home} />{" "}
			<Route path="/cv" component={Cv} />{" "}
			<Route path="/projects" component={Projects} />{" "}
			<Route path="/skills" component={Skills} />{" "}
			<Route path="/testimonials" component={Testimonials} />{" "}
			<Route path="/contact" component={Contact} />{" "}
		</>
	);
}

export default App;
