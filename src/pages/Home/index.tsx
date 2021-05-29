import React from "react";
import Navbar from "../../components/common/Navbar/index";
import Footer from "../../components/common/Footer";
import PageLayout from "../../components/common/Layout/page";
import CollectionIcon from "../../assets/images/icons/collection.svg";
import { Row, Col } from "antd";

const Homepage = () => (
	<div className="homepage">
		<Navbar />
		<PageLayout>
			<div className="home-layout-wrapper">
				<div className="intro">
					<p className="uppercase text-base">GET STARTED</p>
					<h1 className="text-5xl font-arvo">
						Information streamlined for you
					</h1>
				</div>
				<div className="mt-28 pb-12">
					<section>
						<h3 className="text-3xl mb-0">First Steps</h3>
						<p>
							Learn how newshive is a great tool for collation of Information
						</p>
						<div className="mt-16">
							<div className="info-card border border-black-border w-1/4 px-6 py-4">
								<img
									src={CollectionIcon}
									className="w-8 h-8"
									alt="collection icon"
								/>
								<div className="mt-12">
									<h3 className="text-2xl font-normal mb-1">News Collection</h3>
									<p className="">
										News compiled from multiple sources on a wide array of
										topics
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="mt-32">
						<h3 className="text-3xl mb-0">You have control</h3>
						<p>Choose what source you want to get Information from</p>
						<Row className="mt-16" gutter={24}>
							<Col lg={6}>
								<div className="info-card border border-black-border px-6 py-4">
									<img
										src={CollectionIcon}
										className="w-8 h-8"
										alt="collection icon"
									/>
									<div className="mt-12">
										<h3 className="text-2xl font-normal mb-1">
											News Collection
										</h3>
										<p className="">
											News compiled from multiple sources on a wide array of
											topics
										</p>
									</div>
								</div>
							</Col>
							<Col lg={6}>
								<div className="info-card border border-black-border px-6 py-4">
									<img
										src={CollectionIcon}
										className="w-8 h-8"
										alt="collection icon"
									/>
									<div className="mt-12">
										<h3 className="text-2xl font-normal mb-1">
											News Collection
										</h3>
										<p className="">
											News compiled from multiple sources on a wide array of
											topics
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</section>
					<section className="mt-32">
						<h3 className="text-3xl mb-0">You have control</h3>
						<p>Choose what source you want to get Information from</p>
						<Row className="mt-16" gutter={24}>
							<Col lg={6}>
								<div className="info-card border border-black-border px-6 py-4">
									<img
										src={CollectionIcon}
										className="w-8 h-8"
										alt="collection icon"
									/>
									<div className="mt-12">
										<h3 className="text-2xl font-normal mb-1">
											News Collection
										</h3>
										<p className="">
											News compiled from multiple sources on a wide array of
											topics
										</p>
									</div>
								</div>
							</Col>
							<Col lg={6}>
								<div className="info-card border border-black-border px-6 py-4">
									<img
										src={CollectionIcon}
										className="w-8 h-8"
										alt="collection icon"
									/>
									<div className="mt-12">
										<h3 className="text-2xl font-normal mb-1">
											News Collection
										</h3>
										<p className="">
											News compiled from multiple sources on a wide array of
											topics
										</p>
									</div>
								</div>
							</Col>
							<Col lg={6}>
								<div className="info-card border border-black-border  px-6 py-4">
									<img
										src={CollectionIcon}
										className="w-8 h-8"
										alt="collection icon"
									/>
									<div className="mt-12">
										<h3 className="text-2xl font-normal mb-1">
											News Collection
										</h3>
										<p className="">
											News compiled from multiple sources on a wide array of
											topics
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</section>
				</div>
			</div>
		</PageLayout>
		<Footer />
	</div>
);

export default Homepage;
