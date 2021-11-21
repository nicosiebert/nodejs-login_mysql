const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const bcryptjs = require("bcryptjs");
const app = express();

require("dotenv").config();


//setting
let port = process.env.SPORT;
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(morgan("dev"));


app.use(session({
    secret:"secret",
    resave:true,
    saveUninitialized:true
}))


//public
app.use(express.static("./public"));

// routes
app.use(require("./src/routes/routes"));
//server
app.listen(port, (req, res)=>{
    console.log(`servidor iniciado en el puerto ${port}`);
})