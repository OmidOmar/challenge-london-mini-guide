const express = require("express");
const { env } = require("process");

const stratford = require("./data/Stratford.json");
const Heathrow = require("./data/Heathrow.json");
const Harrow = require("./data/Harrow.json");

const cities = { stratford: stratford, Heathrow: Heathrow, Harrow: Harrow };

const hospitals = {
  stratford: stratford.hospitals,
  Heathrow: Heathrow.hospitals,
  Harrow: Harrow.hospitals,
};

const colleges = {
  stratford: stratford.colleges,
  Heathrow: Heathrow.colleges,
  Harrow: Harrow.colleges,
};

const pharmacies = {
  stratford: stratford.pharmacies,
  Heathrow: Heathrow.pharmacies,
  Harrow: Harrow.pharmacies,
};

const doctors = {
  stratford: stratford.doctors,
  Heathrow: Heathrow.doctors,
  Harrow: Harrow.doctors,
};

const app = express();

app.get("/", (req, res) => {
  res.send("<H1>Hello World!</H1>");
});

app.get("/hospitals", (req, res) => {
  res.json(hospitals);
});

app.get("/colleges", (req, res) => {
  res.json(colleges);
});

app.get("/pharmacies", (req, res) => {
  res.json(pharmacies);
});

app.get("/doctors", (req, res) => {
  res.json(pharmacies);
});

app.get("/:city/hospitals", (req, res) => {
  let output;
  const city = req.params.city;
  city === "stratford"
    ? (output = hospitals.stratford)
    : city === "heathrow"
    ? (output = hospitals.Heathrow)
    : city === "harrow"
    ? (output = hospitals.Harrow)
    : "404 Page Not Found";

  res.json(output);
});

app.get("/:city/doctors", (req, res) => {
  let output;
  const city = req.params.city;
  city === "stratford"
    ? (output = doctors.stratford)
    : city === "heathrow"
    ? (output = doctors.Heathrow)
    : city === "harrow"
    ? (output = doctors.Harrow)
    : "404 Page Not Found";

  res.json(output);
});

app.get("/:city/colleges", (req, res) => {
  let output;
  const city = req.params.city;
  city === "stratford"
    ? (output = colleges.stratford)
    : city === "heathrow"
    ? (output = colleges.Heathrow)
    : city === "harrow"
    ? (output = colleges.Harrow)
    : "404 Page Not Found";

  res.json(output);
});

app.get("/:city/pharmacies", (req, res) => {
  let output;
  const city = req.params.city;
  city === "stratford"
    ? (output = pharmacies.stratford)
    : city === "heathrow"
    ? (output = pharmacies.Heathrow)
    : city === "harrow"
    ? (output = pharmacies.Harrow)
    : "404 Page Not Found";

  res.json(output);
});

app.get("/:city/:cat", (req, res) => {
  res.json(cities[req.params.city][req.params.cat] || "404 Page Not Found");
});

app.listen(process.env.PORT || 3000);
