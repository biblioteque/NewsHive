import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { ReactComponent as Art2 } from "../../assets/images/svgs/j-art-new.svg";
import Logo from "../../assets/images/static/logo-4.png";

interface UserSigninProp {
	email: string;
	password: string;
}

const Login = () => {
	const handleUserSignin = (values: UserSigninProp) => {};
	return (
		<div className="login-container h-screen w-full">
			<Row className="w-full h-full">
				<Col lg={12}>
					<div className="backdrop h-full relative p-12">
						<div className="glass-overlay w-full h-full bg-white opacity-5 rounded-lg"></div>
						{/* <img src={Art2} className="w-1/2 absolute" alt="" /> */}
						<Art2 />
					</div>
				</Col>
				<Col lg={12} className="h-full">
					<Row>
						<Col lg={20}>
							<div className="py-4 px-6 flex items-center">
								<img src={Logo} className="w-8" alt="" />
								<span className="font-arvo font-semibold inline-block">
									NEWS HIVE
								</span>
							</div>
						</Col>
					</Row>

					<Row className="items-center justify-center h-4/5">
						<Col lg={20}>
							<div className="px-12 h-full flex flex-col">
								<h1 className="text-4xl mb-0 font-semibold">Welcome,</h1>
								<p className="text-base">
									Fill in your details to login to your account
								</p>
								<div className="form-wrapper mt-12 w-full">
									<Form
										layout="vertical"
										onFinish={handleUserSignin}
										hideRequiredMark
									>
										<Form.Item label="Email Address">
											<Input className="default-input" />
										</Form.Item>
										<Form.Item label="Password">
											<Input className="default-input" />
										</Form.Item>
										<Form.Item>
											<Button
												className="bg-primary-brand h-12 rounded-none"
												block
											>
												Sign In
											</Button>
										</Form.Item>
									</Form>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Login;
