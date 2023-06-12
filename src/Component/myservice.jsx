import React from "react"
import estate6 from "../Image/estate 6.jpg"

const Myservice = () => {
	return (
		<section className="section-container container">
			<div className="section-img">
				<img className="my-img" src={estate6} />
			</div>

			<div className="section-text">
				<div className="section-header">
					<h2> Our Services</h2>
					<h1>We Make your Comfort our top Priority</h1>
				</div>
				<div className="section-description">
					<p>
						Lorem Ipsum has been the industry's standard dummy text
						ever snce the 1500s, when an unknown printer took a
						gallery.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Myservice
