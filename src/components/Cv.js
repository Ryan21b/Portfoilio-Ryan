import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import pdf from "./Cv.pdf";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "",
		marginTop: "3rem",
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "0 auto",
		"&:before": {
			content: '""',
			position: "absolute",
			height: "100%",
			border: "1px solid #222",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: '""',
			display: "table",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timeLineItem: {
		padding: "1rem",
		borderBottom: "2px solid #222",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% -5px)",
			borderStyle: "solid",
			borderColor: "#222 #222 transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "#222",
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "0.625rem",
				borderColor: "transparent transparent #222 #222",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		background: "#222",
		color: "white",
		lineHeight: 1,
		textDecoration: "none",
		padding: "0.5 rem 0 1rem",
		"&:before": {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	heading: {
		color: "white",
		padding: "3rem 0",
		textTransform: "uppercase",
	},
	subHeading: {
		color: "white",
		padding: "0",
		textTransform: "uppercase",
	},
	timeLineYear1: {
		textAlign: "center",
		maxWidth: "13.375rem",
		margin: "",
		fontSize: "1.4rem",
		background: "#222",
		color: "white",
		lineHeight: 1,
		padding: "0.5 rem 0 1rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
}));

const Cv = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar />
			<Box component="header" className={classes.mainContainer}>
				<Typography variant="h4" align="center" className={classes.heading}>
					Work History
				</Typography>
				<Box component="div" className={classes.timeLine}>
					<a href={pdf} download>
						<Typography
							variant="h3"
							className={`${classes.timeLineYear1} ${classes.timeLineItem}`}>
							{<GetAppIcon />}Download CV
						</Typography>
					</a>
					<Box component="div" className={classes.timeLine}>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2019
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								Merchandiser
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Pack and Stack
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "white" }}>
								25 May - 31 September I worked for PnS as a Merchandiser at Pick
								n Pay for 6 Months,this was too gain work experince and learn
								about workplace dynamics.My basic roles was Stock rotation and
								admin
							</Typography>
						</Box>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2020
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								Trainee Sales partner (Refferal Agent)
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Rawson Properties
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "white" }}>
								5 December - 21 February 2020 I worked at Rawson Properties as a
								Trainee Sales partner (Refferal Agent) for the aunction section
								,my roles where calling potential clients , meeting with
								potential clients,and Finding potential clients.
							</Typography>
						</Box>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2021
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								Web Developer (Intern)
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Masterparts
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "white" }}>
								1 October 2020 - 5 February I worked as an intern developer at
								Masterparts Epping for 5 months doing Web design and Bug fixing
								Other things I learned during the internship was : Seo Marketing
								, Social Media Marketing, SDLC (System Development Life Cycle
								framework),Google Analytics
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box component="header" className={classes.mainContainer}>
					<Typography variant="h4" align="center" className={classes.heading}>
						Educational History
					</Typography>
					<Box component="div" className={classes.timeLine}>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2016
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								High school student
							</Typography>
							<Typography
								variant="h6"
								align="center"
								style={{ color: "white" }}>
								Symphony High School
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "white" }}>
								In 2016 I was in my final year of high school ,this was also
								when i was introduced to coding by doing the subject C.A.T
								(Computer Applications Technology) by creating websites using
								basic HTML and Css which lead to my love of coding and my
								passion for the tech industry.
							</Typography>
						</Box>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2017
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								Student
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Northlink College
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "white" }}>
								I spent 2 years studying Business Management at Northlink
								College ,where I was taught Entreprenuership,Management of a
								business,Accounting,Sales and Public Relations.
							</Typography>
						</Box>

						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2020
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								Student
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								LifeChoices Academy
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "white" }}>
								I am currently studying coding at Life Choices academy
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box component="header" className={classes.mainContainer}>
					<Typography variant="h4" align="center" className={classes.heading}>
						Personal Details
					</Typography>
					<Box component="div" className={classes.timeLine}>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							Bio
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								Bio:
							</Typography>
							<Typography
								variant="h6"
								align="center"
								style={{ color: "white" }}>
								Full Name: Ryan Michael Barron
							</Typography>
							<Typography
								variant="h6"
								align="center"
								style={{ color: "white" }}>
								Age :21
							</Typography>
							<Typography
								variant="h6"
								align="center"
								style={{ color: "white" }}>
								Residence : 44 Vygie Road Bishop Lavis
							</Typography>
							<Typography
								variant="h6"
								align="center"
								style={{ color: "white" }}>
								Aspirations:
							</Typography>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ color: "white" }}>
								I am a passionate and driven young man ,I learn fast and i am
								capable of completing most tasks with great urgency,I do
								everything with the utmost care and attention to detail (Its
								like putting a part of myself in all i do),im willing to go
								above and beyond to achieve a goal and will make myself an asset
								in all i do.
							</Typography>
						</Box>
						<Typography
							variant="h2"
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							Hobbies
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography
								variant="h5"
								align="center"
								className={classes.subHeading}>
								My hobbies include:
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Rugby
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Karate
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Listening to music
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Playing Video games
							</Typography>
							<Typography
								variant="body1"
								align="center"
								style={{ color: "white" }}>
								Growing My Coding Skills
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Cv;
