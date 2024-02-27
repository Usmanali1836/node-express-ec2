import express from "express";

const app = express();

app.listen(5002, () => console.log("Api running on port 5002"));

app.get("/", (req, res) => res.json("My Api run"));
