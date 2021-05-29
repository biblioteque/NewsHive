import React from "react";
export interface Props {}

const PageLayout = ({ children }: any) => {
	return <div className="container mx-auto px-32">{children}</div>;
};

export default PageLayout;
