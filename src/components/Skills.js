import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import img from "../images/HTML (1).jpeg";
import img1 from "../images/CSS.jpeg";
import img2 from "../images/BT.jpeg";
import img3 from "../images/JS.jpeg";
import img4 from "../images/python-logo.png";
import img5 from "../images/Mysql (2).jpeg";
import { Typography, LinearProgress, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 342,
    maxHeight: 500,
    backgroundColor: "#233",
    color: "white",
    margin: "1rem",
  },
});
const Skills = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container justify="center">
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="HTML"
            height="300"
            image={img}
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              HTML
            </Typography>
            <Typography gutterBottom variant="h7" component="h2">
              89%
            </Typography>
            <LinearProgress variant="determinate" value="89" name="80" />
            <Typography variant="body2" color="white" component="p">
              My Html skills are quite good as I started doing Html from my time
              in high school ,i have an above average understanding of all tags
              and the functionality
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="HTML"
            height="300"
            image={img1}
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              CSS
            </Typography>
            <Typography gutterBottom variant="h7" component="h2">
              86%
            </Typography>
            <LinearProgress variant="determinate" value="86" label="60%" />
            <Typography variant="body2" color="white" component="p">
              My css styling skills has developed over time as it was the
              language we were taught to use for styling both in high school and
              in the coding academy
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="HTML"
            height="300"
            image={img2}
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bootstrap
            </Typography>
            <Typography gutterBottom variant="h7" component="h2">
              74%
            </Typography>
            <LinearProgress variant="determinate" value="74" label="60%" />
            <Typography variant="body2" color="white" component="p">
              My bootstrap skills are average at best since it wasnt a language
              i used often in my web styling but if need be i have the knowledge
              to implement it
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container justify="center">
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="HTML"
            height="320"
            image={img3}
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              JAVASCRIPT
            </Typography>
            <Typography gutterBottom variant="h7" component="h2">
              81%
            </Typography>
            <LinearProgress variant="determinate" value="81" label="60%" />
            <Typography variant="body2" color="white" component="p">
              My knowledge of JavaScript is pretty good ,I have created a
              calculator using normal js and i learnt alot building it,as for Js
              react I have built 4 apps using it.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="HTML"
            height="300"
            image={img4}
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              PYTHON
            </Typography>
            <Typography gutterBottom variant="h7" component="h2">
              86%
            </Typography>
            <LinearProgress variant="determinate" value="86" label="60%" />
            <Typography variant="body2" color="white" component="p">
              Python is one my favorite languages , and every project i've done
              with python has produced great results
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="HTML"
            height="300"
            image={img5}
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              MySql
            </Typography>
            <Typography gutterBottom variant="h7" component="h2">
              91%
            </Typography>
            <LinearProgress variant="determinate" value="91" label="60%" />
            <Typography variant="body2" color="white" component="p">
              I have vast knowledge of Mysql databases ,im good at creating them
              and making them suit a certain criteria.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Skills;
