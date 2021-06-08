import React, { useContext } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TelegramIcon from "@material-ui/icons/Telegram";
import AppsIcon from "@material-ui/icons/Apps";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Link from "../src/Link";
import { useRouter } from "next/router";
import { DarkContext } from "../context/DarkMode";

const useStyles = makeStyles((theme) => ({
  dark: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(18,18,18, 1)",
    height: "8.5vh",
  },
  light: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "linear-gradient(30deg, #236ca0 0%, #236FD5 97%)",
  },
}));

const styles = {
  root: {
    color: "#aaa",
    "&$selected": {
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
  selected: {},
};

function MyBottomNavigation(props) {
  const styling = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname.slice(1, 10));
  const { classes } = props;

  const context = useContext(DarkContext);
  const { theme } = context;

  const darkThemeClass =
    theme.palette.type === "dark" ? styling.dark : styling.light;

  const handleChange = (event, newValue) => {
    setValue(router.pathname.slice(1, 10));
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={darkThemeClass}
    >
      <BottomNavigationAction
        value=""
        classes={classes}
        icon={<HomeIcon />}
        component={Link}
        href="/"
      />
      <BottomNavigationAction
        value="about"
        classes={classes}
        icon={<AccountCircleIcon />}
        component={Link}
        href="/about"
      />
      <BottomNavigationAction
        value="portfolio"
        classes={classes}
        icon={<AppsIcon />}
        component={Link}
        href="/portfolio"
      />
      <BottomNavigationAction
        value="contact"
        classes={classes}
        icon={<TelegramIcon />}
        component={Link}
        href="/contact"
      />
    </BottomNavigation>
  );
}
export default withStyles(styles)(MyBottomNavigation);
