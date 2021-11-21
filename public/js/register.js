let $ = (a,b=document)=>b.querySelector(a);
let btnReq = $("#btnReq");
let emailF = $("#email");
let passwF = $("#passw");
let passwF2 = $("#passw2");


btnReq.addEventListener("click", e =>{
    e.preventDefault();
    let data = {"email": emailF.value, "passw": passwF.value, "passw2":passwF2.value};
    fetch("/register", {method:"POST", body:JSON.stringify(data), headers:{ "Content-Type":"application/json"}})
    .then(res=> res.json())
    .then(data=>{
        if(data.err==="!pass"){
            $("#response").innerHTML = "password don't match";
        }
        if(data.err==="!user"){
            $("#response").innerHTML = "this email is already in use";
        }
        if(data.register==="successfully"){
            $("#response").innerHTML = "register successfully";
            location.href ="../";
        }
        if(data.tryagain){
            $("#response").innerHTML = "try again";
        }
    })
    .catch(err=>console.log(err));
})