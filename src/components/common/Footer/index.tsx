import React from "react";
import Logo from "../../../assets/images/static/logo-4.png";

const Footer = () => {
	return (
		<footer className="Footer px-32 border-t border-black-border py-6">
			<div className="flex items-center">
				<img src={Logo} className="w-6 h-6" alt="newshive logo" />
				<span className="font-arvo font-semibold inline-block ml-2">
					NEWS HIVE
				</span>
			</div>
		</footer>
	);
};

export default Footer;
