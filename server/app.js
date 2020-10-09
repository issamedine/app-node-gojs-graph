const express = require("express")
const db = require('./config/database')
const app = express()

app.use(express.static("node_modules"));
app.use(express.json());

require('dotenv').config();

db

const RouteEvents = require("./routes/route-event")
app.use("/", RouteEvents)

port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`app is listening to port ${port}`)
})