import React from "react";
import "./style.css";

function Nav() {

	return (
		<nav className="nav">
		<a href="/" className="site-title">Eric Wargin</a>
			<ul>
			<li className="active">
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/portfolio">Portfolio</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
			<li>
				<a href="/resume">Resume</a>
			</li>
			</ul>
		</nav>
	);
}
 

export default Nav;
