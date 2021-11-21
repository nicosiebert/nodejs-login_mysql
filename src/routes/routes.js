const express = require("express");
const router = express.Router();
const api = require("../../modules/db/auth");
const bycript = require("bcryptjs");
const session = require("express-session");

let sess
router.get("/", (req, res)=>{
    res.render("index.ejs",{req:req});
})

// login
router.get("/login", (req, res)=>{
    res.render("login.ejs", {req:req});
})
router.post("/login", async (req, res)=>{
    let {email, passw}  = req.body;
    data = {email:email, passw:passw}
    api.login(email, passw, req, res);
})


// register
router.get("/register",(req, res)=>{
    res.render("register.ejs",{req:req, res:res})

})
router.post("/register", async (req, res)=>{
    let {email, passw, passw2} = req.body;
    if(passw===passw2){
        api.register(email, passw, req, res);
        
    }else{
        res.send({err:"!pass"});
    }
    
})

router.get("/profile", (req, res)=>{
    if(req.session.user){
        res.render("profile.ejs",{req:req, res:res});
    }
    else{
        res.redirect("/");
    }
})

router.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/");
});
module.exports = router;