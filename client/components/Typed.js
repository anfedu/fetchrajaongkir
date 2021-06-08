import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#eee",
    fontSize: 35,
    fontWeight: 600,
    position: "absolute",
    width: "100%",
    textAlign: "center",
    top: "41vh",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
      padding: "0 20px",
    },
  },
}));

export default function index() {
  const classes = useStyles();

  const displayTest = [
    "Hello World :) ^1000",
    "My name is Nuril ^1000",
    "Welcome to my digital home ^1000",
  ];
  return (
    <div className={classes.root}>
      <Typed
        strings={displayTest}
        typeSpeed={100}
        fadeOut
        cursorChar={"_"}
        loop
      />
    </div>
  );
}
