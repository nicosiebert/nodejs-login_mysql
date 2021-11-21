let $ = (a,b=document)=>b.querySelector(a);
let btnReq = $("#btnReq");
let emailF = $("#email");
let passwF = $("#passw");


btnReq.onclick =  e =>{
    e.preventDefault();
    let data = {"email": emailF.value, "passw": passwF.value};
    fetch("/login", {
        method:"POST",
        body:JSON.stringify(data),
        headers:{ "Content-Type":"application/json"}
    })
    .then(res=> res.json())
    .then(data=>{
        if(data.login ==="successfully"){
            $("#response").textContent ="Has iniciado session correctamente";
            location.href="../";
        }
        if(data.err ==="!user"){
            $("#response").textContent ="Ha ocurrido un error, usuario o contraseña incorrecto";
        }
    })
    .catch(err=>console.log(err));
}