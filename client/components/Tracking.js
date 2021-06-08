import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Card,
  Avatar,
  Grid,
  Button,
  Grow,
  Slide,
  TextField,
  MenuItem,
} from "@material-ui/core";
import Link from "../src/Link";
import useWindowPosition from "../src/useWindowPosition";

export default function Resume() {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({});
  const [result, setResult] = React.useState({});

  const url = "http://localhost:5000";

  const postConst = async () => {
    setLoading(true);

    const config = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        // key: "e70c034bde344a36b883b48123c2ee72",
        "Content-Type": "application/json",
      },
    };

    await fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          const metadata = JSON.parse(data.data).rajaongkir.results;
          const costs = metadata[0]?.costs[0];
          setResult(costs);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const [city, setCity] = React.useState([]);
  const fetchCity = async () => {
    await fetch(`${url}/city`)
      .then((res) => res.json())
      .then((data) => {
        const metadata = JSON.parse(data.data).rajaongkir.results;
        setCity(metadata);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchCity();
  }, []);

  const onSubmit = () => {
    postConst();
  };

  return (
    <Card component="header" id="header" className={classes.mainContainer}>
      <Grid container className={classes.boxContainer} spacing={0}>
        <Grid item lg={6} md={6} sm={12} xs={12} align="center">
          <Card className={classes.card}>
            <TextField
              select
              fullWidth
              margin="normal"
              label="Origin"
              className={classes.textfield}
              onChange={(e) => setValues({ ...values, origin: e.target.value })}
            >
              {city.map((item, key) => (
                <MenuItem key={key} value={item.city_id}>
                  {item.city_name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              fullWidth
              margin="normal"
              label="Destination"
              className={classes.textfield}
              onChange={(e) =>
                setValues({ ...values, destination: e.target.value })
              }
            >
              {city.map((item, key) => (
                <MenuItem key={key} value={item.city_id}>
                  {item.city_name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              type="number"
              margin="normal"
              label="Weight"
              className={classes.textfield}
              onChange={(e) =>
                setValues({ ...values, weight: parseInt(e.target.value) })
              }
            />
            <TextField
              select
              fullWidth
              margin="normal"
              label="Courier"
              className={classes.textfield}
              onChange={(e) =>
                setValues({ ...values, courier: e.target.value })
              }
            >
              <MenuItem value="tiki">TIKI</MenuItem>
              <MenuItem value="jne">JNE</MenuItem>
              <MenuItem value="pos">POS</MenuItem>
            </TextField>
            <Button
              fullWidth
              variant="contained"
              onClick={onSubmit}
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </Card>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} align="justify">
          {loading ? (
            "Loading ..."
          ) : (
            <>
              <h2>Service: {result?.service}</h2>
              <h2>Description: {result?.description}</h2>
              <ul>
                {result?.cost?.map((item, key) => (
                  <li key={key}>
                    <h2>harga: {item.value}</h2>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}

const useStyles = makeStyles((themes) => ({
  button: {
    marginTop: 20,
  },
  card: {
    width: 350,
    padding: 10,
  },
  boxContainer: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 30px",
  },
  mainContainer: {
    borderRadius: 0,
    paddingBottom: 20,
    // overflowY: "auto",
    animation: `$mode 500ms`,
    maxHeight: "85vh",
    boxShadow: "none",
    opacity: 0.9,
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "none",
      webkitBoxShadow: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#bbb",
      outline: "none",
      borderRadius: 30,
    },
    [themes.breakpoints.down("md")]: {
      minHeight: "100vh",
    },
    [themes.breakpoints.down("xs")]: {
      paddingTop: "35%",
      overflowY: "auto",
    },
  },
  textfield: {
    textAlign: "justify",
  },
}));
