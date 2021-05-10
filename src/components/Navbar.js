import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						Admirable
					</NavLink>
					<ul>
						<li>
							<NavLink exact to="/" className="nav-link">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/about" className="nav-link">
								About
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/services" className="nav-link">
								Services
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/projects" className="nav-link">
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/contact" className="nav-link">
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
