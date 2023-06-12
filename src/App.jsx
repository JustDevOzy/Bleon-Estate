import { useState } from "react"
import Navbar from "./Component/Navbar"
import "./Navbar.css"
import Home from "./Component/Home"
import "./Home.css"
import Project from "./Component/Project"
import "./Project.css"

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<div className="white-space"></div>
			<Project />
		</>
	)
}

export default App
