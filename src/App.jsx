import { useState } from "react"
import Navbar from "./Component/Navbar"
import "./Navbar.css"
import Home from "./Component/Home"
import "./Home.css"
import Project from "./Component/Project"
import "./Project.css"
import Whatwedo from "./Component/section/Whatwedo"
import "./whatwedo.css"
import Divider from "./Component/Divider"
import "./divider.css"
import Myservice from "./Component/myservice"
import "./service.css"

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Divider />
			<Project />
			<Divider />
			<Whatwedo />
			<Divider />
			<Myservice />
		</>
	)
}

export default App
