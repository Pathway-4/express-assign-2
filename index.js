"use strict";

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3006;

app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    city: "New York",
    state: "NY",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: "456 Main St",
    city: "New York",
    state: "NY",
  },
  {
    id: 3,
    name: "Bob Smith",
    age: 40,
    address: "789 Main St",
    city: "New York",
    state: "NY",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.status(200).json({ name: "John Doe", age: 30 });
});

app.post("/data", (req, res) => {
  res.status(201).json({ name: "Jane Doe", age: 30 });
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.get("/search", (req, res) => {
  const name = req.query.name;
  res.send(`Hello, ${name}!`);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  const user = users.find((user) => {
    return user.id === +req.params.id;
  });
  res.status(200).json(user);
});



app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
