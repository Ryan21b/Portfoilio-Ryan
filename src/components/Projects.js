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
import back5 from "../react1.png";
import back6 from "../code.png";
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
					<Grid container justify="center">
						<Grid item xs={10} sm={6} md={0}>
							<Card className={classes.cardContainer}>
								<CardMedia
									component="img"
									alt="project1"
									height="340"
									image={back5}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5">
										Reaction Timer
									</Typography>
									<Typography variant="body2" color="#fff" component="p">
										Test your reaction time by clicking on the shapes , created
										using javascript
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="https://ryan21b.github.io/JS-reaction-test/">
										Open
									</Button>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="https://www.github.com/Ryan21b/JS-reaction-test">
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
									image={back6}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5">
										Code Runner
									</Typography>
									<Typography variant="body2" color="#fff" component="p">
										Write code and run it using code runner , it can run html
										css and javascript and display code outputs, built with
										html, css , jquery and javascript
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="https://ryan21b.github.io/code-runner/">
										Open
									</Button>
									<Button
										size="small"
										color="primary"
										a
										target="blnk"
										href="https://www.github.com/Ryan21b/code-runner">
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
