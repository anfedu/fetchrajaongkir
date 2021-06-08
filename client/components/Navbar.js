import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import Link from "../src/Link";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "relative",
    top: 0,
    width: "100%",
    boxShadow: "none",
  },
  toolbar: {
    width: "66%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0",
      width: "100%",
    },
  },
  title: {
    fontSize: 21,
    textDecoration: "none",
    color: "#eee",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  buttonLink: {
    textTransform: "none",
    fontSize: 17,
    fontWeight: 550,
    marginRight: theme.spacing(2),
    color: "#ccc",
    "&:hover": {
      background: "none",
      color: "#ddd",
    },
  },
  linkWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  buttonLinkActive: {
    color: "#fff",
    height: 36,
    "&:hover": {
      color: "#eee",
    },
  },
  iconLight: {
    color: "#ccc",
    cursor: "pointer",
    fontSize: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 21,
    },
    "&:hover": {
      color: "springgreen",
    },
    animation: `$mode 500ms`,
  },
  iconDark: {
    color: "#eee",
    cursor: "pointer",
    transform: "rotate(30deg)",
    fontSize: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 21,
    },
    "&:hover": {
      color: "yellow",
    },
    animation: `$mode 500ms`,
  },
  "@keyframes mode": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default function Navbar({ theme, toggleDarkTheme }) {
  const classes = useStyles();
  const router = useRouter();
  console.log(theme.palette.type, "iki theme");

  return (
    <AppBar
      position="static"
      className={classes.appbar}
      color={
        router.pathname === "/"
          ? "transparent"
          : theme.palette.type === "light"
          ? "primary"
          : "default"
      }
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          component={Link}
          href="/"
          naked
          variant="h6"
          className={classes.title}
        >
          <b>Ahmad Nuril Firdaus</b>
        </Typography>
        <Box>
          <span className={classes.linkWrapper}>
            <Button
              className={classes.buttonLink}
              activeClassName={classes.buttonLinkActive}
              component={Link}
              naked
              href="/"
            >
              Home
            </Button>
            <Button
              className={classes.buttonLink}
              activeClassName={classes.buttonLinkActive}
              component={Link}
              naked
              href="/tracking"
            >
              Tracking
            </Button>
          </span>
          <span>
            {theme.palette.type === "light" ? (
              <IconButton
                style={{ padding: "0 0", marginRight: 10 }}
                onClick={toggleDarkTheme}
              >
                <Brightness2Icon className={classes.iconDark} />
              </IconButton>
            ) : (
              <IconButton
                style={{ padding: "0 0", marginRight: 10 }}
                onClick={toggleDarkTheme}
              >
                <WbSunnyIcon className={classes.iconLight} />
              </IconButton>
            )}
          </span>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
