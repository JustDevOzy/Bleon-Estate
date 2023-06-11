import React from "react"
import logo from "../Image/logo.png"

const Navbar = () => {
	return (
		<div className="main-nav">
			<div nav-logo>
				<img src={logo} width="120" />
			</div>
			<div className="nav--btn">
				<ul className="nav">
					<li>
						<a href="#" className="nav-link">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							About us
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							Features
						</a>
					</li>
					<li>
						<a href="#" className="nav-link">
							Contact
						</a>
					</li>
				</ul>
				<div className="button">
					<button className="btns">Sign up</button>
					<button className="btns">Sign in</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
