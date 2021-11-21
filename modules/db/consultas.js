const mysqlconfig = require("./mysqlconfig");
const conn = mysqlconfig.connection;

exports.fSelect = async function fSelect(email, passw){
    let datos
    let consulta = `SELECT email, passw FROM client WHERE email ="${email}" AND passw ="${passw}"`;
    await conn.query(consulta, (err, results, fields)=>{
        if(err) {
            datos = {"nombre": "nico", "datos": "ninguno"};
        }
        console.log(results);
    });
}
exports.fInsert = function fInsert(email, user, pass, req, res){
    let consulta = "";
    conn.query(consulta, (err, results, fields)=>{
        if(!err){
            res.send()
        }
    })
}
exports.fUpdate = function fUpdate(email, user, pass){
    let consulta = "";
    conn.query(consulta, (err, results, fields)=>{

    })
}
exports.fDelete = function fDelete(email, user, pass){
    let consulta = "";
    conn.query(consulta, (err, results, fields)=>{

    })
}


