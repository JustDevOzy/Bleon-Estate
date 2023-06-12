import React from "react"
import PRcards from "./PRcards"
import estate3 from "../Image/estate 3.jpg"
import estate4 from "../Image/estate 4.jpg"
import estate5 from "../Image/estate 5.jpg"

const Project = () => {
	return (
		<section className="project-body contain">
			<div className="project-title">
				<h2> Popular</h2>
				<h1>Our Popular Residence </h1>
			</div>
			<div className="projects--cards">
				<PRcards img={estate3} />
				<PRcards img={estate4} />
				<PRcards img={estate5} />
			</div>
		</section>
	)
}

export default Project
