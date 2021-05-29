import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Logo from "../../../assets/images/static/logo-4.png";

interface NavbarLinkProps {
	url: string;
	name: string;
}

const Navbar = () => {
	const Links: NavbarLinkProps[] = [
		{ url: "/", name: "Home" },
		{ url: "/sources", name: "Sources" },
		{
			url: "/headlines",
			name: "Headlines",
		},
		{
			url: "/signin",
			name: "Login",
		},
	];

	const displayNavList = () => {
		return Links.map((link: NavbarLinkProps) => {
			if (link.url === window.location.pathname) {
				return (
					<li className="nav-item nav-item-active">
						<Link
							to={`${link.url}`}
							className="nav-link px-6 text-base inline-block py-4  text-black hover:font-bold hover:border-bottom hover:b-2 border-black hover:text-black "
						>
							{link.name}
						</Link>
					</li>
				);
			}

			return (
				<li className="nav-item">
					<Link
						to={`${link.url}`}
						className="nav-link px-6 text-base inline-block py-4  text-black hover:font-bold hover:border-bottom border-black hover:text-black "
					>
						{link.name}
					</Link>
				</li>
			);
		});
	};

	return (
		<div className="navbar container mx-auto px-32 flex items-center justify-between h-14">
			<div className="logo flex items-center flex-none">
				<img src={Logo} className="w-6 h-6" alt="" />
				<span className="font-arvo font-semibold inline-block ml-2">
					NEWS HIVE
				</span>
			</div>
			<div className="menu flex w-full">
				<ul className="flex mx-auto mb-0">{displayNavList()}</ul>

				<div className="flex items-center">
					<Button className="py-4 h-12">Get Started</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
