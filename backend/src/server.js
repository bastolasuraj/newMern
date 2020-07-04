const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const {APP_PORT, DB_URL} = require("./config")
const {logger} = require("./middlewares")
const cors = require("cors")
const app = express()
app.use(cors({origin: "http://localhost:3000",}))
app.use(bodyParser.json())
app.use(logger)
// app.use(auth)

//Mongoose Connection
mongoose.Promise = global.Promise
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected Successfully")
}).catch(() => {
    console.log("Failed toConnect the Database")
})

app.use(express.static(__dirname + "/assets"))
app.set("views", __dirname + "/views")
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

require("./routes")(app)

app.get("/*", (req, res) => {
    res.render("index.html")
})
app.get("/*/*", (req, res) => {
    res.status(403).send("Page not found")
});
app.listen(APP_PORT, () => {
    console.log(`The App has started on http://localhost:${APP_PORT}`)
})


