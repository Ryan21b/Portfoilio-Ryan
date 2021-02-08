import React from "react";
import { makeStyles } from "@material-ui/styles";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";

import GitHubIcon from "@material-ui/icons/GitHub";
import { LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    "& .MuiButtomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "yellow",
        fontSize: "1.8rem",
      },
      "&:click": {
        fill: "red",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: "0" }}
        icon={<Facebook />}
        a
        target="_blank"
        href="https://m.facebook.com/ryan.barron.35175"
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: "0" }}
        icon={<LinkedIn />}
        a
        target="blank"
        href="https://www.linkedin.com/in/ryan-barron-72b36a1b2/"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: "0" }}
        icon={<GitHubIcon />}
        a
        target="_blank"
        href="https://www.github.com/Ryan21b"
      />
    </BottomNavigation>
  );
};

export default Footer;
