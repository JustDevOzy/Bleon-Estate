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
import FAQ from "./Component/FAQ"
import "./FAQ.css"
import Footer from "./Component/Footer"
import "./footer.css"

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
			<Divider />
			<FAQ />
			<Divider />
			<Footer />
		</>
	)
}

export default App
