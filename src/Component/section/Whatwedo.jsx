import React from "react"
import Findcards from "./Findcards"

const Whatwedo = () => {
	return (
		<section className="finds contain">
			<h1>What can we help you find?</h1>
			<div className="finds--cards">
				<Findcards />
				<Findcards />
				<Findcards />
			</div>
		</section>
	)
}

export default Whatwedo
