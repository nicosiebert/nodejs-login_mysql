let id = (a, b = document) => b.getElementById(a);
const logout = id("logout");

if(logout){
logout.onclick = e =>{
    fetch("/logout").then(res=>res.text()).then(data=>console.log(data));
    location.href = "./";
}
}