require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const DB = require("./db/db")

//Connecting to DB
DB();

// Parsing Body Data to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes Paths
app.use("/api/notes", require("./routers/noteRouters"))


app.listen(port)