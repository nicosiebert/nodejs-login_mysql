const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const app = express();

require("dotenv").config();


//setting
app.set("port", process.env.PORT || process.env.PORTHOST);
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
app.use(require("./src/routes/routes.js"));
//server
app.listen(app.get("port"), ()=>{
    console.log(`servidor iniciado en el puerto ${ app.get("port") }`);
})