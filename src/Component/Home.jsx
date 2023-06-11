import React from "react"
import estate from "../Image/estate 1.jpg"
import estate2 from "../Image/estate 2.webp"

const Home = () => {
	return (
		<div className="hero container">
			<div className="search-title">
				<h1> Search for </h1>
				<h1>Homes in your</h1>
				<h1>Neighborhood</h1>
				<p>
					Lorem ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a gallery
				</p>
				<div className="button2">
					<button className="btns-2">Sign up</button>
					<button className="btns-2">Sign in</button>
				</div>
			</div>

			<div className="img-container">
				<img className="search-img" src={estate} />
				<img className="search-img2" src={estate2} />
			</div>
		</div>
	)
}

export default Home
