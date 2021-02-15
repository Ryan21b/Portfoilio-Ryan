import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Grid } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Navbar from "./Navbar";
import img1 from "../J.jpeg";
import img3 from "../Ja.jpg";
import img4 from "../A.jpg";
import img5 from "../A1.jpg";
import img6 from "../B.jpg";
import img7 from "../Y.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 445,
		margin: "2rem",
		marginTop: "6rem",
	},
	root1: {
		maxWidth: 445,
		margin: "2rem",
		marginTop: "2rem",
	},
	media: {
		maxHeight: 400,
		paddingTop: "90%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function Testimonials() {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const [open1, setOpen1] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);
	const [open3, setOpen3] = React.useState(false);
	const [open4, setOpen4] = React.useState(false);
	const [open5, setOpen5] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleOpen1 = () => {
		setOpen1(true);
	};
	const handleOpen2 = () => {
		setOpen2(true);
	};
	const handleOpen3 = () => {
		setOpen3(true);
	};
	const handleOpen4 = () => {
		setOpen4(true);
	};
	const handleOpen5 = () => {
		setOpen5(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleClose1 = () => {
		setOpen1(false);
	};
	const handleClose2 = () => {
		setOpen2(false);
	};
	const handleClose3 = () => {
		setOpen3(false);
	};
	const handleClose4 = () => {
		setOpen4(false);
	};
	const handleClose5 = () => {
		setOpen5(false);
	};

	return (
		<>
			<Navbar />
			<Grid container justify="center">
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label="Testimonial" className={classes.avatar}>
								J
							</Avatar>
						}
						title="Testimonial"
						subheader="Jason Wandrag"
					/>
					<CardMedia className={classes.media} image={img1} title="Lecturer" />
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Testimonial for one of my students click below to read it:
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton onClick={handleOpen}>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label="Testimonial" className={classes.avatar}>
								J
							</Avatar>
						}
						title="Testimonial"
						subheader="Joshua Davids"
					/>
					<CardMedia
						className={classes.media}
						image={img3}
						title="Collegue/Friend"
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Testimonial for one of my friends click below to read it:
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton onClick={handleOpen1}>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label="Testimonial" className={classes.avatar}>
								A
							</Avatar>
						}
						title="Testimonial"
						subheader="Asaph Franks"
					/>
					<CardMedia
						className={classes.media}
						image={img4}
						title="Collegue/Friend"
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Testimonial for one of my friends click below to read it:
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton onClick={handleOpen2}>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
			<Grid container justify="center">
				<Card className={classes.root1}>
					<CardHeader
						avatar={
							<Avatar aria-label="Testimonial" className={classes.avatar}>
								A
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title="Testimonial"
						subheader=" Anam Majikijela"
					/>
					<CardMedia
						className={classes.media}
						image={img5}
						title="Collegue/Friend"
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Testimonial for one of my friends click below to read it:
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton onClick={handleOpen3}>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
				</Card>
				<Card className={classes.root1}>
					<CardHeader
						avatar={
							<Avatar aria-label="Testimonial" className={classes.avatar}>
								B
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title="Testimonial"
						subheader=" Brittney Bowers"
					/>
					<CardMedia
						className={classes.media}
						image={img6}
						title="Collegue/Friend"
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Testimonial for one of my friends click below to read it:
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton onClick={handleOpen4}>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
				</Card>
				<Card className={classes.root1}>
					<CardHeader
						avatar={
							<Avatar aria-label="Testimonial" className={classes.avatar}>
								Y
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title="Testimonial"
						subheader="Yonela Ntsangani"
					/>
					<CardMedia
						className={classes.media}
						image={img7}
						title="Collegue/Friend"
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Testimonial for one of my friends click below to read it:
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton onClick={handleOpen5}>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Jason wandrag testimonial</h2>
						<p id="transition-modal-description">
							Ryan has grown to be quite a developer, who takes the time to
							learn from both successes and failures, which has strengthened his
							debugging and logic skills. His creativity has helped him grow, as
							he enjoys to bring a fun twist with his work. Ryan has shown to
							work well both alone, and in a team.
						</p>
					</div>
				</Fade>
			</Modal>

			<div>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open1}
					onClose={handleClose1}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<Fade in={open1}>
						<div className={classes.paper}>
							<h2 id="transition-modal-title">Joshua Davids Testimonial:</h2>
							<p id="transition-modal-description">
								A hardworking individual, who takes pride in his work has proven
								to surprise his peers as he has a keen eye for design, and the
								ability to think logically and throughly. A skill which few
								individuals possess - he has gone above and beyond the scope of
								all his projects. Being a great communicator, he has shown to
								bring valuable information to the table. He is great time
								management as he finishes projects, makes time for side
								projects, and time to aid his peers. With Ryan there is a time
								for jokes and a time for laughter, and when he works the quality
								is exceptional, so hiring him will be an addition to your
								company because your functionality will reach possibilities you
								never thought would be possible.
							</p>
						</div>
					</Fade>
				</Modal>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open2}
					onClose={handleClose2}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<Fade in={open2}>
						<div className={classes.paper}>
							<h2 id="transition-modal-title">Asaph Franks testimonial:</h2>
							<p id="transition-modal-description">
								I would have to say that Ryan is someone who picks up really
								fast on work that he does. Whenever we need assistance Ryan is
								there - a student lecturer if you will. He is a very optimistic
								and friendly person. I highly recommend him as he will make an
								excellent addition to the team.
							</p>
						</div>
					</Fade>
				</Modal>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open3}
					onClose={handleClose3}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<Fade in={open3}>
						<div className={classes.paper}>
							<h2 id="transition-modal-title">Anam Majikijela testimonial:</h2>
							<p id="transition-modal-description">
								Ryan is one of the best upcoming developers, He is passionate
								and hard working(very funny too i might add), He is very
								creative and keeps everyone on their toes for his next designs.
								He would make any team a A-team!.
							</p>
						</div>
					</Fade>
				</Modal>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open4}
					onClose={handleClose4}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<Fade in={open4}>
						<div className={classes.paper}>
							<h2 id="transition-modal-title">Brittany Bowers testimonial:</h2>
							<p id="transition-modal-description">
								Ryan is an adventurous individual who can work on his own and in
								a team . He like challenges and has great communication skills .
								He has great values which influences his work in a positive
								manner . He is always willing to help and assist others when
								needed , therefore he will be an asset to any company .
							</p>
						</div>
					</Fade>
				</Modal>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open5}
					onClose={handleClose5}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}>
					<Fade in={open5}>
						<div className={classes.paper}>
							<h2 id="transition-modal-title">Yonela Ntsangani testimonial:</h2>
							<p id="transition-modal-description">
								Ryan is humble, charismatic and confident. His passion and
								dedication for his work is truly remarkable and encouraging. It
								would be a great honor to have him on board.
							</p>
						</div>
					</Fade>
				</Modal>
			</div>
		</>
	);
}
export default Testimonials;
