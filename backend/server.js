require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const DB = require("./db/db")
const cors = require("cors")
// app.use(cors({
//     origin: "*"
// }))
//Connecting to DB
DB();

// Accepting body data from routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes Paths
app.use("/api/notes", require("./routers/noteRouters"))
app.use("/api/user", require("./routers/userRouters"))
app.listen(port)