import React from "react";
import logo from "../icons/logo.svg";
import classes from "./Header.module.scss";
import { Typography } from "antd";

const { Title } = Typography;

const Header = () => {
	return (
		<div className={classes.header}>
			<div>
				<img src={logo} className={classes.logo} alt="Corona School Logo"></img>

				<Title
					level={2}
					style={{
						color: "white",
						fontWeight: "bold",
						margin: "0 0 0 12px",
					}}>
					Corona School
				</Title>
			</div>
		</div>
	);
};

export default Header;
