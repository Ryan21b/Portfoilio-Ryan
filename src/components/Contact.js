import React from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#222",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "black",
  },
}));

const InputField = withStyles({
  root: {
    "& lablel.Mui-focused": {
      color: "#222",
    },
    "& label": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "& Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Card>
              <form action="https://formspree.io/mayppjel" method="POST">
                <Typography
                  variant="h5"
                  style={{
                    color: "black",
                    textAlign: "center",

                    textTransform: "uppercase",
                  }}
                >
                  Contact me...
                </Typography>
                <InputField
                  fullWidth={true}
                  label="Name"
                  variant="standard"
                  name="sender_name"
                  margin="dense"
                  size="medium"
                  required
                />
                <InputField
                  fullWidth={true}
                  label="Email"
                  color="#222"
                  name="sender_email"
                  variant="standard"
                  margin="dense"
                  size="medium"
                  required
                />
                <InputField
                  fullWidth={true}
                  label="Company Name"
                  name="sender_company"
                  variant="standard"
                  margin="dense"
                  size="medium"
                  required
                />
                <InputField
                  fullWidth={true}
                  label="Message"
                  name="sender_message"
                  variant="standard"
                  margin="dense"
                  size="medium"
                  required
                />
                <Button
                  type="submit"
                  variant="outlined"
                  fullWidth={true}
                  endIcon={<SendIcon />}
                  className={classes.button}
                >
                  Contact Me....
                </Button>
              </form>
            </Card>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
