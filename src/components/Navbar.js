import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilLeftMenuSlider from "@material-ui/core/Drawer";
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemIcon,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
} from "@material-ui/core";
import {
	Menu,
	Home,
	Apps,
	ContactMail,
	Book,
	ShowChart,
	AssignmentInd,
} from "@material-ui/icons";
import avatar from "../avatar3.jpg";
import Footer from "./Footer";

//CSS style
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: "#222",
		height: "100%",
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(13),
		height: theme.spacing(13),
	},
	listItem: {
		color: "yellow",
		"&:hover": {
			fill: "white",
		},
	},
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: "Home",
		listPath: "/",
	},
	{
		listIcon: <AssignmentInd />,
		listText: "Experience",
		listPath: "/cv",
	},
	{
		listIcon: <ShowChart />,
		listText: "Skill Graph",
		listPath: "/skills",
	},
	{
		listIcon: <Apps />,
		listText: "Projects",
		listPath: "/projects",
	},

	{
		listIcon: <Book />,
		listText: "Testimonials",
		listPath: "/testimonials",
	},
	{
		listIcon: <ContactMail />,
		listText: "Contact Me",
		listPath: "/contact",
	},
];
const Navbar = () => {
	const [state, setState] = useState({
		left: false,
	});

	const toggleSlider = (slider, open) => () =>
		setState({ ...state, [slider]: open });
	const classes = useStyles();

	const sideList = (slider) => (
		<Box className={classes.menuSliderContainer} component="div">
			<Avatar className={classes.avatar} src={avatar} alt="Ryan Barron" />
			<Divider />
			<List>
				{menuItems.map((isItem, key) => (
					<ListItem button key={key} component={Link} to={isItem.listPath}>
						<ListItemIcon className={classes.listItem}>
							{isItem.listIcon}
						</ListItemIcon>
						<ListItemText
							className={classes.listItem}
							primary={isItem.listText}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<>
			<Box component="nav">
				<AppBar position="fixed" style={{ background: "#222" }}>
					<Toolbar>
						<IconButton onClick={toggleSlider("left", true)}>
							<Menu style={{ color: "yellow" }} />
						</IconButton>
						<Typography variant="h4" style={{ color: "yellow" }}>
							Portfolio
						</Typography>

						<MobilLeftMenuSlider
							anchor="left"
							open={state.left}
							onClose={toggleSlider("left", false)}>
							{sideList("left")}
							<Footer />
						</MobilLeftMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};
export default Navbar;
