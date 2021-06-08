const express = require("express");
const request = require("request");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/", (req, res) => {
  const { origin, destination, weight, courier } = req.body;

  const options = {
    method: "POST",
    url: "https://api.rajaongkir.com/starter/cost",
    headers: {
      key: "e70c034bde344a36b883b48123c2ee72",
      "content-type": "application/x-www-form-urlencoded",
    },
    form: { origin, destination, weight, courier },
  };

  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
      res.json({ status: 500, message: "error" });
    }

    res.json({ status: 200, message: "read data success", data: body });
  });
});

app.get("/city", (req, res) => {
  var options = {
    method: "GET",
    url: "https://api.rajaongkir.com/starter/city",
    // qs: { id: "39", province: "5" },
    headers: { key: "e70c034bde344a36b883b48123c2ee72" },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    res.json({ data: body });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
