import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
	Box,
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import back1 from "../backC.png";
import back2 from "../backG.png";
import back3 from "../backI.png";
import back4 from "../up.png";

const useStyles = makeStyles({
	mainContainer: {
		height: "100%",
		marginTop: "3rem",
	},
	cardContainer: {
		maxWidth: "345",
		margin: "1rem ",
		background: "#222",
		marginTop: "3rem",
	},
	cardContent: {
		color: "white",
	},
});

const Projects = () => {
	const classes = useStyles();
	return (
		<>
			<Box component="div" className={classes.mainContainer}>
				<Navbar />
				<Grid container justify="center">
					{/*Project1*/}
					<Grid item xs={10} sm={6} md={0}>
						<Card className={classes.cardContainer}>
							<CardMedia
								component="img"
								alt="project1"
								height="340"
								image={back2}
							/>
							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h5">
									GitHub Finder
								</Typography>
								<Typography variant="body2" color="#fff" component="p">
									The github finder app is used to search for users on github
									and display their details and repositories
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									color="primary"
									a
									target="blnk"
									href="https://github-finder-ryan21.netlify.app/">
									Open
								</Button>
								<Button
									size="small"
									color="primary"
									a
									target="blnk"
									href="https://www.github.com/Ryan21b/github-finder">
									View Code
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<Grid container justify="center">
					<Grid item xs={10} sm={6} md={0}>
						<Card className={classes.cardContainer}>
							<CardMedia
								component="img"
								alt="project1"
								height="340"
								image={back1}
							/>
							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h5">
									Contact Keeper
								</Typography>
								<Typography variant="body2" color="#fff" component="p">
									The conatct keeper is a online address book that stores
									conatcts in a database
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									color="primary"
									a
									target="blnk"
									href="https://contactkeeperr21.netlify.app/">
									Open
								</Button>
								<Button
									size="small"
									color="primary"
									a
									target="blnk"
									href="https://www.github.com/Ryan21b/Contact-Keeper">
									View Code
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid container justify="center">
						<Grid item xs={10} sm={6} md={0}>
							<Card className={classes.cardContainer}>
								<CardMedia
									component="img"
									alt="project1"
									height="340"
									image={back3}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5">
										IT-Logger
									</Typography>
									<Typography variant="body2" color="#fff" component="p">
										The It logger is a logging system to keep track of the work
										a technician did for the day
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="backI.png">
										Open
									</Button>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="https://www.github.com/Ryan21b/IT-LOGGER">
										View Code
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
					<Grid container justify="center">
						<Grid item xs={10} sm={6} md={0}>
							<Card className={classes.cardContainer}>
								<CardMedia
									component="img"
									alt="project1"
									height="340"
									image={back4}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5">
										Upswipes
									</Typography>
									<Typography variant="body2" color="#fff" component="p">
										A dynamic image upload and view react app styled with
										material ui
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="https://upswipes.herokuapp.com/">
										Open
									</Button>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="https://www.github.com/Ryan21b/Intergrated-social-media-site">
										View Code
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Projects;
